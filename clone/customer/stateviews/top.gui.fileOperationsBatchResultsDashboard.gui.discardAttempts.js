export const states = [{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.discardAttempts",
    params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                "panelType": "DynamicGrid",
                "operationId": "GU_GetDiscardAttemptsByProvBatchID",
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
                        { name: 'v_TXID', width: '*', displayName: 'Discard TXID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_Status', width: '*', displayName: 'Status', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_DiscardTXID', width: '*', displayName: 'Attempted to Discard', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_OriginalAttemptTXID', width: '*', displayName: 'Original TXID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_UserName', width: '*', displayName: 'Discard Attempted By', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_LockFailReason', width: '*', displayName: 'Fail Reason', "cellClass": "text-center", enableCellEdit: false },
                    ]
                },
            }
            let [response, isSuccess] = await httpService.request(viewsObj.operationId, { v_ProvisioningBatchID: $stateParams.BatchID });
            if (isSuccess) {
                let data = [];
                response.data.rows.forEach(row => {
                    let v_DiscardTXID = JSON.parse(row.v_RequestData).v_TXID || null;
                    data.push(Object.assign({ v_TXID: row.v_TXID }, { v_Status: row.v_LockFailReason === null ? 'SUCCESS' : 'FAILURE' }, { v_OriginalAttemptTXID: row.v_OriginalAttemptTXID }, { v_DiscardTXID: v_DiscardTXID }, { v_DiscardedByTxID: row.v_DiscardedByTxID }, { v_UserName: row.v_UserName }, { v_LockFailReason: row.v_LockFailReason }));
                });
                viewsObj.gridOptions.data = data;
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.discardAttempts.gui",
    url: "/DiscardAttempts",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
