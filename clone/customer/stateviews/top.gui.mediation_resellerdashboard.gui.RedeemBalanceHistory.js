export const resellerdashboardRedeemBalanceHistoryState = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.RedeemBalanceHistory",
       abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [
                    {
                    "viewID": "9672",
                    "heading": "Balance Transfer to Account Report",
                    "panelType": "ListView",
                    "operationId": "balanceredemptionsByID_f2",
                    "mappings": {
                     "v_AccnoPrivateIdentityID": "AccNoPrivateIdentityID"
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
                             { "ViewColumnDefID": 36384, "name": "v_ToPublicIdentity", "label": "ToUserName","cellClass":"text-center",  enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ABMFBalanceAfter", "cellClass":"text-center","label": "BalanceAfter", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Amount", "cellClass":"text-center","label": "v_Amount", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_InsertTime", "cellClass":"text-center","label": "v_InsertTime", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Remarks", "cellClass":"text-center","label": "v_Remarks", "width": "*", enableCellEdit: false }
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
                    element["v_ABMFBalanceAfter"] ='$ '+ Number(element["v_ABMFBalanceAfter"]).toFixed(2);
                    element["v_Amount"]='$ '+ Number(element["v_Amount"]).toFixed(2);
                    //element["v_Amount"] ='$ '+ Number(element["v_Amount"]).toFixed(2);
                    //element["v_CommissionIn"]='$ '+ Number(element["v_CommissionIn"]).toFixed(2);
                   
                    respArray.push(element);
                });
                viewsObj[0].gridOptions.data=respArray;
                console.log("hello"+ "$ "+viewsObj[0].gridOptions.data);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.RedeemBalanceHistory.gui",
        url: "/RedeemBalanceHistory",
        views: {
            "tabContent@top": {
                component: "gridComponent"

            }
        }
    }]
};