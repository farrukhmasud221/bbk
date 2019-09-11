export const accountDashboardVPNSettingsState = {
    states: [{
        name: "top.gui.accountdashboard.gui.vpnsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "heading": "VPN Settings",
                    "operationId": "UI_accounts",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "panelType": "ReadOnlyView",
                    "Params": [
                            { "ViewParamId": 72024, "name": "v_VPNServerInfo", "ctype": "label", "paramtype": "varchar", "label": "v_VPNServerInfo", "direction": "inout", "validator": "", "width": "*" },
                        ]
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log(viewsObj);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.accountdashboard.gui.vpnsettings.gui",
        url: "/VPNSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};