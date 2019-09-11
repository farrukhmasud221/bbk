const fs = require('fs');
const JSONfn = require('json-fn')				//serializes functions as strings and vice versa
let files = fs.readdirSync('./js');	        //direcctory of js files of the form: module.exports = { states: [obj1, obj2...]}

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
    // let code = fs.readFileSync('./js/' + i, 'utf8');
    let code = fs.readFileSync('./js/' + "top.gui.abmfdashboard.gui.invoices.js", 'utf8');
    // fs.writeFileSync('code.js', code);
    //     while (pos !== -1) {
    //   count++;
    //   pos = str.indexOf('e', pos + 1);
    // }
    console.log(findAll(code, "let viewsObj"))
    let start = code.indexOf("let viewsObj");




    if (start >= 0) {
        // console.log(start)
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
                //console.log(index)
                begin = true;
                openingChar = code[index];
                startIndex = index;
                closingChar = openingChar === '[' ? ']' : '}';
                count++;
                //console.log(index, openingChar)
                continue;
            }
            if (begin) {
                if (code[index] === openingChar)
                    count++;
                if (code[index] === closingChar)
                    count--;
                if (count === 0) {
                    //console.log(index, code[index])
                    stopIndex = index;
                    //fs.writeFileSync('code.js', code.substring(0, startIndex) + JSON.parse(JSON.stringify(code.slice(startIndex, stopIndex + 1), null, 4)) + code.substring(0, stopIndex + 1))
                    break;
                }
            }
        }
        // let viewsObjString = code.slice(startIndex, stopIndex + 1)
        // console.log(viewsObjString.substring(viewsObjString.toLowerCase().indexOf('listview'), viewsObjString.toLowerCase().indexOf('listview')+ 'listview'.length+ 4) );    

        //let viewsObj = JSON.parse(JSON.stringify(code.slice(startIndex, stopIndex + 1)));
        let error = true;
        let viewsString = code.slice(startIndex, stopIndex + 1);
        // ;
        //require('jsonfile').writeFileSync('string.json', JSON.parse(JSON.stringify(viewsString)), { spaces: 4 })
        let undefinedObj = {}
        let viewsObj;
        while (error) {
            try {
                viewsObj = eval(viewsString);
                error = false;
            } catch (err) {
                let undefinedVar = err.message.substring(0, err.message.indexOf(' is not defined'));
                undefinedVar = viewsString.substring(viewsString.indexOf(undefinedVar), viewsString.indexOf('+', viewsString.indexOf(undefinedVar)));
                console.log(findAll(viewsString, undefinedVar));
                //console.log(err.message.substring(0, err.message.indexOf(' is not defined')));
                //console.log(viewsString.substring(code.slice(startIndex, stopIndex + 1).indexOf(undefinedVar), viewsString.indexOf('+', code.slice(startIndex, stopIndex + 1).indexOf(undefinedVar))));
                undefinedObj[undefinedVar] = "'" + undefinedVar + "'";
                viewsString = replaceAll(viewsString, undefinedVar, undefinedObj[undefinedVar]);
                console.log(viewsString)
                //console.log(undefinedObj[undefinedVar])

                // console.log(viewsString.indexOf(viewsString.substring(code.slice(startIndex, stopIndex + 1).indexOf(undefinedVar), viewsString.indexOf('+', code.slice(startIndex, stopIndex + 1).indexOf(undefinedVar)))))
            }
        }
        //console.log(typeof eval(viewsObj));
        viewsObj = Array.isArray(viewsObj) ? viewsObj : [viewsObj];
        //console.log(Array.isArray(viewsObj))
        for (let viewObj of viewsObj) {
            console.log(viewObj)
            if (viewObj.panelType && (viewObj.panelType.toLowerCase() === 'listview' || viewObj.panelType.toLowerCase() === 'searchview')) {
                console.log("hello")
                viewObj.responsePath = '.rows';
            } else if (viewObj.panelType && viewObj.panelType.toLowerCase() === 'readonlyview')
                viewObj.responsePath = '';
        }
        let reverse = replaceAll(JSON.stringify(viewsObj, null, 4), Object.keys(undefinedObj)[0], '" + ' + Object.keys(undefinedObj)[0] + ' + "');
        //console.log(viewsObj);
        fs.writeFileSync('temp.js', code.substring(0, startIndex) + reverse + code.substring(stopIndex + 1));
        //require('jsonfile').writeFileSync('temp.js', JSON.parse(code.substring(0, startIndex) + JSON.stringify(viewsObj) + code.substring(stopIndex + 1), { spaces: 4 });
        break;
    }







}



