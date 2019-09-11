export const accountDashboardRegistrarState = {
    states: [{
        name: "top.gui.accountdashboard.gui.registrar",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    // "heading": "Billing Information",
                    "operationId": "UI_accounts",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdAccountSIPRegiatrar"],
                    "TX_UpdAccountSIPRegiatrar": {
                        "operationId": "TX_UpdAccountSIPRegiatrar",
                        "heading": "Registrar",
                        "panelType": "UpdateableReadOnlyView",
                        "mappings": {
                            "v_AccountID": "AccountID"
                        },
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarIP", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarIP", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_SIPRegistrarPort", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarPort", "direction": "inout", "validator": "", "width": "*" },
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
        name: "top.gui.accountdashboard.gui.registrar.gui",
        url: "/Registrar",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};