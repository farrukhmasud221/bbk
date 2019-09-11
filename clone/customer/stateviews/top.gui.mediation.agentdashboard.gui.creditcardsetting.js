
export const agentDashboardCreditCardSettingState = {
    states: [{
        name: "top.gui.agentdashboard.gui.creditcardsetting",
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
                    "updatePanel": ["TX_UpdDMAgentIsCC"],
                    "TX_UpdDMAgentIsCC": {
                        "operationId": "TX_UpdDMAgentIsCC",
                        "heading": "Credit Card Setting",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsCreditCardSupported", "ctype": "select", "paramtype": "bigint", "label": "v_IsCreditCardSupported", "options":[{"display":"No", "value":0},{"display":"Yes", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.creditcardsetting.gui",
        url: "/CreditCardSetting",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};