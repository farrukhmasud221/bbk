
export const agentDashboardVPNInformationState = {
    states: [{
        name: "top.gui.agentdashboard.gui.vpninformation",
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
                    "updatePanel": ["TX_UpdDMAgentVPN"],
                    "TX_UpdDMAgentVPN": {
                        "operationId": "TX_UpdDMAgentVPN",
                        "heading": "VPN Information",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_VPNServerInfo", "ctype": "label", "paramtype": "varchar", "label": "v_VPNServerInfo", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_VPNUserName", "ctype": "label", "paramtype": "varchar", "label": "v_VPNUserName", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_VPNPassword", "ctype": "label", "paramtype": "varchar", "label": "v_VPNPassword", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.vpninformation.gui",
        url: "/VPNInformation",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};