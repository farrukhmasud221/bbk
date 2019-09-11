export const publicIdentityDashboardBasicInformationState = {
    states: [{
        name: "top.gui.mediation_publicidentitydashboard.gui.basicinformation",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_publicidentities",
                    "heading":"Basic Information",
                    "mappings": {
                        "v_PublicIdentityID": "PublicIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "Params": [
                        { "ViewParamId": 72024, "name": "v_PublicIdentity", "ctype": "select", "paramtype": "varchar", "label": "v_PublicIdentity", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_UserName", "ctype": "select", "paramtype": "varchar", "label": "v_UserName", "direction": "out", "validator": "", "width": "*" },
                        // { "ViewParamId": 72024, "name": "v_RandomString", "ctype": "select", "paramtype": "varchar", "label": "v_RandomString", "direction": "out", "validator": "", "width": "*" },
                        // { "ViewParamId": 72024, "name": "v_RandomStringApproved", "ctype": "select", "paramtype": "varchar", "label": "v_RandomStringApproved", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_PublicIdRandomStrResendCount", "ctype": "select", "paramtype": "varchar", "label": "v_PublicIdRandomStrResendCount", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_RandomStringAttempCount", "ctype": "select", "paramtype": "varchar", "label": "v_RandomStringAttempCount", "direction": "out", "validator": "", "width": "*" },

                        // { "ViewParamId": 72024, "name": "v_SIPRegistrarIP", "ctype": "select", "paramtype": "varchar", "label": "v_SIPRegistrarIP", "direction": "out", "validator": "", "width": "*" },
                        // { "ViewParamId": 72024, "name": "v_SIPRegistrarPort", "ctype": "select", "paramtype": "varchar", "label": "v_SIPRegistrarPort", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_SupportedAudioCodec", "ctype": "select", "paramtype": "varchar", "label": "v_SupportedAudioCodec", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_VPNServerInfo", "ctype": "select", "paramtype": "varchar", "label": "v_VPNServerInfo", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "v_VPNUserName", "ctype": "select", "paramtype": "varchar", "label": "v_VPNUserName", "direction": "out", "validator": "", "width": "*" },

                        // { "ViewParamId": 72024, "name": "v_IsCreditCardSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsCreditCardSupported", "direction": "out", "validator": "", "width": "*" },
                        // { "ViewParamId": 72024, "name": "v_IsPaypalPaymentSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsPaypalPaymentSupported", "direction": "out", "validator": "", "width": "*" },
                        // { "ViewParamId": 72024, "name": "v_IsVoucherPaymentSupported", "ctype": "select", "paramtype": "varchar", "label": "v_IsVoucherPaymentSupported", "direction": "out", "validator": "", "width": "*" },
                    ]
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.basicinformation.gui",
        url: "/BasicInformation",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};