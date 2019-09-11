export const resellersdashboardAccountDebitState = {
    states: [{
        name: "top.gui.mediation_resellersdashboard.gui.AccountDebit",
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
                        "WF_AccountDebit"
                    ],
                    "WF_AccountDebit": {
                        "viewID": "3899",
                        "label": "Add Payment",
                        "heading": "Account Debit",
                        "mappings": {
                            "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                        },
                        "operationId": "WF_AccountDebit",
                        "buttonLabel": "Account Debit",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { 
                                "ViewParamId": 72024, 
                                "name": "Username", 
                                "ctype": "readonly", 
                                "paramtype": "varchar", 
                                "label": "Username", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "balance", 
                                "ctype": "readonly", 
                                "paramtype": "varchar", 
                                "label": "Account Balance", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 61575, 
                                "name": "DebitAmount", 
                                "ctype": "number", 
                                "max": "20", 
                                "paramtype":"varchar", 
                                "label": "Account Debit", 
                                "direction": "in", 
                                "validator": "", 
                                "width": "auto","required":"true" 
                            }
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                if (viewsObj[0].WF_AccountDebit.Params[1].value.startsWith("-")) {
                    viewsObj[0].WF_AccountDebit.Params[1].value = viewsObj[0].WF_AccountDebit.Params[1].value.substring(1);
                    console.log(viewsObj[0].WF_AccountDebit.Params[1].value);
                    // viewsObj[0].detaildata.balance=viewsObj[0].detaildata.balance.substring(1);
                    // console.log(viewsObj[0].detaildata.balance);
                    // balance=JSON.stringify(viewsObj[0].data.balance.substring(1));
                    // console.log(balance);
                } else {
                    if (viewsObj[0].WF_AccountDebit.Params[1].value == 0) {
                        viewsObj[0].WF_AccountDebit.Params[1].value = viewsObj[0].WF_AccountDebit.Params[1].value;
                    }
                    else {
                        viewsObj[0].WF_AccountDebit.Params[1].value = "-"+ viewsObj[0].WF_AccountDebit.Params[1].value ;
                    }
                }
                viewsObj[0].WF_AccountDebit.Params[1].value = "$ "+Number(viewsObj[0].WF_AccountDebit.Params[1].value).toFixed(2);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellersdashboard.gui.AccountDebit.gui",
        url: "/AccountDebit",
        views: {
            "tabContent@top": {
                component: "detailComponent"

            }
        }
    }]
};