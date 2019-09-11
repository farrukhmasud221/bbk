export const states = [{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.failedReattempts",
    params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                "panelType": "DynamicGrid",
                "operationId": "GU_GetLockReAttemptsProvBatchID",
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
                        { name: 'v_TXID', width: '*', displayName: 'TXID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_ReattemptedTXID', width: '*', 'Attempted TXID': 'Exit Message', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_OriginalAttemptTXID', width: '*', 'Original TXID': 'Exit Message', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_LockFailReason', width: '*', 'Fail Reason': 'Exit Message', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_LastAttemptedBy', width: '*', 'Re-attempted By': 'Exit Message', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_ExitMessage', width: '*', displayName: 'Error Message', "cellClass": "text-center", enableCellEdit: false },
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
                    let v_ReattemptedTXID = JSON.parse(row.v_RequestPlatformParameters).v_OldTXID || null;
                    data.push(Object.assign(JSON.parse(row.v_RequestData), { v_TXID: row.v_TXID }, { v_ReattemptedTXID: v_ReattemptedTXID }, { v_ExitMessage: row.v_ResponseData }, { v_OriginalAttemptTXID: row.v_OriginalAttemptTXID }, { v_LastAttemptedBy: row.v_LastAttemptedBy }, { v_LockFailReason: row.v_LockFailReason }));
                });
                viewsObj.gridOptions.data = data;
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.failedReattempts.gui",
    url: "/FailedReattempts",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
