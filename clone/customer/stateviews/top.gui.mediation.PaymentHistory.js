export const PaymentHistoryState = {
    states: [{
        name: "top.gui.mediation_PaymentHistory",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Wallet Payment History",
                    "panelType": "SearchView",
                    //buttonLabel: "Search",
                    "operationId": "receiptsByUserName_f1",
                    "Params": [

                        { "ViewParamId": 71178, "name": "v_PrivateIdentity", "ctype": "label", "paramtype": "varchar", "label": "UserName", "direction": "in", "validator": "", "width": "auto", "placeholder": "+1 (416) 123 xxxx", "required": "true" },
                    ],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 36388, "name": "v_UserName", "cellClass":"text-center","label": "v_UserName", "width": "*", enableCellEdit: false },
 { "ViewColumnDefID": 36388, "name": "v_AmountCredited", "cellClass":"text-center","label": "v_AmountCredited", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_PaymentModeName", "cellClass":"text-center","label": "v_PaymentModeName", "width": "*", enableCellEdit: false },
                           
                            
                            //{ "ViewColumnDefID": 36391, "name": "v_ABMFBalanceHistoryID","cellClass":"text-center", "label": "v_ABMFBalanceHistoryID", "cellTemplate": "<div><a ng-href=\"#!/PrivateIdentityDashboard/{{row.entity.v_AccNoPrivateIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_PublicIdentity", "label": "v_PublicIdentity", "cellTemplate": "<div><a ng-href=\"#!/PublicIdentityDashboard/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_AmountTotal", "cellClass":"text-center","label": "v_AmountTotal", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DeferredCommission", "cellClass":"text-center","label": "v_DeferredCommission", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_InsertTime", "cellClass":"text-center","label": "v_TransactionTime", "width": "*", enableCellEdit: false },
                            //{ "ViewColumnDefID": 36388, "name": "v_InstrumentNumber", "cellClass":"text-center","label": "v_InstrumentNumber", "width": "*", enableCellEdit: false },

                            //{ "ViewColumnDefID": 36388, "name": "v_ReceiptID", "cellClass":"text-center","label": "v_ReceiptID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Remarks", "cellClass":"text-center","label": "v_Remarks", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_UserName", "cellClass":"text-center","label": "v_UserName", "width": "*", enableCellEdit: false }
                            
                        ],
                    },

                }];

                await metaDataService.resolve(viewsObj, $stateParams);
               
        
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_PaymentHistory.gui",
        url: "PaymentHistory",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_PaymentHistory.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};