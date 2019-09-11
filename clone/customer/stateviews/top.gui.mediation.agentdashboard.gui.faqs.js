
export const agentDashboardFAQsState = {
    states: [{
        name: "top.gui.agentdashboard.gui.faqs",
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
                        "heading": "Faqs",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_AgentAppFAQs", "ctype": "textarea", "paramtype": "varchar", "label": "v_AgentAppFaqs", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.faqs.gui",
        url: "/FAQs",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};