let findAll = (str, substr) => {
    let start = -1;
    let results = [];
    while (1) {
        start = str.indexOf(substr, start + 1);
        if (start === -1)
            break;
        results.push(start);
    }
    return results;
}

let replaceAll = (str, findStr, repStr) => {
    let indices = findAll(str, findStr);
    if (indices.length)
        for (let index of indices)
            str = str.replace(findStr, repStr);
    return str;
}

let findObj = (code, findStr, findPos) => {
    let start = code.indexOf(findStr, findPos || 0);
    if (start >= 0) {
        let index = start;
        let begin = false;
        let openingChar;
        let closingChar;
        let count = 0;
        let startIndex;
        let stopIndex;
        while (1) {
            index++;
            if ((code[index] === "[" || code[index] === '{') && begin === false) {
                begin = true;
                openingChar = code[index];
                startIndex = index;
                closingChar = openingChar === '[' ? ']' : '}';
                count++;
                continue;
            }
            if (begin) {
                if (code[index] === openingChar)
                    count++;
                if (code[index] === closingChar)
                    count--;
                if (count === 0) {
                    stopIndex = index;
                    break;
                }
            }
        }
        return { start: startIndex, end: stopIndex, char: openingChar };
    }
    return null;
}

let findAllObjs = (str, findStr) => {
    let indices = findAll(str, findStr);
    console.log(indices)
    let results = [];
    for (let index of indices)
        results.push(findObj(str, findStr, index));
    return results;
}

let safeEval = code => {
    let error = true;
    let errCount = 0
    let repUnDefMappings = {}
    let evalCode;
    while (error) {
        try {
            //console.log(code)
            evalCode = eval(code);
            error = false;
        } catch (err) {
            errCount++;
            //if (errCount === 7) break;
            //console.log(err, i)
            require('jsonfile').writeFileSync('err.json', err, { flag: 'a', spaces: 4 })
            let undefinedVar = err.message.substring(0, err.message.indexOf(' is not defined'));
            let separatorIndices = [code.indexOf(',', code.indexOf(undefinedVar)), code.indexOf(' ', code.indexOf(undefinedVar)), code.indexOf('+', code.indexOf(undefinedVar))];
            separatorIndices.sort().find(element => element >= 0);
            undefinedVar = code.substring(code.indexOf(undefinedVar), separatorIndices.sort().find(element => element >= 0));
            repUnDefMappings[undefinedVar] = Math.random();
            code = replaceAll(code, undefinedVar, "'" + repUnDefMappings[undefinedVar] + "'");
        }
    }
    return { code: evalCode, replacer: repUnDefMappings };
}

let rejoinCode = (code, modifedCode, markers) => {
    let finalString = '';
    let start = 0;
    for (let j = 0; j < markers.length; j++) {
        finalString += code.substring(start, markers[j].start) + modifedCode[j];
        start = markers[j].end + 1;
        if (j === (markers.length - 1))
            finalString += code.substring(start);
    }
    return finalString;
}

let removeSpaces = (code, findObj) => {
    let findObjMarkers = findAllObjs(code, findObj);
    console.log(findObjMarkers)
    let modifiedStrs = [];
    for (let pos of findObjMarkers) {
        let obj = code.slice(pos.start, pos.end + 1);
        obj = pos.char === '[' ? obj : ('[' + obj + ']');
        let evalCode = safeEval(obj);
        let evalObj = evalCode.code;
        evalObj = pos.char === '[' ? evalObj : evalObj[0];
        let maxLength = evalObj.reduce((result, element) => {

            let length = JSON.stringify(element).length;
            console.log(length)
            console.log(JSON.stringify(element))
            if (length >= result) {
                result = length;
                //console.log(result)
            }
            return result
        }, 0);
        console.log(maxLength)
        // evalObj.forEach(element => console.log(JSON.stringify(element).length))
        // let viewsStringFinal = JSON.stringify(evalObj, null, '\n');
        let viewsStringFinal = stringify(evalObj, { maxLength: maxLength + 3 });
        for (let key of Object.keys(evalCode.replacer))
            viewsStringFinal = replaceAll(viewsStringFinal, evalCode.replacer[key], '" + ' + key + ' + "');
        modifiedStrs.push(viewsStringFinal);
    }
    if (modifiedStrs.length)
        return rejoinCode(code, modifiedStrs, findObjMarkers);
    return null;
}

let makeFileChanges = (files, findObj, fnChanges) => {
    for (let i of files) {
        let code = fs.readFileSync('./source/' + i, 'utf8');

        let viewsObjPos = findAllObjs(code, findObj);
        console.log(viewsObjPos, i)
        let modifiedStrs = [];
        for (let pos of viewsObjPos) {
            let viewsString = code.slice(pos.start, pos.end + 1);
            viewsString = pos.char === '[' ? viewsString : ('[' + viewsString + ']');
            let evalCode = safeEval(viewsString);
            let viewsObj = evalCode.code;
            fnChanges(viewsObj);
            viewsObj = pos.char === '[' ? viewsObj : viewsObj[0];
            let viewsStringFinal = JSON.stringify(viewsObj);
            for (let key of Object.keys(evalCode.replacer))
                viewsStringFinal = replaceAll(viewsStringFinal, evalCode.replacer[key], '" + ' + key + ' + "');
            modifiedStrs.push(viewsStringFinal);
        }
        let finalCode = require('js-beautify').js_beautify(rejoinCode(code, modifiedStrs, viewsObjPos), { indent_size: 4, indent_with_tabs: false, keep_array_indentation: true });
        fs.writeFileSync('./target/' + i, finalCode.length ? finalCode : code);
    }
}

let writeResponsePaths = viewsObj => {
    for (let viewObj of viewsObj) {
        if (viewObj.panelType) {
            if (viewObj.panelType.toLowerCase() === 'listview' || viewObj.panelType.toLowerCase() === 'searchview') {
                viewObj.responsePath = '.rows';
                for (let operation of viewObj.gridOperations || []) {
                    if (operation.viewsObj) {
                        // console.log(viewObj.operationId)
                        writeResponsePaths([operation.viewsObj]);
                    } else if (operation.operationId)
                        operation.responsePath = '';
                }
                for (let operation of viewObj.rowOperations || []) {
                    if (operation.viewsObj) {
                        // console.log(viewObj.operationId)
                        writeResponsePaths([operation.viewsObj]);
                    } else if (operation.operationId)
                        operation.responsePath = '';
                }
            } else if (viewObj.panelType.toLowerCase() === 'readonlyview') {
                viewObj.responsePath = '';
                for (let panel of viewObj.updatePanel || [])
                    if (viewObj[panel])
                        writeResponsePaths([viewObj[panel]])
            } else if (viewObj.panelType.toLowerCase() === 'insertview' || viewObj.panelType.toLowerCase() === 'sectioninsertview' || viewObj.panelType.toLowerCase() === 'updateview')
                viewObj.responsePath = '';
            else if (viewObj.panelType.toLowerCase() === "tabsmenu")
                if (viewObj.heading && viewObj[viewObj.heading] && viewObj[viewObj.heading].operationId)
                    viewObj[viewObj.heading].responsePath = '';

        }
        if (viewObj.Params)
            viewObj.Params.forEach(param => {
                if (param.ctype && (param.ctype === 'select' || param.ctype === 'selectSearch') && param.operationId)
                    param.responsePath = '.rows';
            });
        else if (viewObj.sections)
            viewObj.sections.forEach(section => {
                if (section.Params)
                    section.Params.forEach(param => {
                        if (param.ctype && (param.ctype === 'select' || param.ctype === 'selectSearch') && param.operationId)
                            param.responsePath = '.rows';
                    });
            });
    }
    return;
}

let getLabel = (param) => {

    var label = param.label;
    if (!label) {
        label = param.name;
    }
    // label = this.adjustText(label);
    if (label.toUpperCase().indexOf("V_") == 0 && label.length > 3) {
        label = label[2].toUpperCase() + label.substring(3);
        label = label.trim();
    }
    label = label.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
    return label;
}

let makeDetailOperations = viewsObj => {
    for (let viewObj of viewsObj) {
        if (viewObj.panelType)
            if (viewObj.panelType.toLowerCase() === 'readonlyview') {
                viewObj.nLabelCol = 3;
                viewObj.nValueCol = 9;
                if (viewObj.updatePanel) {
                    viewObj.operationsPlacement = "bottom"; //"top", "left", "right", "bottom"
                    viewObj.showAllOperationsInDropDown = false; //false or undefined mean 
                    viewObj.nPanelCol = 9;
                    viewObj.nButtonCol = 3;
                    if (viewObj.updatePanel && viewObj.updatePanel.length > 0) {
                        if (viewObj.Params && viewObj.Params.length) {
                            for (let response in operations[viewObj.operationId].responses) {
                                if (!viewObj.Params.find(param => param.name === response)) {
                                    let param = {
                                        "name": response,
                                        "ctype": "label",
                                        "direction": "out"
                                    };
                                    param.label = getLabel(param);
                                    viewObj.Params.push(param);
                                }
                            }
                        } else {
                            viewObj.Params = [];
                            for (let response in operations[viewObj.operationId].responses) {
                                let param = {
                                    "name": response,
                                    "ctype": "label",
                                    "direction": "out"
                                };
                                param.label = getLabel(param);
                                viewObj.Params.push(param);
                            }
                        }
                    }
                    if (!viewObj.detailOperations) {
                        viewObj.detailOperations = [];
                        for (let panel of viewObj.updatePanel || [])
                            if (viewObj[panel]) {
                                viewObj.detailOperations.push({
                                    "type": "update",
                                    "label": "Update " + viewObj[panel].heading,
                                    "viewsObj": viewObj[panel]
                                });
                                delete (viewObj[panel]);
                            }
                        delete (viewObj.updatePanel);
                    }
                }
            }
    }
}

var count = 0;
const fs = require('fs');
let files = fs.readdirSync('./source');	        //direcctory of js files of the form: module.exports = { states: [obj1, obj2...]}
const stringify = require("json-stringify-pretty-compact");
let swagger = require('jsonfile').readFileSync('./swagger.json');
let operations = {};
for (let path in swagger.paths)
    for (let method in swagger.paths[path])
        operations[swagger.paths[path][method].operationId] = { parameters: swagger.paths[path][method].parameters, responses: swagger.paths[path][method].responses["200"].schema.properties };

// makeFileChanges(files, 'let viewsObj', writeResponsePaths);
makeFileChanges(files, 'let viewsObj', makeDetailOperations);