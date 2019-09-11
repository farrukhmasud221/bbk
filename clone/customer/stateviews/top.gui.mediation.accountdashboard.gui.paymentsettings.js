export const accountDashboardPaymentSettingsState = {
    states: [{
        name: "top.gui.accountdashboard.gui.paymentsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    // "heading": "Billing Information",
                    "operationId": "UI_accounts",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "TX_UpdAccountIsCC",
                        "TX_UpdAccountIsPaypal",
                        "TX_UpdAccountIsVoucher"
                    ],
                    "TX_UpdAccountIsCC": {
                        "operationId": "TX_UpdAccountIsCC",
                        "heading": "Credit Card",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsCreditCardSupported", "ctype": "select", "paramtype": "bigint", "label": "v_IsCreditCardSupported", "direction": "inout", "validator": "", "width": "*", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}] },
                        ]
                    },
                    "TX_UpdAccountIsPaypal": {
                        "operationId": "TX_UpdAccountIsPaypal",
                        "heading": "Paypal",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsPaypalPaymentSupported", "ctype": "select", "paramtype": "bigint", "label": "v_IsPaypalPaymentSupported", "direction": "inout", "validator": "", "width": "*", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}] },
                        ]
                    },
                    "TX_UpdAccountIsVoucher": {
                        "operationId": "TX_UpdAccountIsVoucher",
                        "heading": "Voucher",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsVoucherPaymentSupported", "ctype": "select", "paramtype": "bigint", "label": "v_IsVoucherPaymentSupported", "direction": "inout", "validator": "", "width": "*", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}] },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log(viewsObj);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.accountdashboard.gui.paymentsettings.gui",
        url: "/PaymentSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};