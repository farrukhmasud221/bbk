export const publicIdentityDashboardRegistrarSettingsState = {
    states: [{
        name: "top.gui.mediation_publicidentitydashboard.gui.registrarsettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_publicidentities",
                    "mappings": {
                        "v_PublicIdentityID": "PublicIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdPublicIDSIPRegistrar"],
                    "TX_UpdPublicIDSIPRegistrar": {
                        "operationId": "TX_UpdPublicIDSIPRegistrar",
                        "heading": "Registrar Settings",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarIP", "ctype": "readonly", "paramtype": "varchar", "label": "v_SIPRegistrarIP", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarPort", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarPort", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.registrarsettings.gui",
        url: "/RegistrarSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};