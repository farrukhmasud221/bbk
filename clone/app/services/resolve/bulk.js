import { resolveGridColumnLengths } from './grid';

/** A method to resolve bulk component
 * @param {object} viewObj - metadata for the current view object
*/
export let resolveBulk = async (viewObj, httpService) => {
    let [response, isSuccess] = await httpService.request(viewObj.selectParam.operationId);
    viewObj.selectParam.options = [];
    viewObj.selectParam.options.push({ display: "--- Please select " + viewObj.selectParam.label + " ---", value: '' });
    if (isSuccess)
        for (let row of response.data.rows)
            viewObj.selectParam.options.push({ display: row[viewObj.selectParam.displayName], value: row[viewObj.selectParam.valueName], metaData: row[viewObj.selectParam.metaDataParam], api: row[viewObj.selectParam.apiParam], templateID: row[viewObj.selectParam.templateID], apiID: row[viewObj.selectParam.apiID] });
    viewObj.selectParam.value = '';
    // viewObj.gridOptions.columnDefs = [];
    // Object.keys(viewObj.headerParamMappings).forEach(header => {
    //     viewObj.gridOptions.columnDefs.push({ name: viewObj.headerParamMappings[header], displayName: header, cellClass: "text-center", headerCellClass: "text-center", enableCellEdit: false, width: '*' })
    // });

    // resolveGridColumnLengths(viewObj, 0, getParamLabel);
}
