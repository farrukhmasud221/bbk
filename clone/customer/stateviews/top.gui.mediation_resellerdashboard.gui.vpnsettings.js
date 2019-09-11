export const resellerdashboardVPNSettingsState = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.vpnsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_accnoprivateidentities",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdPrivateIDVPN"],
                    "TX_UpdPrivateIDVPN": {
                        "operationId": "TX_UpdPrivateIDVPN",
                        "heading": "VPN Settings",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_VPNServerInfo", "ctype": "label", "paramtype": "varchar", "label": "v_VPNServerInfo", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72025, "name": "v_VPNUserName", "ctype": "label", "paramtype": "varchar", "label": "v_VPNUserName", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72026, "name": "v_VPNPassword", "ctype": "label", "paramtype": "varchar", "label": "v_VPNPassword", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.vpnsettings.gui",
        url: "/VPNSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};