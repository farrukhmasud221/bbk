export const resellerdashboardAccountCreditState = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.AccountCredit",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "WF_getAccountInfo",
                    "heading": "BasicInformation",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "WF_AccountCredit"
                    ],
                    "WF_AccountCredit": {
                        "viewID": "3899",
                        "label": "Account Credit",
                        "heading": "Account Credit",
                        "mappings": {
                            "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                        },
                        "operationId": "WF_AccountCredit",
                        "buttonLabel": "Add payment",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "Username", "ctype": "readonly", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "balance", "ctype": "readonly", "paramtype": "varchar", "label": "AccountBalance", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 61575, "name": "CreditAmount", "ctype": "number", "max": "20", "paramtype": "varchar", "label": "Credit Amount", "direction": "in", "validator": "", "width": "auto","required":"true" }

                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                if (viewsObj[0].WF_AccountCredit.Params[1].value.startsWith("-")) {
                    viewsObj[0].WF_AccountCredit.Params[1].value = viewsObj[0].WF_AccountCredit.Params[1].value.substring(1);
                    console.log(viewsObj[0].WF_AccountCredit.Params[1].value);
                    // viewsObj[0].detaildata.balance=viewsObj[0].detaildata.balance.substring(1);
                    // console.log(viewsObj[0].detaildata.balance);
                    // balance=JSON.stringify(viewsObj[0].data.balance.substring(1));
                    // console.log(balance);
                } else {
                    if (viewsObj[0].WF_AccountCredit.Params[1].value == 0) {
                        viewsObj[0].WF_AccountCredit.Params[1].value = viewsObj[0].WF_AccountCredit.Params[1].value;
                    }
                    else {
                        viewsObj[0].WF_AccountCredit.Params[1].value = "-"+ viewsObj[0].WF_AccountCredit.Params[1].value ;
                    }
                }
                viewsObj[0].WF_AccountCredit.Params[1].value = "$ "+Number(viewsObj[0].WF_AccountCredit.Params[1].value).toFixed(2);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.AccountCredit.gui",
        url: "/AccountCredit",
        views: {
            "tabContent@top": {
                component: "detailComponent"

            }
        }
    }]
};