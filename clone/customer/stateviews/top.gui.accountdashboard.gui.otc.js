export const accountDashboardOTCState =
{
    states: [{
        name: "top.gui.accountdashboard.gui.otc",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "7085",
                    "heading": "One Time Charges",
                    "panelType": "ListView",
                    "operationId": "GU_OTCcharges",
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
                            {"ViewColumnDefID":38023, "label":"v_ChargeHeadName", "name":"v_ChargeHeadName", "width":"15%", "cellClass":"text-center", enableCellEdit: false},
                            {"ViewColumnDefID":38024, "label":"v_AmountCharged", "name":"v_AmountCharged", "width":"auto", "cellFilter":"number:2", "cellClass":"text-center", enableCellEdit: false},
                            {"ViewColumnDefID":38025, "label":"v_Tax1", "name":"v_Tax1", "cellFilter":"number:2", "width":"auto", enableCellEdit: false},
                            {"ViewColumnDefID":38026, "label":"v_Tax2", "name":"v_Tax2", "cellFilter":"number:2", "width":"auto", "cellClass":"text-center", enableCellEdit: false},
                            {"ViewColumnDefID":38028, "label":"v_ChargeCount", "name":"v_ChargeCount", "width":"auto", "cellClass":"text-center", enableCellEdit: false},
                            {"ViewColumnDefID":38029, "label":"v_CurrentBalance", "name":"v_CurrentBalance", "width":"auto","cellFilter":"number:2",  "cellClass":"text-center", enableCellEdit: false},
                            {"ViewColumnDefID":38030, "label":"v_EarnedRevenue", "name":"v_EarnedRevenue", "width":"auto", "cellFilter":"number:2", "cellClass":"text-right", enableCellEdit: false},
                            {"ViewColumnDefID":38031, "label":"v_InvoiceID", "name":"v_InvoiceID", "width":"auto", enableCellEdit: false},
                            {"ViewColumnDefID":38032, "label":"v_InvoiceUnderProcessTimeStamp", "name":"v_InvoiceUnderProcessTimeStamp", "width":"auto", "cellClass":"text-center", enableCellEdit: false},
                            {"ViewColumnDefID":38033, "label":"v_SubscriberStateName", "name":"v_SubscriberStateName", "width":"auto", enableCellEdit: false},
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
        name: "top.gui.accountdashboard.gui.otc.gui",
        url: "/OTC",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        }
    }
]

};