export const accountDashboardActivateBillingState = {
    states: [{
        name: "top.gui.accountdashboard.gui.activatebilling",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9673",
                    "heading": "Activate Billing",
                    "panelType": "ListView",
                    "rowOperations": [{
                        operationId: "TX_ProcessAccNoServiceOffering1",
                        "label": "Activate Billing",
                        bulk: false,
                        type: 'action',
                        "mappings": {
                            "v_AccNoServiceOfferingID": "v_AccNoServiceOfferingID"
                        },
                    }],
                    "operationId": "accnoserviceofferingsADP_f10",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "gridOptions": {
                        enableSorting: true,
                        enableGridMenu: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            // { "ViewColumnDefID": 56758, "name": "v_AccNoServiceOfferingID", "label": "ID", "width": "*", "cellClass": "text-center", "headerCellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 56759, "name": "v_ServiceName", "label": "Service", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56761, "name": "v_ServiceOfferingName", "label": "Package", "width": "*", "cellClass": "text-center", enableCellEdit: true },
                            { "ViewColumnDefID": 57816, "name": "v_StartDate", "label": "Start Date", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 57815, "name": "v_AccNOPBCExpiryDate", "label": "Expiry Date", "width": "*", "cellFilter": "date:\'dd-MMM-yyyy\'", "cellClass": "text-center", enableCellEdit: false },
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
        name: "top.gui.accountdashboard.gui.activatebilling.gui",
        url: "/ActivateBilling",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        }
    }]
};