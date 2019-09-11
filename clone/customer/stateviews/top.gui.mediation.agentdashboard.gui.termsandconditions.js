
export const agentDashboardTermsAndConditionsState = {
    states: [{
        name: "top.gui.agentdashboard.gui.termsandconditions",
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
                    "updatePanel": ["TX_UpdDMAgentTnC"],
                    "TX_UpdDMAgentTnC": {
                        "operationId": "TX_UpdDMAgentTnC",
                        "heading": "Terms And Conditions",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "name": "v_AgentAppTermsAndCondition", "ctype": "textarea", "label": "v_AppTermsAndCondition", "direction": "inout" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.termsandconditions.gui",
        url: "/TermsAndConditions",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};