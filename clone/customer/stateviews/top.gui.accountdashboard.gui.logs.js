export const accountDashboardLogsState = {
    states: [{
        name: "top.gui.accountdashboard.gui.logs",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9669",
                    "heading": "Logs",
                    "panelType": "ListView",
                    "operationId": "pvtiddebuglogsbyacc_f1",
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
                            { "ViewColumnDefID": 56580, "name": "v_PrivateIdentityDebugLogID", "label": "ID", "cellClass":"text-center", "cellTemplate": "<div><a ng-href=\"#!/LogDetail/{{row.entity.v_PrivateIdentityDebugLogID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56583, "name": "v_DebugLogs", "label": "v_DebugLogs", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    },
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.logs.gui",
        url: "/Logs",
        views: {
            "tabContent@top": {
                component: 'gridComponent'
            }
        }
    }]
}