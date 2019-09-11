export const BalanceTransferState = {
    states: [{
        name: "top.gui.mediation_BalanceTransfer",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Balance Transfer to Reseller Report",
                    "panelType": "SearchView",
                    //buttonLabel: "Search",
                      "operationId": "SE_balancetransfersByUserName",
                    "Params": [
                        { "ViewParamId": 71178, "name": "v_DateFrom", "ctype": "datetime", "paramtype": "varchar", "label": "v_From Date", "direction": "in", "validator": "", "width": "auto", "placeholder": "From Date", },
                        { "ViewParamId": 71178, "name": "v_DateTo", "ctype": "datetime", "paramtype": "varchar", "label": "v_ToDate", "direction": "in", "validator": "", "width": "auto", "placeholder": "To Date",},
                        { "ViewParamId": 71178, "name": "v_PrivateIdentity", "ctype": "label", "paramtype": "varchar", "label": "UserName", "direction": "in", "validator": "", "width": "auto", "placeholder": "+1 (416) 123 xxxx", },
                        
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
                            { "ViewColumnDefID": 36388, "name": "v_FromUserName", "cellClass":"text-center","label": "v_FromUserName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ToUserName", "cellClass":"text-center","label": "v_ToUserName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Amount", "cellClass":"text-center","label": "v_Amount", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_FromBalanceAfter", "cellClass":"text-center","label": "v_FromBalanceAfter", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ToBalanceAfter", "cellClass":"text-center","label": "v_ToBalanceAfter", "width": "*", enableCellEdit: false },
                            //{ "ViewColumnDefID": 36391, "name": "v_ABMFBalanceHistoryID","cellClass":"text-center", "label": "v_ABMFBalanceHistoryID", "cellTemplate": "<div><a ng-href=\"#!/PrivateIdentityDashboard/{{row.entity.v_AccNoPrivateIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_PublicIdentity", "label": "v_PublicIdentity", "cellTemplate": "<div><a ng-href=\"#!/PublicIdentityDashboard/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                           // { "ViewColumnDefID": 36388, "name": "v_BalanceTransferID", "cellClass":"text-center","label": "v_BalanceTransferID", "width": "*", enableCellEdit: false },
                            //{ "ViewColumnDefID": 36388, "name": "v_DeferredCommission", "cellClass":"text-center","label": "v_DeferredCommission", "width": "*", enableCellEdit: false },
                           
                            
                            { "ViewColumnDefID": 36388, "name": "v_InsertTime", "cellClass":"text-center","label": "v_TransactionTime", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Remarks", "cellClass":"text-center","label": "v_Remarks", "width": "*", enableCellEdit: false },
                          
                           
                            
                        ],
                    },

                }];

                await metaDataService.resolve(viewsObj, $stateParams);
               
        
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_BalanceTransfer.gui",
        url: "BalanceTransfer",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_BalanceTransfer.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};