
export const agentDashboardPayPalSettingsState = {
    states: [{
        name: "top.gui.agentdashboard.gui.paypalsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                console.log("metaDataService",metaDataService)

                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_agents",
                    "mappings": {
                        "v_AgentID": "AgentID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdDMAgentIsPaypal"],
                    "TX_UpdDMAgentIsPaypal": {
                        "operationId": "TX_UpdDMAgentIsPaypal",
                        "heading": "PayPal Settings",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsPaypalPaymentSupported", "ctype": "select", "paramtype": "bigint", "label": "v_Paypal", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_PaypalPrimaryEmail", "ctype": "label", "paramtype": "varchar", "label": "v_PaypalPrimaryEmail",  "direction": "inout", "validator": "", "width": "*" }
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);

                if(viewsObj[0].TX_UpdDMAgentIsPaypal.Params[0].value===1){
                    viewsObj[0].TX_UpdDMAgentIsPaypal.Params[0].value="Enabled";
                }
                else{
                    viewsObj[0].TX_UpdDMAgentIsPaypal.Params[0].value="Disabled";
                }

                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.paypalsettings.gui",
        url: "/PayPalSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};