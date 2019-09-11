export const accountDashboardPasswordState = {
    states: [{
        name: "top.gui.accountdashboard.gui.password",
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
                    "updatePanel": ["TX_UpdBillingPassword"],
                    "TX_UpdBillingPassword": {
                        "operationId": "TX_UpdBillingPassword",
                        "heading": "Password",
                        "panelType": "UpdateableReadOnlyView",
                        "mappings": {
                            "v_AccountID": "AccountID"
                        },
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_BillingPassword", "ctype": "label", "paramtype": "varchar", "label": "v_BillingPassword", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_BillingPasswordExpiry", "ctype": "datetime", "paramtype": "date", "label": "v_BillingPasswordExpiry", "direction": "inout", "validator": "", "width": "*" },
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
        name: "top.gui.accountdashboard.gui.password.gui",
        url: "/Password",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};