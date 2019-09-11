export const privateIdentityDashboardLogsState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.logs",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9669",
                    "heading": "Logs",
                    "panelType": "ListView",
                    "operationId": "privateidentitydebuglogs_f1",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
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
                            { "ViewColumnDefID": 56580, "name": "v_AccNoPrivateIdentityID", "label": "ID", "cellClass":"text-center", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56583, "name": "v_DebugLogs", "label": "v_DebugLogs", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    },
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                //alert(JSON.stringify(viewsObj));
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.logs.gui",
        url: "/Logs",
        views: {
            "tabContent@top": {
                component: 'gridComponent'
            }
        }
    }]
}