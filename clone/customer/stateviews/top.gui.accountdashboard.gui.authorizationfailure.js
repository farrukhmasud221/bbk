export const accountDashboardAuthorizationFailureState = {
    states: [{
        name: "top.gui.accountdashboard.gui.authorizationfailure",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1715",
                    "heading": "Authorization Failure",
                    "panelType": "ListView",
                    "operationId": "authorizationfailures_f2",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 41391, "name": "v_AuthorizationFailureID", "displayName": "ID", "cellTemplate": "<div><a my-href=\"index.html#/tblauthorizationfailures?v_AuthorizationFailureID={{row.entity.v_AuthorizationFailureID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center" , enableCellEdit: false},
                            { "ViewColumnDefID": 41392, "name": "v_ServiceGroupID", "displayName": "Service GroupID", "cellTemplate": "<div><a my-href=\"index.html#/tblservicegroups?v_ServiceGroupID={{row.entity.v_ServiceGroupID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 41393, "displayName": "User Name", "name": "v_UserName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 41394, "displayName": "Account ID", "name": "v_AccountID", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 41395, "displayName": "Return Code In", "name": "v_ReturnCodeIn", "width": "*", "cellClass": "text-center" , enableCellEdit: false},
                            { "ViewColumnDefID": 55711, "displayName": "Insert Time", "name": "v_InsertTime", "width": "*", "cellFilter": "date:\'dd-MMM-yyyy HH:mm:ss\'", "cellClass": "text-center", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // deepStateRedirect: true,
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.authorizationfailure.gui",
        url: "/AuthorizationFailure",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        },
        // deepStateRedirect: true,
        // sticky: true
    }]
};