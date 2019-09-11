export const accountDashboardBasicInformationState = {
    states: [{
        name: "top.gui.accountdashboard.gui.basicinformation",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "heading": "Basic Information",
                    "operationId": "UI_accounts",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "panelType": "ReadOnlyView",
                    "Params": [
                        { "ViewParamId": 52508, "name": "v_AccountIdentification", "ctype": "label", "paramtype": "BOOLEAN", "label": "v_AccountIdentification", "direction": "inout", "visible": false, "validator": "", "width": "*" },
                        // { "ViewParamId": 52511, "name": "v_UserName", "ctype": "label", "paramtype": "decimal", "label": "v_UserName", "direction": "inout", "validator": "", "width": "*" },
                        // { "ViewParamId": 52512, "name": "v_EmailAddress", "ctype": "label", "paramtype": "datetime", "label": "v_EmailAddress", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 52521, "name": "v_EmailAddressVerified", "ctype": "label", "paramtype": "datetime", "label": "v_EmailAddressVerified", "direction": "inout", "validator": "", "width": "*" },

                        // { "ViewParamId": 52508, "name": "v_SIPRegistrarIP", "ctype": "label", "paramtype": "BOOLEAN", "label": "v_SIPRegistrarIP", "direction": "inout", "visible": false, "validator": "", "width": "*" },
                        // { "ViewParamId": 52511, "name": "v_SIPRegistrarPort", "ctype": "label", "paramtype": "decimal", "label": "v_SIPRegistrarPort", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 52512, "name": "v_SupportedAudioCodec", "ctype": "label", "paramtype": "datetime", "label": "v_SupportedAudioCodec", "direction": "inout", "validator": "", "width": "*" },
                        // { "ViewParamId": 52521, "name": "v_VPNServerInfo", "ctype": "label", "paramtype": "datetime", "label": "v_VPNServerInfo", "direction": "inout", "validator": "", "width": "*" },

                        { "ViewParamId": 52508, "name": "v_VPNUserName", "ctype": "label", "paramtype": "BOOLEAN", "label": "v_VPNUserName", "direction": "inout", "visible": false, "validator": "", "width": "*" },
                        // { "ViewParamId": 52511, "name": "v_IsCreditCardSupported", "ctype": "label", "paramtype": "decimal", "label": "v_IsCreditCardSupported", "direction": "inout", "validator": "", "width": "*" },
                        // { "ViewParamId": 52512, "name": "v_IsPaypalPaymentSupported", "ctype": "label", "paramtype": "datetime", "label": "v_IsPaypalPaymentSupported", "direction": "inout", "validator": "", "width": "*" },
                        // { "ViewParamId": 52521, "name": "v_IsVoucherPaymentSupported", "ctype": "label", "paramtype": "datetime", "label": "v_IsVoucherPaymentSupported", "direction": "inout", "validator": "", "width": "*" },
                    ],
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.accountdashboard.gui.basicinformation.gui",
        url: "/BasicInformation",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};