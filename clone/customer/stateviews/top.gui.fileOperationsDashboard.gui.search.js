export const states = [{
    name: "top.gui.fileOperationsDashboard.gui.search",
    // params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                // "heading": "Search File Batches",
                "panelType": "SearchView",
                "operationId": "SE_GetProvisioningBatches",
                "Params": [
                    { "name": "v_ProvisioningBatchTemplateID", "ctype": "selectSearch", "label": "File Operation", "direction": "in", operationId: 'GU_GetProvBatchTemplatesAll', displayName: 'v_ProvBatchTemplateName', valueName: 'v_ProvisioningBatchTemplateID', },
                    { name: 'v_APIID', label: 'Target API', ctype: 'selectSearch', valueName: 'v_APIID', displayName: 'v_GlobalApiName', operationId: 'GU_GetBulkAPIsByPortal', "direction": "in" },
                    { name: 'v_ProvisioningBatchStatus', label: 'Batch Status', ctype: 'select', options: [{ "display": "Open", "value": 0 }, { "display": "Closed", "value": 1 }], "direction": "in" }
                ],
                "gridOptions": {
                    //enableGridMenu: true,
                    enableSorting: true,
                    paginationPageSizes: [50, 100, 500, 1000],
                    paginationPageSize: 1000,
                    data: null,
                    //enableGridMenu: true,
                    enableRowHeaderSelection: false,
                    enableRowSelection: false,
                    enableScrollbars: true,
                    enableFiltering: true,
                    "columnDefs": [
                        { name: 'v_ProvisioningBatchID', displayName: 'File Batch ID', "width": "*", "cellClass": "text-center", enableCellEdit: false, cellTemplate: '<div><a ng-href=\"#!/SubmittedFileDetails/BatchID={{row.entity.v_ProvisioningBatchID}}\">{{grid.getCellValue(row, col)}}</a></div>' },
                        { name: 'v_ProvBatchTemplateName', displayName: 'File Operation', "width": "*", "cellClass": "text-center", enableCellEdit: false },

                        { name: 'v_GlobalAPIName', displayName: 'Target API', "width": "*", "cellClass": "text-center", enableCellEdit: false },

                        { name: 'v_ProvBatchFileName', displayName: 'File Name', "width": "*", "cellClass": "text-center", enableCellEdit: false },

                        { name: 'v_UserName', displayName: 'Submitted By', "width": "*", "cellClass": "text-center", enableCellEdit: false },

                        { name: 'v_ExecutionStartTime', displayName: 'Submitted At', "width": "*", "cellClass": "text-center", enableCellEdit: false },
                    ]
                },
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsDashboard.gui.search.gui",
    url: "/SearchBatches",
    views: {
        "tabContent@top": {
            component: 'formComponent'
        },
        "searchResult@top.gui.fileOperationsDashboard.gui.search.gui": {
            component: 'gridComponent'
        }
    }
}]
