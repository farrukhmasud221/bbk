export const mediationOperationAccountState = {
    states: [{
        name: "top.gui.mediation_operation_account",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Accounts",
                    "panelType": "SearchView",
                    "operationId": "SE_Accounts",
                    "Params": [
                        { "ViewParamId": 71178, "name": "v_UserName", "ctype": "lel", "paramtype": "varchar", "label": "v_UserName", "direction": "in", "validator": "", "width": "*" },
                        { "ViewParamId": 71179, "name": "v_AccountIdentification", "ctype": "label", "paramtype": "varchar", "label": "v_AccountIdentification", "direction": "in", "validator": "", "width": "*" },
                        { "ViewParamId": 71183, "name": "v_EmailAddress", "ctype": "email", "paramtype": "varchar", "label": "v_EmailAddress", "direction": "in", "validator": "", "width": "*" },
                    ],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 36391, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "v_DeviceModel", "label": "v_DeviceModel", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "v_DeviceIdentification", "label": "v_DeviceIdentification", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "v_DevicePlatform", "label": "v_DevicePlatform", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "v_DeviceVersion", "label": "v_DeviceVersion", "width": "*", enableCellEdit: false },
                        ],
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_account.gui",
        url: "Account",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_operation_account.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};