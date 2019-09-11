export const states = [{
    name: "top.gui.fileOperationsAttemptHistory",
    params: { AttemptHistory: null },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                "panelType": "DynamicGrid",
                heading: "Attempt History",
                "operationId": "GU_GetTXIDHistory",
                mappings: {
                    v_TXID: 'AttemptHistory'
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
                },
            }
            console.log($stateParams.AttemptHistory)
            let [response, isSuccess] = await httpService.request(viewsObj.operationId, { v_TXID: $stateParams.AttemptHistory });
            if (isSuccess && response.data.v_ProvBatchMetaData) {
                let metaData = JSON.parse(response.data.v_ProvBatchMetaData);
                viewsObj.gridOptions.columnDefs = [];
                viewsObj.gridOptions.columnDefs.push({ name: 'v_TXID', width: '*', displayName: 'TXID', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_TxExitStatus', width: '*', displayName: 'Status', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_OriginalAttemptTXID', width: '*', displayName: 'Original TXID', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_NextAttemptedTXID', width: '*', displayName: 'Next Attempt TXID', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_LastAttemptedBy', width: '*', displayName: 'Attempted By', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_DiscardedBy', width: '*', displayName: 'Discarded By', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_DiscardedTime', width: '*', displayName: 'Discarded At', "cellClass": "text-center", enableCellEdit: false });
                viewsObj.gridOptions.columnDefs.push({ name: 'v_ExitMessage', width: '*', displayName: 'Exit Message', "cellClass": "text-center", enableCellEdit: false });
                Object.keys(metaData).forEach(key => {
                    viewsObj.gridOptions.columnDefs.push({ name: metaData[key].param, width: '*', displayName: key, "cellClass": "text-center", enableCellEdit: false })
                });

                let data = [];
                console.log(metaData, response.data.rows[0], viewsObj.gridOptions.columnDefs)
                response.data.rows.forEach(row => {
                    data.push(Object.assign(JSON.parse(row.v_RequestData), { v_TXID: row.v_TXID }, { v_ProvisioningBatchID: row.v_ProvisioningBatchID }, { v_ClientRequestID: row.v_ClientRequestID }, { v_TargetAPI: row.v_TargetAPI }, { v_ExitMessage: row.v_ResponseData }, { v_OriginalAttemptTXID: row.v_OriginalAttemptTXID }, { v_NextAttemptedTXID: row.v_NextAttemptedTXID }, { v_DiscardedBy: row.v_DiscardedBy }, { v_DiscardedTime: row.v_DiscardedTime }, { v_LastAttemptedBy: row.v_LastAttemptedBy }, { v_TxExitStatus: row.v_TxExitStatus }));
                })
                console.log(data)
                viewsObj.gridOptions.data = data;
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsAttemptHistory.gui",
    url: "?AttemptHistory",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
