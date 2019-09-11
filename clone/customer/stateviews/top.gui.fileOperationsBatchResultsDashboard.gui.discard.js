export const states = [{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.discard",
    params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                "panelType": "DynamicGrid",
                "operationId": "GU_GetDiscardedTxByProvBatchID",
                mappings: {
                    v_ProvisioningBatchID: 'BatchID'
                },
                gridOptions: {
                    enableSorting: true,
                    paginationPageSizes: [10, 20, 50, 100],
                    paginationPageSize: 10,
                    data: null,
                    enableGridMenu: true,
                    enableRowHeaderSelection: false,
                    enableRowSelection: false,
                    enableScrollbars: true,
                    enableFiltering: true,
                    columnDefs: [
                        { name: 'v_TXID', width: '*', displayName: 'TXID', "cellClass": "text-center", enableCellEdit: false, cellTemplate: '<div><a ng-href=\"#!/?AttemptHistory={{row.entity.v_TXID}}\">{{grid.getCellValue(row, col)}}</a></div>' },
                        { name: 'v_OriginalAttemptTXID', width: '*', displayName: 'Original TXID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_DiscardedByTXID', width: '*', displayName: 'Discarded By TXID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_DiscardedBy', width: '*', displayName: 'Discarded By', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_DiscardedTime', width: '*', displayName: 'Discarded At', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_LastAttemptedBy', width: '*', displayName: 'Last Attempted By', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_ExitMessage', width: '*', displayName: 'Exit Message', "cellClass": "text-center", enableCellEdit: false },
                    ]
                },
            }
            let [response, isSuccess] = await httpService.request(viewsObj.operationId, { v_ProvisioningBatchID: $stateParams.BatchID });
            if (isSuccess && response.data.v_ProvBatchMetaData) {
                let metaData = JSON.parse(response.data.v_ProvBatchMetaData);
                Object.keys(metaData).forEach(key => {
                    viewsObj.gridOptions.columnDefs.push({ name: metaData[key].param, width: '*', displayName: key, "cellClass": "text-center", enableCellEdit: false })
                });
                let data = [];
                response.data.rows.forEach(row => {
                    data.push(Object.assign(JSON.parse(row.v_RequestData), { v_TXID: row.v_TXID }, { v_ProvisioningBatchID: row.v_ProvisioningBatchID }, { v_ClientRequestID: row.v_ClientRequestID }, { v_TargetAPI: row.v_TargetAPI }, { v_ExitMessage: row.v_ResponseData }, { v_OriginalAttemptTXID: row.v_OriginalAttemptTXID }, { v_DiscardedByTXID: row.v_DiscardedByTXID }, { v_DiscardedBy: row.v_DiscardedBy }, { v_DiscardedTime: row.v_DiscardedTime }, { v_LastAttemptedBy: row.v_LastAttemptedBy }));
                });
                viewsObj.gridOptions.data = data;
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.discard.gui",
    url: "/DiscardedTransactions",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
