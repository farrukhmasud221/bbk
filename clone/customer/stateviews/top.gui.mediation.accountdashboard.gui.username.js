export const accountDashboardUserNameState = {
    states: [{
        name: "top.gui.accountdashboard.gui.username",
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
                    "updatePanel": ["TX_UpdAccountUserName"],
                    "TX_UpdAccountUserName": {
                        "operationId": "TX_UpdAccountUserName",
                        "heading": "User Name",
                        "panelType": "UpdateableReadOnlyView",
                        "mappings": {
                            "v_AccountID": "AccountID"
                        },
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_UserName", "ctype": "label", "paramtype": "varchar", "label": "v_UserName", "direction": "inout", "validator": "", "width": "*" },
                            
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
        name: "top.gui.accountdashboard.gui.username.gui",
        url: "/UserName",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};