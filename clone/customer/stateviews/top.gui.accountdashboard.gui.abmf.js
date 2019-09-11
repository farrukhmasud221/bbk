export const accountDashboardABMFState = {
    states: [{
        name: "top.gui.accountdashboard.gui.abmf",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9498",
                    "heading": "",
                    "panelType": "ListView",
                    "operationId": "LS_GetAccNoAbmf",
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
                            { "ViewColumnDefID": 54565, "name": "v_ABMFID", "displayName": "ABMF ID", "cellTemplate": "<div><a ng-href=\"#!/ABMFDashboard/{{row.entity.v_ABMFID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.abmf.gui",
        url: "/ABMF",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        }
    }
    ]

};
