export const resellersdashboardRegistrarSettingsState = {
    states: [{
        name: "top.gui.mediation_resellersdashboard.gui.registrarsettings",
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
                    "updatePanel": ["TX_UpdPrivateIDSIPRegistrar"],
                    "TX_UpdPrivateIDSIPRegistrar": {
                        "operationId": "TX_UpdPrivateIDSIPRegistrar",
                        "heading": "Password",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarIP", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarIP", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72025, "name": "v_SIPRegistrarPort", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarPort", "direction": "inout", "validator": "", "width": "*" },
			   // { "ViewParamId": 72025, "name": "Note:", "ctype": "hidden", "paramtype": "varchar", "label": "Please ", "direction": "inout", "validator": "", "width": "*" },

                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log("asd");
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellersdashboard.gui.registrarsettings.gui",
        url: "/RegistrarSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};