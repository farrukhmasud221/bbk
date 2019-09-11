export const privateIdentityDashboardResellerAccountState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.ResellerAccount",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_accnoprivateidentities",
                    "heading": "BasicInformation",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "WF_UpdPrivateIDPassword"
                    ],
                    "WF_UpdPrivateIDPassword": {
                        "viewID": "3899",
                        "label": "Add Payment",
                        "heading": "Convert to Reseller Account",
                        "mappings": {
                            "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                        },
                        "operationId": "WF_UpdateUserIsReseller",
                        "buttonLabel": "Reseller Account",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_UserName", "ctype": "readonly", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 72024, "name": "v_IsReseller", "ctype": "readonly", "paramtype": "varchar", "label": "Reseller Account", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 61575, "name": "v_IsReseller", "ctype": "checkbox", "paramtype": "varchar", "label": "v_IsReseller ", "direction": "in", "validator": "", "width": "auto","required":"true" }

                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
        console.log("asddddddddddddddddddddddddddddddddddddddddddddddddd",viewsObj);
         if (viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value===0) {

            viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value ="Disabled";
         }
         else{
            viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value="Enabled";
         }
        //     viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value = viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value.substring(1);
        //     console.log(viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value);
        //     // viewsObj[0].detaildata.balance=viewsObj[0].detaildata.balance.substring(1);
        //     // console.log(viewsObj[0].detaildata.balance);
        //     // balance=JSON.stringify(viewsObj[0].data.balance.substring(1));
        //     // console.log(balance);
        // } else {
        //     if (viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value == 0) {
        //         viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value = viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value;
        //     }
        //     else {
        //         viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value = "-"+ viewsObj[0].WF_UpdPrivateIDPassword.Params[1].value ;
        //     }
        // }
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.ResellerAccount.gui",
        url: "/ResellerAccount",
        views: {
            "tabContent@top": {
                component: "detailComponent"

            }
        }
    }]
};