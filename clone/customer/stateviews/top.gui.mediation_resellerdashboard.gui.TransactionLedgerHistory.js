export const resellerdashboardTransactionLedgerHistoryState = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.TransactionLedgerHistory",
       abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [
                    {
                    "viewID": "9672",
                    "heading": "All Transaction Report",
                    "panelType": "ListView",
                    "operationId": "GU_transactionsledger",
                    "mappings": {
                     "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                           // { "ViewColumnDefID": 36391, "name": "AccNoPrivateIdentityID","cellClass":"text-center", "label": "AccNoPrivateIdentityID",  "width": "auto", enableCellEdit: false },
                             { "ViewColumnDefID": 36384, "name": "Amount", "label": "Amount","cellClass":"text-center",  enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "Balance", "cellClass":"text-center","label": "Balance", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "Commission", "cellClass":"text-center","label": "Commission", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "Description", "cellClass":"text-center","label": "Description", "width": "*", enableCellEdit: false },
                            //{ "ViewColumnDefID": 36388, "name": "v_Remarks", "cellClass":"text-center","label": "v_Remarks", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    },
                    // "gridOperations": [{
                    //     operationId: "WF_PaymentByVoucher",
                    //     label: "Add Payment",
                    //     type: "insert",
                    //     viewsObj: {
                    //         "viewID": "888",
                    //         "heading": "Add payment",
                    //         "mappings": {
                    //             "v_AccountID": "AccountID"
                    //         },
                    //         "panelType": "InsertView",
                    //         buttonLabel: "Add Payment",
                    //         "operationId": "WF_PaymentByVoucher",
                    //         "Params":[
                    //             {"ViewParamId":61575, "name":"v_AccNoprivateIdentityID", "ctype":"number", "paramtype":"bigint", "label":"v_AccNoprivateIdentityID", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":61575, "name":"v_VoucherID", "ctype":"number", "paramtype":"bigint", "label":"v_VoucherID", "direction":"in", "validator":"", "width":"auto"}
                    //     ]
                    //     }
                    // }],
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
	 let respArray=[];    
                viewsObj[0].gridOptions.data.forEach(element => {
                    //console.log('$ ' + Number(element["v_CurrentBalance"]).toFixed(2));
                   
                    element["Amount"] ='$ '+ Number(element["Amount"]).toFixed(2);
                    element["Balance"]='$ '+ Number(element["Balance"]).toFixed(2);
                     if(element["Commission"]==="-")
                     {
                        
                         element["Commission"];
                     }
                     else
                     {
                    element["Commission"] ='$ '+ Number(element["Commission"]).toFixed(2);
                    //element["v_DeferredCommission"]='$ '+ Number(element["v_DeferredCommission"]).toFixed(2);
                }
                    respArray.push(element);
                    
                });
                viewsObj[0].gridOptions.data=respArray;
                console.log("hello"+ "$ "+viewsObj[0].gridOptions.data);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.TransactionLedgerHistory.gui",
        url: "/TransactionLedgerHistory",
        views: {
            "tabContent@top": {
                component: "gridComponent"

            }
        }
    }]
};