import * as parser from 'papaparse';
export class utilityService {
    constructor() {

    }
    getLabel(param) {

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

    formatText(txt) {
        var str = txt.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
        return str;
    }

    getMask(item) {
        //https : //github.com/angular-ui/ui-mask
        //A Any letter.
        //9 Any number.
        //* Any letter or number.
        //? Make any part of the mask optional.

        if (item.mask) {
            return item.mask;
        }
        else {
            switch ((item.paramType && item.paramType.toUpperCase()) || (item.paramtype && item.paramtype.toUpperCase())) {
                case "TEXT":
                    return UserConfigService.settings.mask.text || '';
                case "PHONE":
                    return UserConfigService.settings.mask.phone || '(999) 999-9999';
            }
        }
    }

    parseCSV(text, lineTerminator, cellTerminator) {
        //break the lines apart
        let lines = text.split(lineTerminator);
        for (let j = 0; j < lines.length; j++) {
            if (lines[j] != "") {
                //create a table row 
                let tableRow = table.appendChild(document.createElement('tr'));
                //split the rows at the cellTerminator character
                let information = lines[j].split(cellTerminator);
                for (let k = 0; k < information.length; k++) {
                    //append the cell to the row
                    let cell = tableRow.appendChild(document.createElement('td'));
                    cell.appendChild(document.createTextNode(information[k]));

                }

            }

        }

    }
    async parseFile(file, fileType, params) {
        if (fileType === '.csv') {
            let errorMessage = "";
            let rowsInError = [];
            let parseResult = new Promise((resolve, reject) => {
                parser.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        console.log(results)
                        if (results.meta.aborted)
                            resolve([null, false, "Error in processing file! Try again or check your file."], results.meta.fields)
                        else if (!results.errors.length)
                            resolve([results.data, true, "", results.meta.fields]);
                        else {
                            errorMessage = 'The following rows in csv file were in error and have not been processed: \n';
                            while (results.errors.length !== 0) /* remove rows with mismatch - typically last row that only is there because of line break */
                                for (let i = 0; i < results.errors.length; i++) {
                                    console.log(results.errors[i].row)
                                    errorMessage += 'Row ' + (results.errors[i].row + 1) + ': ' + results.errors[i].message + '\n';
                                    rowsInError.push({ row: results.errors[i].row });
                                    results.errors.splice(i, 1);
                                    break;
                                }
                            //console.log(rowsInError)
                            for (let row of rowsInError) { /* remove erroneous rows from dataset */
                                //console.log(row, results.data[row.row])
                                results.data.splice(row.row, 1);
                                rowsInError.map(element => {
                                    //element = element--; console.log(element); return element;
                                    element.row--;
                                });
                                //console.log(rowsInError)
                            }
                            // console.log(rowsInError)

                            /* !!!??? TODO : maybe check for intermediate rows which are completely empty */
                            // let emptyCount = 0;
                            // for (let row of results.data)

                            //     results.meta.fields;
                            // results.meta.aborted

                            resolve([results.data, true, errorMessage, results.meta.fields])
                        }

                    }
                })
            })
            return await parseResult;
        }
    }

    async getColumnsFromCSVFile(file, fileType, params) {
        if (fileType === '.csv') {
            let errorMessage = "";
            let rowsInError = [];
            let parseResult = new Promise((resolve, reject) => {
                parser.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) { resolve(results.meta.fields.length) }
                })
            })
            return await parseResult;
        }
    }

    async parseCSVFile(file, fileType, params) {
        if (fileType === '.csv') {
            let errorMessage = "";
            let rowsInError = [];
            let parseResult = new Promise((resolve, reject) => {
                parser.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    dynamicTyping: true,
                    complete: function (results) {
                        console.log(results)
                        if (results.meta.aborted)
                            resolve([null, false, "Error in processing file! Try again or check your file."], results.meta.fields)
                        else if (!results.errors.length)
                            resolve([results.data, true, "", results.meta.fields]);
                        else {
                            errorMessage = 'The following rows in csv file were in error, but will be processed: \n';
                            while (results.errors.length !== 0) /* remove rows with mismatch - typically last row that only is there because of line break */
                                for (let i = 0; i < results.errors.length; i++) {
                                    console.log(results.errors[i].row)
                                    errorMessage += 'Row ' + (results.errors[i].row + 1) + ': ' + results.errors[i].message + '\n';
                                    rowsInError.push({ row: results.errors[i].row });
                                    results.errors.splice(i, 1);
                                    break;
                                }
                            // for (let row of rowsInError) { /* remove erroneous rows from dataset */
                            //     results.data.splice(row.row, 1);
                            //     rowsInError.map(element => {
                            //         element.row--;
                            //     });
                            // }
                            resolve([results.data, true, errorMessage, results.meta.fields])
                        }

                    }
                })
            })
            return await parseResult;
        }
    }

    async getCSVHeaders(file, fileType) {
        if (fileType === '.csv') {
            let errorMessage = "";
            let rowsInError = [];
            let parseResult = new Promise((resolve, reject) => {
                parser.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    dynamicTyping: true,
                    preview: 10,
                    complete: function (results) {
                        // console.log(results)
                        if (results.meta.aborted)
                            resolve([false, "Error in processing file! Try again or check your file."])
                        else
                            resolve([true, "", results.meta.fields]);
                    }
                })
            })
            return await parseResult;
        } else
            return [false, 'Wrong File Type'];
    }

    convertNumberToWords(amount) {
        var words = [];
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = [];
            for (let i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (let i = 9 - n_length, j = 0; i < 9; i++ , j++) {
                n_array[i] = received_n_array[j];
            }
            for (let i = 0, j = 1; i < 9; i++ , j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            var value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakh ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string + ' only';
    }

    findAll(str, substr) {
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

    replaceAll(str, findStr, repStr) {
        let indices = this.findAll(str, findStr);
        if (indices.length)
            for (let index of indices)
                str = str.replace(findStr, repStr);
        return str;
    }
}