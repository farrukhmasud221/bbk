export const resellerdashboardGetAccountinfoState = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.getaccountinfo",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "heading": "AccountInfo",
                    "panelType": "ReadOnlyView",
                    "operationId": "WF_getAccountInfo",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "updatePanel": [
                        "WF_updateAccountinfo"
                    ],
                    "WF_updateAccountinfo":{
                        "viewID":"3899",
                        "heading": "Update Log Request",
                        "operationId": "WF_updateAccountinfo",
                        "panelType": "UpdateableReadOnlyView",
                    "Params": [
                        { "ViewParamId": 72024, "name": "FirstName", "ctype": "label", "paramtype": "varchar", "label": "FirstName", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "LastName", "ctype": "label", "paramtype": "varchar", "label": "LastName", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "City", "ctype": "label", "paramtype": "varchar", "label": "City", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "Email", "ctype": "label", "paramtype": "varchar", "label": "Email", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "Country", "ctype": "label", "paramtype": "varchar", "label": "Country", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "Username", "ctype": "readonly", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "Phone", "ctype": "readonly", "paramtype": "varchar", "label": "Phone", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "balance", "ctype": "readonly", "paramtype": "varchar", "label": "Balance", "direction": "inout", "validator": "", "width": "*" }
                        ]
                    }
                }];
                
                await metaDataService.resolve(viewsObj, $stateParams);

                console.log("Account Info",(viewsObj[0].WF_updateAccountinfo.Params[7].value));

                if (viewsObj[0].WF_updateAccountinfo.Params[7].value.startsWith("-")) {
                    viewsObj[0].WF_updateAccountinfo.Params[7].value = viewsObj[0].WF_updateAccountinfo.Params[7].value.substring(1);
                    console.log(viewsObj[0].WF_updateAccountinfo.Params[7].value);
                    // viewsObj[0].detaildata.balance=viewsObj[0].detaildata.balance.substring(1);
                    // console.log(viewsObj[0].detaildata.balance);
                    // balance=JSON.stringify(viewsObj[0].data.balance.substring(1));
                    // console.log(balance);
                } else {
                    if (viewsObj[0].WF_updateAccountinfo.Params[7].value == 0) {
                        viewsObj[0].WF_updateAccountinfo.Params[7].value = viewsObj[0].WF_updateAccountinfo.Params[7].value;
                    }
                    else {
                        viewsObj[0].WF_updateAccountinfo.Params[7].value = "-"+ viewsObj[0].WF_updateAccountinfo.Params[7].value ;
                    }
                }
                viewsObj[0].WF_updateAccountinfo.Params[7].value = "$ "+Number(viewsObj[0].WF_updateAccountinfo.Params[7].value).toFixed(2);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.getaccountinfo.gui",
        url: "/GetAccountInfo",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};