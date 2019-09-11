
export const agentDashboardBillingInformationState = {
    states: [{
        name: "top.gui.agentdashboard.gui.billinginformation",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    // "heading": "Billing Information",
                    "operationId": "UI_agents",
                    "mappings": {
                        "v_AgentID": "AgentID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdDMAgentBilling"],
                    "TX_UpdDMAgentBilling": {
                        "operationId": "TX_UpdDMAgentBilling",
                        "heading": "Billing Information",
                        "panelType": "ReadOnlyView",
                        "mappings": {
                            "v_AgentID": "AgentID"
                        },
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_AgentBillingVendor", "ctype": "readonly", "paramtype": "varchar", "label": "BillingVendor", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_AgentBillingAPIURL", "ctype": "label", "paramtype": "varchar", "label": "BillingAPI URL", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_AgentBillingAPIUserName", "ctype": "label", "paramtype": "varchar", "label": "BillingAPIUserName", "direction": "inout", "validator": "", "width": "*" },
                            // { "ViewParamId": 72024, "name": "v_AgentBillingAPIPassword", "ctype": "label", "paramtype": "varchar", "label": "AgentBillingAPIPassword", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log(viewsObj);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.billinginformation.gui",
        url: "/BillingInformation",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};