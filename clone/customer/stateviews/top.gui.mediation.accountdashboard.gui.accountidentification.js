
export const accountDashboardAccountIdentificationState = {
    states: [{
        name: "top.gui.accountdashboard.gui.accountidentification",
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
                    "updatePanel": ["TX_UpdAccountIdentification"],
                    "TX_UpdAccountIdentification": {
                        "operationId": "TX_UpdAccountIdentification",
                        "heading": "Account Identification",
                        "panelType": "UpdateableReadOnlyView",
                        "mappings": {
                            "v_AccountID": "AccountID"
                        },
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_AccountIdentification", "ctype": "label", "paramtype": "varchar", "label": "v_AccountIdentification", "direction": "inout", "validator": "", "width": "*" },
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
        name: "top.gui.accountdashboard.gui.accountidentification.gui",
        url: "/AccountIdentification",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};