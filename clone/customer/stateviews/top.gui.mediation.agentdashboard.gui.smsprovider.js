export const agentDashboardSMSProviderState = {
    states: [{
        name: "top.gui.agentdashboard.gui.smsprovider",
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
                    "updatePanel": ["TX_UpdDMAgentSMSProvider"],
                    "TX_UpdDMAgentSMSProvider": {
                        "operationId": "TX_UpdDMAgentSMSProvider",
                        "heading": "SMS Provider",
                        "panelType": "ReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_AgentSMSProviderName", "ctype": "readonly", "paramtype": "varchar", "label": "SMSProviderName", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_AgentSMSProviderSID", "ctype": "label", "paramtype": "varchar", "label": "SMSProviderSID", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_AgentSMSProviderAuthToken", "ctype": "label", "paramtype": "varchar", "label": "SMSProviderAuthToken", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_AgentSMSProviderFromNumber", "ctype": "label", "paramtype": "varchar", "label": "SMSProviderFromNumber", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.smsprovider.gui",
        url: "/SMSProvider",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};