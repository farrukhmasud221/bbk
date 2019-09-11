export const privateIdentityDashboardPaymentSettingsState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.paymentsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_accnoprivateidentities",
                    "heading":"Payment Settings",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "TX_UpdPrivateIDIsCC",
                        "TX_UpdPrivateIDIsPaypal",
                        "TX_UpdPrivateIDIsVoucher"
                    ],
                    "TX_UpdPrivateIDIsCC": {
                        "operationId": "TX_UpdPrivateIDIsCC",
                        "heading": "Credit Card",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsCreditCardSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsCreditCardSupported", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    },
                    "TX_UpdPrivateIDIsPaypal": {
                        "operationId": "TX_UpdPrivateIDIsPaypal",
                        "heading": "PayPal",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsPaypalPaymentSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsPaypalPaymentSupported", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    },
                    "TX_UpdPrivateIDIsVoucher": {
                        "operationId": "TX_UpdPrivateIDIsVoucher",
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
        name: "top.gui.mediation_privateidentitydashboard.gui.paymentsettings.gui",
        url: "/PaymentSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};