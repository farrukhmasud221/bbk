export const privateIdentityDashboardChangePasswordState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.ChangePassword",
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
                        "WF_UpdPrivateIDPassword"
                    ],
                    "WF_UpdPrivateIDPassword": {
                        "viewID": "3899",
                        "label": "Add Payment",
                        "heading": "Change Password",
                        "mappings": {
                            "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                        },
                        "operationId": "WF_UpdPrivateIDPassword",
                        "buttonLabel": "Change Password",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "Username", "ctype": "readonly", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 61575, "name": "v_PrivateIdentityPassword", "ctype": "label", "paramtype": "varchar", "label": "Password", "direction": "in", "validator": "", "width": "auto","required":"true" }

                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.ChangePassword.gui",
        url: "/ChangePassword",
        views: {
            "tabContent@top": {
                component: "detailComponent"

            }
        }
    }]
};