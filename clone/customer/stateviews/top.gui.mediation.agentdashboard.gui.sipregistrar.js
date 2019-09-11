
export const agentDashboardSIPRegistrarState = {
    states: [{
        name: "top.gui.agentdashboard.gui.sipregistrar",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_agents",
                    "mappings": {
                        "v_AgentID": "AgentID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdDMAgentSIPRegistrar"],
                    "TX_UpdDMAgentSIPRegistrar": {
                        "operationId": "TX_UpdDMAgentSIPRegistrar",
                        "heading": "SIP Registrar",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarIP", "ctype": "label", "paramtype": "varchar", "label": "v_SwitchIP", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarPort", "ctype": "label", "paramtype": "varchar", "label": "v_SwitchPort", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.sipregistrar.gui",
        url: "/SIPRegistrar",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};