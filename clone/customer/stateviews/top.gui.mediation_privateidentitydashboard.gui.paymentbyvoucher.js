export const privateIdentityDashboardPaymentByVoucherState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.paymentbyvoucher",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_accnoprivateidentities",
		    "buttonLabel": "Add payment",
                    "heading": "BasicInformation",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "updatePanel": [
                        "WF_PaymentByVoucher"
                    ],
                    "WF_PaymentByVoucher":{
                        "viewID":"3899",
                        "label": "Add Payment",
                        "heading": "Add Payment By Voucher",
                        "operationId": "WF_PaymentByVoucher",
                        "buttonLabel": "Add payment",
                        "panelType": "UpdateableReadOnlyView",
                        "Params":[
                            { "ViewParamId": 72024, "name": "v_PublicIdentity", "ctype": "readonly", "paramtype": "varchar", "label": "UserName", "direction": "inout", "validator": "", "width": "*" },
                           {"ViewParamId":61575, "name":"v_VoucherID", "ctype":"number", "paramtype":"bigint", "label":"v_VoucherID", "direction":"in", "validator":"", "width":"auto"}
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.paymentbyvoucher.gui",
        url: "/PaymentByVoucher",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]
};