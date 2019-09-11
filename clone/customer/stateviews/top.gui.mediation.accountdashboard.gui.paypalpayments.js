export const accountDashboardPayPalPaymentsState = {
    states: [{
        name: "top.gui.accountdashboard.gui.paypalpayments",
        abstract: true,
        params: { reload: true },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "PayPal Payments",
                    "panelType": "ListView",
                    "operationId": "accnopaypalpayments_f3",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "gridOperations": [{
                        operationId: "TX_Insaccnopaypalpayments",
                        label: "Add Payment",
                        type: "insert",
                        viewsObj: {
                            "viewID": "888",
                            "heading": "Add Payment",
                            "mappings": {
                                "v_AccountID": "AccountID"
                            },
                            "panelType": "InsertView",
                            buttonLabel: "Save Payment",
                            "operationId": "TX_Insaccnopaypalpayments",
                            "Params":[
                                {"ViewParamId":73336, "name":"v_PaypalTXNID", "ctype":"textbox", "paramtype":"varchar", "label":"v_PaypalTXNID", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73337, "name":"v_PaypalPayerID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPayerID", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73338, "name":"v_PaypalPaymentCurrency", "ctype":"textbox", "paramtype":"varchar", "label":"v_PaypalPaymentCurrency", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73339, "name":"v_PaypalPaymentAmount", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPaymentAmount", "direction":"in", "validator":"", "width":"auto"}
                            ]
                        }
                    }],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 36384, "name": "v_AccNoPaypalPaymentID", "label": "v_AccNoPaypalPaymentID", "cellTemplate": "<div><a ng-href=\"#!/PayPalPaymentDetail/{{row.entity.v_AccNoPaypalPaymentID}}\">{{grid.getCellValue(row, col)}}</a></div>", "cellClass":"text-center", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_UserName", "label": "v_UserName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_PaypalPayerID", "label": "v_PaypalPayerID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_PaypalPaymentAmount", "label": "v_PaypalPaymentAmount", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_PaypalPaymentCurrency", "label": "v_PaypalPaymentCurrency", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_PaypalTXNID", "label": "v_PaypalTXNID", "width": "*", enableCellEdit: false }
                            
                        ],
                    },
                }];
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.paypalpayments.gui",
        url: "/PayPalPayments",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true
    }]
};