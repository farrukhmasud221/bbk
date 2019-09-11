
export const agentDashboardContactUsInformationState = {
    states: [{
        name: "top.gui.agentdashboard.gui.contactusinformation",
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
                    "updatePanel": ["TX_UpdDMAgentContactus"],
                    "TX_UpdDMAgentContactus": {
                        "operationId": "TX_UpdDMAgentContactus",
                        "heading": "Contact Us Information",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_AgentContactUsInfo", "ctype": "textarea", "paramtype": "varchar", "label": "v_ContactUs", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.contactusinformation.gui",
        url: "/ContactUsInformation",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};