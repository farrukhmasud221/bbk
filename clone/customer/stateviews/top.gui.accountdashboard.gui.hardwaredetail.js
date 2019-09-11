export const accountDashboardHardwareDetailState =
{
    states: [{
        name: "top.gui.accountdashboard.gui.hardwaredetail",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "7085",
                    "heading": "CPEs",
                    "panelType": "ListView",
                    "operationId": "GU_AccNocpes",
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
                            {"ViewColumnDefID":34686, "name":"v_CPEID", "label":"ID", "cellTemplate": "<div><a my-href=\"index.html#/tblcpes?v_CPEID={{row.entity.v_CPEID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width":"15%", enableCellEdit: false},
                            {"ViewColumnDefID":34691, "label":"DateAssigned", "name":"v_DateAssigned", "width":"auto", enableCellEdit: false},
                            {"ViewColumnDefID":34688, "label":"MacAddress", "name":"v_MacAddress", "width":"auto", enableCellEdit: false},
                            {"ViewColumnDefID":34689, "label":"SerialNumber", "name":"v_SerialNumber", "width":"auto", enableCellEdit: false},
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.hardwaredetail.gui",
        url: "/HardwareDetail",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        }
    }
]

};