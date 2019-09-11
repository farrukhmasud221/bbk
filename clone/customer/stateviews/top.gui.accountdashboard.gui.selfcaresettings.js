export const accountDashboardSelfcareSettingsState =
{
    states: [{
        name: "top.gui.accountdashboard.gui.selfcaresettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1291",
                    "heading": "Selfcare Settings",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_accounts",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "updatePanel": [
                        "TX_UpdAccNoBilingPaswordExpiry",
                        // "TX_UpdAccNoWebLogin",
                        "TX_ChangeAccNoPasswordByAdmin"
                    ],
                    "TX_UpdAccNoBilingPaswordExpiry": {
                        "viewID": "1184",
                        "heading": "Billing Password Expiry",
                        "panelType": "UpdateableReadOnlyView",
                        "operationId": "TX_UpdAccNoBilingPaswordExpiry",
                        "Params": [
                            { "ViewParamId": 80500, "name": "v_BillingPasswordExpiry", "ctype": "datetime", "paramtype": "varchar", "label": "v_BillingPasswordExpiry", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    },
                    // "TX_UpdAccNoWebLogin": {
                    //     "viewID": "1184",
                    //     "heading": "Web Login",
                    //     "panelType": "UpdateableReadOnlyView",
                    //     "operationId": "TX_UpdAccNoWebLogin",
                    //     "Params": [
                    //         { "ViewParamId": 80500, "name": "v_WebLogin", "ctype": "textbox", "paramtype": "varchar", "label": "AllowWebLogin", "direction": "inout", "validator": "", "width": "*" },
                    //     ]
                    // },
                    "TX_ChangeAccNoPasswordByAdmin": {
                        "viewID": "1184",
                        "heading": "Billing Password Text",
                        "panelType": "UpdateableReadOnlyView",
                        "operationId": "TX_ChangeAccNoPasswordByAdmin",
                        "Params": [
                            { "ViewParamId": 80500, "name": "v_BillingPasswordText", "ctype": "textbox", "paramtype": "varchar", "label": "v_BillingPasswordText", value:"*******", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    },
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.accountdashboard.gui.selfcaresettings.gui",
        url: "/SelfcareSettings",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: "detailComponent"
            }
        },
        
    }
]

};
