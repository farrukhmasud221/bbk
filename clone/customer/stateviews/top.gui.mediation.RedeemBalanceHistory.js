export const RedeemBalanceHistoryState = {
    states: [{
        name: "top.gui.mediation_RedeemBalanceHistory",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Balance Transfer to Account Report",
                    "panelType": "SearchView",
                    //buttonLabel: "Search",
                     "operationId": "SE_balanceredemptionsByUsrName",
                    "Params": [
                        { "ViewParamId": 71178, "name": "v_DateFrom", "ctype": "datetime", "paramtype": "varchar", "label": "v_FromDate", "direction": "in", "validator": "", "width": "auto", "placeholder": "From Date",  },
                        { "ViewParamId": 71178, "name": "v_DateTo", "ctype": "datetime", "paramtype": "varchar", "label": "v_ToDate", "direction": "in", "validator": "", "width": "auto", "placeholder": "DateTo",  },
                        { "ViewParamId": 71178, "name": "v_PrivateIdentity", "ctype": "label", "paramtype": "varchar", "label": "UserName", "direction": "in", "validator": "", "width": "auto", "placeholder": "+1 (416) 123 xxxx", },
                       
                    ],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 100,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
			     { "ViewColumnDefID": 36388, "name": "v_ToPublicIdentity", "cellClass":"text-center","label": "v_ToUserName", "width": "*", enableCellEdit: false },
                            
                            // { "ViewColumnDefID": 36384, "name": "v_PublicIdentity", "label": "v_PublicIdentity", "cellTemplate": "<div><a ng-href=\"#!/PublicIdentityDashboard/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_Amount", "cellClass":"text-center","label": "v_Amount", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ABMFBalanceAfter", "cellClass":"text-center","label": "v_BalanceAfter", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_InsertTime", "cellClass":"text-center","label": "v_TransactionTime", "width": "*", enableCellEdit: false },
			    { "ViewColumnDefID": 36391, "name": "v_CommissionOut","cellClass":"text-center", "label": "v_CommissionOut",  "width": "auto", enableCellEdit: false },
                           
                        ],
                    },

                }];

                await metaDataService.resolve(viewsObj, $stateParams)
                //console.log("helo",viewsObj[0].gridOptions.data);
                //console.log("helo1",viewsObj[0].gridOptions["data"]);
                let arr = viewsObj[0].gridOptions.data;
                if (arr !== null && arr !== undefined) {
                    console.log("found object");
                    arr.forEach(element => {
                        console.log("helo", element);
                    });
                }
                else
                {
                    console.log("Object is null");
                    console.log("Now the object is : ", viewsObj);
                }
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_RedeemBalanceHistory.gui",
        url: "RedeemBalanceHistory",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_RedeemBalanceHistory.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};