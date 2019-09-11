const fs = require('fs');
const JSONfn = require('json-fn')				//serializes functions as strings and vice versa
let files = fs.readdirSync('./source');	        //direcctory of js files of the form: module.exports = { states: [obj1, obj2...]}
const stringify = require("json-stringify-pretty-compact")

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

// splitObjs = (str, findStr) => {
//     let results = findAllObjs(str, findStr);
//     let slicedObj = [];
//     for (let result of results)
//         slicedObj.push(0,result.start);
//         slicedObj.push(null)
//     //  code.substring(0, startIndex) + reverse + code.substring(stopIndex + 1)
// }

let removeEscapeCharactersFromStrings = (object) => {
    let properties = Object.keys(object);							//get all keys of object
    for (let i of properties) {										//then for all keys, check if value is object or string
        if (typeof (object[i]) === "object" && object[i] !== null) 	//if object and not null, recursively call removeEscapeCharactersFromStrings
            removeEscapeCharactersFromStrings(object[i]);
        if (typeof (object[i]) === "string")						//if string, then remove all escape characters				
            object[i] = object[i].replace(/\r?\n|\r/g, '');
    }
    return;															//return when depth is reached
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

for (let i of files) {
    // let code = fs.readFileSync('./js/' + "top.gui.abmfdashboard.gui.invoices.js", 'utf8');

    // let code = fs.readFileSync('./source/' + "top.gui.aaa_administration_aaadashboard.js", 'utf8');
    let code = fs.readFileSync('./source/' + i, 'utf8');
    fs.writeFileSync('./code/' + i, require('js-beautify').js_beautify(code, { indent_size: 4, indent_with_tabs: true }));
    let viewsObjPos = findAllObjs(code, "let viewsObj");

    console.log(viewsObjPos, i)
    let modifiedStrs = [];
    for (let pos of viewsObjPos) {
        let viewsString = code.slice(pos.start, pos.end + 1);
        viewsString = pos.char === '[' ? viewsString : ('[' + viewsString + ']');
        let evalCode = safeEval(viewsString);
        let viewsObj = evalCode.code;
        for (let viewObj of viewsObj) {
            if (viewObj.panelType && (viewObj.panelType.toLowerCase() === 'listview' || viewObj.panelType.toLowerCase() === 'searchview'))
                viewObj.responsePath = '.rows';
            else if (viewObj.panelType && viewObj.panelType.toLowerCase() === 'readonlyview')
                viewObj.responsePath = '';
        }
        viewsObj = pos.char === '[' ? viewsObj : viewsObj[0];
        // let viewsStringFinal = JSON.stringify(viewsObj, null, 4);
        let viewsStringFinal = JSON.stringify(viewsObj);
        // let viewsStringFinal = stringify(viewsObj, { maxLength: Infinity });
        for (let key of Object.keys(evalCode.replacer))
            viewsStringFinal = replaceAll(viewsStringFinal, evalCode.replacer[key], '" + ' + key + ' + "');
        modifiedStrs.push(viewsStringFinal);
        // break;
    }

    let finalCode = require('js-beautify').js_beautify(rejoinCode(code, modifiedStrs, viewsObjPos), { indent_size: 4, indent_with_tabs: false, keep_array_indentation: true });
    // let modCode = removeSpaces(finalCode, '"Params":');
    // finalCode = modCode ? modCode : finalCode
    // let modCode = removeSpaces(finalCode, "columnDefs");
    // finalCode = modCode ? modCode : finalCode
    // finalCode = removeSpaces(finalCode, "columnDefs");
    fs.writeFileSync('./target/' + i, finalCode.length ? finalCode : code);
    //break;
}