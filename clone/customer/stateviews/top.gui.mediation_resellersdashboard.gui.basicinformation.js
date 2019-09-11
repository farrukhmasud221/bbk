export const resellersdashboardBasicInformationState = {
    states: [{
        name: "top.gui.mediation_resellersdashboard.gui.basicinformation",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_accnoprivateidentities",
                    "heading": "BasicInformation",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "Params": [
                        { "ViewParamId": 72024, "name": "v_PublicIdentity", "ctype": "label", "paramtype": "varchar", "label": "v_PublicIdentity", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_PrivateIdentity", "ctype": "label", "paramtype": "varchar", "label": "v_PrivateIdentity", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_UserName", "ctype": "label", "paramtype": "varchar", "label": "v_UserName", "direction": "inout", "validator": "", "width": "*" }
                    //    { "ViewParamId": 72024, "name": "v_SIPRegistrarIP", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarIP", "direction": "inout", "validator": "", "width": "*" },
                    //    { "ViewParamId": 72024, "name": "v_SIPRegistrarPort", "ctype": "label", "paramtype": "varchar", "label": "v_SIPRegistrarPort", "direction": "inout", "validator": "", "width": "*" },

                    //     { "ViewParamId": 72024, "name": "v_SupportedAudioCodec", "ctype": "label", "paramtype": "varchar", "label": "v_SupportedAudioCodec", "direction": "inout", "validator": "", "width": "*" },
                    //    { "ViewParamId": 72024, "name": "v_VPNServerInfo", "ctype": "label", "paramtype": "varchar", "label": "v_VPNServerInfo", "direction": "inout", "validator": "", "width": "*" },
                    //    { "ViewParamId": 72024, "name": "v_VPNUserName", "ctype": "label", "paramtype": "varchar", "label": "v_VPNUserName", "direction": "inout", "validator": "", "width": "*" },
                    //    { "ViewParamId": 72024, "name": "v_IsCreditCardSupported", "ctype": "label", "paramtype": "varchar", "label": "v_IsCreditCardSupported", "direction": "inout", "validator": "", "width": "*" },
                    //    { "ViewParamId": 72024, "name": "v_IsPaypalPaymentSupported", "ctype": "label", "paramtype": "varchar", "label": "v_IsPaypalPaymentSupported", "direction": "inout", "validator": "", "width": "*" },
                    //    { "ViewParamId": 72024, "name": "v_IsVoucherPaymentSupported", "ctype": "label", "paramtype": "varchar", "label": "v_IsVoucherPaymentSupported", "direction": "inout", "validator": "", "width": "*" },
                    ]
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellersdashboard.gui.basicinformation.gui",
        url: "/BasicInformation",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};