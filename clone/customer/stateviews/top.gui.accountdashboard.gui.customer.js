export const accountDashboardCustomerState = {
    states: [{
        name: "top.gui.accountdashboard.gui.customer",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9499",
                    "heading": "",
                    "panelType": "ListView",
                    "operationId": "LS_GetAccNoCustomer",
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
                            { "ViewColumnDefID": 54565, "name": "v_CustomerID", "displayName": "Customer ID", "cellTemplate": "<div><a ng-href=\"#!/CustomerDashboard/{{row.entity.v_CustomerID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    }
                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }],
        },
        // deepStateRedirect: true,
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.customer.gui",
        url: "/Customer",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        },
        // deepStateRedirect: true,
        // sticky: true
    }]
};