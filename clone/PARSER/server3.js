const fs = require('fs');
const JSONfn = require('json-fn')				//serializes functions as strings and vice versa
let files = fs.readdirSync('./source');	        //direcctory of js files of the form: module.exports = { states: [obj1, obj2...]}

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
    let indices = findAll(str, "let viewsObj");
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

for (let i of files) {
    // let code = fs.readFileSync('./js/' + "top.gui.abmfdashboard.gui.invoices.js", 'utf8');
    let code = fs.readFileSync('./source/' + i, 'utf8');
    let viewsObjPos = findAllObjs(code, "let viewsObj");

    // console.log(viewsObjPos)
    let modifiedStrs = [];
    for (let pos of viewsObjPos) {
        let error = true;
        let viewsString = code.slice(pos.start, pos.end + 1);
        viewsString = pos.char === '[' ? viewsString : ('[' + viewsString + ']');
        //fs.writeFileSync('string.js', viewsString)
        let undefinedObj = {}
        let viewsObj;
        while (error) {
            try {
                viewsObj = eval(viewsString);
                error = false;
            } catch (err) {
                console.log(err, i)
                require('jsonfile').writeFileSync('err.json', err, { flag: 'a', spaces: 4 })
                let undefinedVar = err.message.substring(0, err.message.indexOf(' is not defined'));
                let spaceIndex = viewsString.indexOf(' ', viewsString.indexOf(undefinedVar));
                let plusIndex = viewsString.indexOf('+', viewsString.indexOf(undefinedVar));
                undefinedVar = viewsString.substring(viewsString.indexOf(undefinedVar), plusIndex);
                //console.log(undefinedVar)
                undefinedObj[undefinedVar] = undefinedVar + Math.random();
                viewsString = replaceAll(viewsString, undefinedVar, "'" + undefinedObj[undefinedVar] + "'");
                // undefinedObj[undefinedVar] = "'" + undefinedVar + Math.random() + "'";
                // viewsString = replaceAll(viewsString, undefinedVar, undefinedObj[undefinedVar]);
                //console.log(viewsString)
            }
        }
        //console.log(typeof viewsObj);
        //let viewsObjArr = Array.isArray(viewsObj) ? viewsObj : [viewsObj];
        //console.log(Array.isArray(viewsObj))
        for (let viewObj of viewsObj) {
            if (viewObj.panelType && (viewObj.panelType.toLowerCase() === 'listview' || viewObj.panelType.toLowerCase() === 'searchview')) {
                viewObj.responsePath = '.rows';
            } else if (viewObj.panelType && viewObj.panelType.toLowerCase() === 'readonlyview') {
                viewObj.responsePath = '';
                //console.log("ROV")
            }
        }
        // viewsObjArr = Array.isArray(viewsObj) ? viewsObjArr : viewsObjArr[0];
        viewsObj = pos.char === '[' ? viewsObj : viewsObj[0];
        // let viewsStringFinal = JSON.stringify(viewsObjArr, null, 4);
        let viewsStringFinal = JSON.stringify(viewsObj, null, 4);
        for (let key of Object.keys(undefinedObj)) {
            //console.log(undefinedObj[key], viewsStringFinal.indexOf(undefinedObj[key]))
            viewsStringFinal = replaceAll(viewsStringFinal, undefinedObj[key], '" + ' + key + ' + "');
        }
        modifiedStrs.push(viewsStringFinal);
        // break;
    }
    let finalString = '';
    let start = 0; let index = 0;
    //finalString = code.substring(0, viewsObjPos[0].start) + modifiedStrs[0] + code.substring(viewsObjPos[0].end + 1, viewsObjPos[1].start) + modifiedStrs[1] + code.substring(viewsObjPos[1].end + 1, code.length);
    for (let i = 0; i < viewsObjPos.length; i++) {
        finalString += code.substring(start, viewsObjPos[i].start) + modifiedStrs[i];
        start = viewsObjPos[i].end + 1;
        if (i === (viewsObjPos.length - 1))
            finalString += code.substring(start);
    }

    // // //let reverse = replaceAll(JSON.stringify(viewsObj, null, 4), Object.keys(undefinedObj)[0], '" + ' + Object.keys(undefinedObj)[0] + ' + "');

    fs.writeFile('./target/' + i, finalString);
}