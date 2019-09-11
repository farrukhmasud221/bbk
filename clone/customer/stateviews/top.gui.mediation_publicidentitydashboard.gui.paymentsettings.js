export const publicIdentityDashboardPaymentSettingsState = {
    states: [{
        name: "top.gui.mediation_publicidentitydashboard.gui.paymentsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_publicidentities",
                    "heading":"Payment Settings",
                    "mappings": {
                        "v_PublicIdentityID": "PublicIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "TX_UpdPublicIDIsCC",
                        "TX_UpdPublicIDIsPaypal",
                        "TX_UpdPublicIDIsVoucher"
                    ],
                    "TX_UpdPublicIDIsCC": {
                        "operationId": "TX_UpdPublicIDIsCC",
                        "heading": "Credit Card",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsCreditCardSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsCreditCardSupported", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    },
                    "TX_UpdPublicIDIsPaypal": {
                        "operationId": "TX_UpdPublicIDIsPaypal",
                        "heading": "PayPal",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsPaypalPaymentSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsPaypalPaymentSupported", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    },
                    "TX_UpdPublicIDIsVoucher": {
                        "operationId": "TX_UpdPublicIDIsVoucher",
                        "heading": "Voucher",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsVoucherPaymentSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsVoucherPaymentSupported", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.paymentsettings.gui",
        url: "/PaymentSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};