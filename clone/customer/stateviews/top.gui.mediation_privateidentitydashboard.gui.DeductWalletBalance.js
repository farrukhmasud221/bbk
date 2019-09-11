export const privateIdentityDashboardDeductWalletBalanceState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.DeductWalletBalance",
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
                    "heading": "BasicInformation",
                    "mappings": {
                       "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "WF_UpdPrivateIDPassword"
                    ],
                    "WF_UpdPrivateIDPassword": {
                        "viewID": "3899",
                        "label": "Add Payment",
                        "heading": "Deduct Wallet Balance",
                        "mappings": {
                            "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                        },
                        "operationId": "WF_DecreaseBalance",
                        "buttonLabel": "Deduct Wallet Balance",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_UserName", "ctype": "readonly", "paramtype": "varchar", "label": "v_UserName", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 61575, "name": "v_Amount", "ctype": "label", "paramtype": "varchar", "label": "v_Amount", "direction": "in", "validator": "", "width": "auto","required":"true" },
			    //{ "ViewParamId": 61575, "name": "v_Remarks", "ctype": "label", "paramtype": "varchar", "label": "v_DeferredCommission", "direction": "in", "validator": "", "width": "auto","required":"true" },
			   // { "ViewParamId": 61575, "name": "v_InstrumentNumber", "ctype": "label", "paramtype": "varchar", "label": "v_InstrumentNumber", "direction": "in", "validator": "", "width": "auto","required":"true" },
		           //{ "ViewParamId": 61575, "name": "v_Remarks", "ctype": "textarea", "paramtype": "varchar", "label": "v_Remarks", "direction": "in", "validator": "", "width": "auto"}
			
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.DeductWalletBalance.gui",
        url: "/DeductWalletBalance",
        views: {
            "tabContent@top": {
                component: "detailComponent"

            }
        }
    }]
};