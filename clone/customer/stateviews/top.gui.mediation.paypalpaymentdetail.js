export const PayPalPaymentDetailState = {
    states: [{
        name: "top.gui.mediation_paypalpaymentdetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1229",
                    "heading": "PayPal Payment Detail",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_accnopaypalpayments",
                    "mappings": {
                        "v_AccNoPaypalPaymentID": "PayPalPaymentID"
                    },
                    // "updatePanel": [
                    //     "TX_Updaccnopaypalpayments",
                    // ],
                    "Params":[
                        {"ViewParamId":57791, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57773, "name":"v_PaypalTXNID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalTXNID", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57774, "name":"v_PaypalPayerID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPayerID", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57775, "name":"v_PaypalPaymentCurrency", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPaymentCurrency", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":79851, "name":"v_PaypalPaymentAmount", "ctype":"label", "paramtype":"bigint", "label":"v_PaypalPaymentAmount", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57789, "name":"v_PrivateIdentity", "ctype":"label", "paramtype":"varchar", "label":"v_PrivateIdentity", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57790, "name":"v_AccNoPrivateIdentityID", "ctype":"label", "paramtype":"varchar", "label":"v_AccNoPrivateIdentityID", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":79016, "name":"v_PublicIdentityID", "ctype":"label", "paramtype":"varchar", "label":"v_PublicIdentityID", "direction":"out", "validator":"", "width":"auto"},
                        
                    ],
                    
                    // "TX_Updaccnopaypalpayments":{
                    //     "viewID":"9786",
                    //     "heading":"Update Payment Detail",
                    //     "panelType": "UpdateableReadOnlyView",
                    //     "operationId": "TX_Updaccnopaypalpayments",
                    //     "Params":[
                    //         {"ViewParamId":78908, "name":"v_PaypalTXNID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalTXNID", "direction":"inout", "validator":"", "width":"auto"},
                    //         {"ViewParamId":79024, "name":"v_PaypalPayerID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPayerID", "direction":"inout", "validator":"", "width":"auto"}
                    //     ]
                    // }

                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.mediation_paypalpaymentdetail.gui",
        url: "PayPalPaymentDetail/:PayPalPaymentID",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
