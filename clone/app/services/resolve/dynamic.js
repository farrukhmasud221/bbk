import { resolveGridColumnLengths } from './grid';
import { getParamLabel } from '../metaData';
/** A method to resolve dynamic component
 * @param {object} viewObj - metadata for the current view object
 * @param {object} httpParams - params & their values potentially required to execute REST operation for the detail Component
 * @param {object} httpService - service to execute REST operations
*/
export let resolveDynamic = async (viewObj, httpParams, httpService, $stateParams) => {

    //let [response, isSuccess] = await httpService.request(viewObj.operationId, httpParams);

    /*Multiple cases
    case 1: response.data is an object of primitive types
    case 2: response.data is an object of primitive and array types;
    case 3: response.data is an object of primitive and array of object types;
    case 4: case with but parsing individual primitive typexs yields a JSOn object

    write a recursive function that an object and checks if value for each key is primitive or not    
*/
    // if (isSuccess) {
        console.log(copyObject(viewObj))
    let result = { grid: [], detail: {} };
    let detail = {}; let dynamic = { grid: [], detail: [] };
    // parseObject(viewObj, result);
    parseObject(viewObj, detail, dynamic); console.log(copyObject(dynamic));
    // console.log(copyObject(result));
    // result.grid.forEach(grid => {
    //     if (grid.length) {
    //         let columnsDefs = [];
    //         Object.keys(grid[0]).forEach(columnName => {
    //             columnsDefs.push({ name: columnName, "width": "*", "cellClass": "text-center", enableCellEdit: false });
    //         });
    //         grid = { panelType: 'ListView', gridOptions: { columnsDefs: columnsDefs, data: grid } };
    //         resolveGridColumnLengths(grid, 0, getParamLabel);
    //     }
    // });
    // let details = Object.keys(result.detail);

    // if (details) {
    //     let Params = [];
    //     details.forEach(detail => {
    //         Params.push({ name: detail, value: result.detail[detail], direction: 'out', ctype: 'label' });
    //     });
    //     result.detail = Params;
    // }
    return dynamic;
}

let parseObject = (obj, detail, dynamic) => {
    Object.keys(obj).forEach(key => {
        if (isDefined(obj[key])) {
            if (typeof obj[key] !== 'object') {
                try {
                    let parsedValue = JSON.parse(obj[key]);
                    parseInnerObject(parsedValue, key, detail, dynamic);
                } catch (err) {
                    console.log(key, obj[key])
                    detail[key] = obj[key];
                }
            } else
                parseInnerObject(obj, key, detail, dynamic);
        } else
            dynamic.detail.push({ name: key, value: obj[key] });
    });
}

let parseInnerObject = (obj, key, detail, dynamic) => {
    if (Array.isArray(obj)) {
        if (obj.length) {
            if (typeof obj[0] === 'object')
                dynamic.grid.push({ name: key, value: obj });
            else if (obj.every(element => typeof element !== 'object')) {
                console.log(key)
                detail[key] =obj;
            }
            else
                detail[key] = JSON.stringify(obj);
        } else
            detail[key] = obj;
    } else
        dynamic.detail.push({ name: key, value: obj });

}


// let parseObject = (obj, result, detailKey) => {
//     if (Array.isArray(obj)) {
//         if (obj.length) {
//             if (typeof obj[0] === 'object')
//                 result.grid.push(obj);
//             else if (obj.every(element => typeof element !== 'object'))
//                 result.detail[detailKey || Object.keys(result.detail).length] = obj;
//             else
//                 result.detail[detailKey || Object.keys(result.detail).length] = JSON.stringify(obj);
//         } else
//             result.detail[detailKey || Object.keys(result.detail).length] = obj;
//     } else
//         Object.keys(obj).forEach(key => {
//             if (isDefined(obj[key])) {
//                 if (typeof obj[key] !== 'object') {
//                     try {
//                         let parsedValue = JSON.parse(obj[key]);
//                         if (typeof parsedValue === 'object')
//                             parseObject(obj[key], result, key)
//                         else
//                             result.detail[key] = parsedValue;
//                     } catch (err) {
//                         result.detail[key] = obj[key];
//                     }
//                 } else
//                     parseObject(obj[key], result, key);
//             } else
//                 result.detail[key] = obj[key];
//         });
//     return;

//     /*
//     if Array
//         if array of primitives

//         else if array of objects
//     else if Object
//         for eachKey
//             if primitive
//                 try parsing to check
//                     if object, 
//                         recurse
//                     else 
//                         return
//                 else
//                     return
//             else
//                 recurse     

//     */
//     // if (Array.isArray(obj)) {

//     // } else
//     //     Object.keys(obj).forEach(key => {
//     //         if (typeof obj[key] !== 'object') {
//     //             try {
//     //                 let parsedValue = JSON.parse(obj[key]);
//     //                 if (typeof parsedValue === 'object') {
//     //                     if (Array.isArray(parsedValue)) {
//     //                         if (parsedValue.length) {
//     //                             if (typeof parsedValue[0] === 'object')
//     //                                 result.grid.push(parsedValue);
//     //                             else if (parsedValue.every(value => typeof value !== 'object'))
//     //                                 result.detail[key] = parsedValue;
//     //                         } else
//     //                             result.detail[key] = parsedValue;
//     //                     } else {
//     //                         parseObject(parsedValue);
//     //                     }
//     //                 } else
//     //                     result.detail[key] = obj[key];
//     //             } catch (err) {
//     //                 result.detail[key] = obj[key];
//     //             }
//     //         } else {

//     //         }
//     //     });
// }

// let parseObject = (obj, result, detailKey) => {
//     if (Array.isArray(obj)) {
//         console.log('array')
//         if (obj.length) {
//             if (typeof obj[0] === 'object')
//                 result.grid.push(obj);
//             else if (obj.every(element => typeof element !== 'object'))
//                 result.detail[detailKey || Object.keys(result.detail).length] = obj;
//             else
//                 result.detail[detailKey || Object.keys(result.detail).length] = JSON.stringify(obj);
//         } else
//             result.detail[detailKey || Object.keys(result.detail).length] = obj;
//     } else
//         Object.keys(obj).forEach(key => {
//             //console.log(key, obj[key])
//             if (isDefined(obj[key])) {
//                 if (typeof obj[key] !== 'object') {
//                     try {
//                         let parsedValue = JSON.parse(obj[key]);
//                         console.log(parsedValue)
//                         if (typeof parsedValue === 'object')
//                             parseObject(parsedValue, result, key)
//                         else
//                             result.detail[key] = parsedValue;
//                     } catch (err) {
//                         result.detail[key] = obj[key];
//                     }
//                 } else result.detail[key] = obj[key];
//                 //parseObject(obj[key], result, key);
//             } else
//                 result.detail[key] = obj[key];
//         });
//     return;
// }