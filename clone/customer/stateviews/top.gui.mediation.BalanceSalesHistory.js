export const BalanceSalesHistoryState = {
    states: [{
        name: "top.gui.mediation_BalanceSalesHistory",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Balance  Sale Report",
                    "panelType": "SearchView",
                    //buttonLabel: "Search",
                    "operationId": "SE_balancesalesUserName",
                    "Params": [
			{ "ViewParamId": 71178, "name": "v_DateFrom", "ctype": "datetime", "paramtype": "varchar", "label": "From Date", "direction": "in", "validator": "", "width": "auto", "placeholder": "From Date"  },
                        { "ViewParamId": 71178, "name": "v_DateTo", "ctype": "datetime", "paramtype": "varchar", "label": "To Date", "direction": "in", "validator": "", "width": "auto", "placeholder": "To Date" },
                        { "ViewParamId": 71178, "name": "v_PrivateIdentity", "ctype": "Number", "paramtype": "varchar", "label": "v_UserName", "direction": "in", "validator": "", "width": "auto", "placeholder": "+1 (416) 123 xxxx"  },
                        
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
                            { "ViewColumnDefID": 36388, "name": "v_ABMFBalanceBefore", "cellClass":"text-center","label": "v_BalanceBefore", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ABMFBalanceAfter", "cellClass":"text-center","label": "v_BalanceAfter", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Amount", "cellClass":"text-center","label": "v_Amount", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_CommissionIn", "cellClass":"text-center","label": "v_CommissionIn    ", "width": "*", enableCellEdit: false },
                            //{ "ViewColumnDefID": 36391, "name": "v_ABMFBalanceHistoryID","cellClass":"text-center", "label": "v_ABMFBalanceHistoryID", "cellTemplate": "<div><a ng-href=\"#!/PrivateIdentityDashboard/{{row.entity.v_AccNoPrivateIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_PublicIdentity", "label": "v_PublicIdentity", "cellTemplate": "<div><a ng-href=\"#!/PublicIdentityDashboard/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                           // { "ViewColumnDefID": 36388, "name": "v_BalanceTransferID", "cellClass":"text-center","label": "v_BalanceTransferID", "width": "*", enableCellEdit: false },
                            //{ "ViewColumnDefID": 36388, "name": "v_ABMFID", "cellClass":"text-center","label": "v_ABMFID", "width": "*", enableCellEdit: false },
                           
                            
                            { "ViewColumnDefID": 36388, "name": "v_Remarks", "cellClass":"text-center","label": "v_Remarks", "width": "*", enableCellEdit: false },
                           // { "ViewColumnDefID": 36388, "name": "v_Remarks", "cellClass":"text-center","label": "v_Remarks", "width": "*", enableCellEdit: false },
                          
                           
                            
                        ],
                    },

                }];

                await metaDataService.resolve(viewsObj, $stateParams);
            //    if(viewsObj[0].gridOptions.data===null)
            //    {

            //     viewsObj[0].gridOptions.data= viewsObj[0].gridOptions.data+"nO DATA FOUND";

            //    }
               console.log("view object",viewsObj[0].gridOptions.data===null);
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_BalanceSalesHistory.gui",
        url: "BalanceSalesHistory",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_BalanceSalesHistory.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};