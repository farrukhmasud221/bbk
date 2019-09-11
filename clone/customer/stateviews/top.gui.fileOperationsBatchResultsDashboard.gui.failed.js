export const states = [{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.failed",
    params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                "panelType": "DynamicGrid",
                "operationId": "GU_GetFailedTxByProvBatchID",
                mappings: {
                    v_ProvisioningBatchID: 'BatchID'
                },
                gridOptions: {
                    enableSorting: true,
                    paginationPageSizes: [10, 20, 50, 100],
                    paginationPageSize: 10,
                    data: null,
                    enableGridMenu: true,
                    enableRowHeaderSelection: true,
                    enableRowSelection: true,
                    enableScrollbars: true,
                    enableFiltering: true,
                    rowEditWaitInterval: -1,
                    columnDefs: [
                        { name: 'v_TXID', width: '*', displayName: 'TXID', "cellClass": "text-center", enableCellEdit: false, cellTemplate: '<div><a ng-href=\"#!/?AttemptHistory={{row.entity.v_TXID}}\">{{grid.getCellValue(row, col)}}</a></div>' },
                        { name: 'v_OriginalAttemptTXID', width: '*', displayName: 'Original TXID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_ExitMessage', width: '*', displayName: 'Error Message', "cellClass": "text-center", enableCellEdit: false }
                    ]
                },
                rowOperations: [
                    {
                        type: 'edit',
                        label: "Update",
                        operationId: 'ReAttemptTXID',
                        bulk: true,
                        showOnDirty: true,
                        mappings: {
                            "v_Data": "v_Data"
                        },
                        serverBulk: true,
                        func: selectedRows => {
                            let data = [];
                            selectedRows.forEach(row => {
                                data.push({ v_Data: row });
                            });
                            return data;
                        }
                    },
                    {
                        bulk: true,
                        type: 'delete',
                        label: "Discard",
                        operationId: 'TX_DiscardProvBatchTX',
                        mappings: {
                            v_ProvisioningBatchID: "v_ProvisioningBatchID",
                            v_TXID: "v_TXID"
                        }
                    }
                ],

            }
            let [response, isSuccess] = await httpService.request(viewsObj.operationId, { v_ProvisioningBatchID: $stateParams.BatchID });
            if (isSuccess && response.data.v_ProvBatchMetaData) {
                console.log('sfdsfs')
                let metaData = JSON.parse(response.data.v_ProvBatchMetaData);
                Object.keys(metaData).forEach(key => {
                    viewsObj.gridOptions.columnDefs.push({ name: metaData[key].param, width: '*', displayName: key, "cellClass": "text-center", enableCellEdit: true })
                });
                let data = [];
                response.data.rows.forEach(row => {
                    data.push(Object.assign(JSON.parse(row.v_RequestData), { v_TXID: row.v_TXID }, { v_ProvisioningBatchID: row.v_ProvisioningBatchID }, { v_ClientRequestID: row.v_ClientRequestID }, { v_TargetAPI: row.v_TargetAPI }, { v_ExitMessage: row.v_ResponseData }, { v_OriginalAttemptTXID: row.v_OriginalAttemptTXID }));
                });
                viewsObj.gridOptions.data = data;
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.failed.gui",
    url: "/FailedTransactions",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
