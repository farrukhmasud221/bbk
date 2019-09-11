
export const agentDashboardLogsState = {
    states: [{
        name: "top.gui.agentdashboard.gui.Logs",
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
                    "updatePanel": ["TX_UpdDMAgentFAQ"],
                    "TX_UpdDMAgentFAQ": {
                        "operationId": "TX_UpdDMAgentFAQ",
                        "heading": "Logs",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_AgentLogs", "ctype": "textarea", "paramtype": "varchar", "readonly": "v_AgentAppFaqs", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.Logs.gui",
        url: "/Logs",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};