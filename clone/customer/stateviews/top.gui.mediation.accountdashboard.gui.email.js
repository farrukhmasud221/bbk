export const accountDashboardEmailState = {
    states: [{
        name: "top.gui.accountdashboard.gui.email",
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
                    "updatePanel": ["TX_UpdAccountEmail"],
                    "TX_UpdAccountEmail": {
                        "operationId": "TX_UpdAccountEmail",
                        "heading": "Email",
                        "panelType": "UpdateableReadOnlyView",
                        "mappings": {
                            "v_AccountID": "AccountID"
                        },
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_EmailAddress", "ctype": "label", "paramtype": "varchar", "label": "v_EmailAddress", "direction": "inout", "validator": "", "width": "*" },
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
        name: "top.gui.accountdashboard.gui.email.gui",
        url: "/Email",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};