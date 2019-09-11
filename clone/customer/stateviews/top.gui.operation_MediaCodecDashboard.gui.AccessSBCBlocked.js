export const MediaCodecDashboardAccessSBCBlockedState = {
    states: [{
        name: "top.gui.operation_MediaCodecDashboard.gui.AccessSBCBlocked",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    // "viewID": "1229",
                    // "heading": "Check Access SBC Blocked",
                    // "panelType": "UpdateableReadOnlyView",
                    // "operationId": "UI_mediacodecs",
                    // "mappings": {
                    //     "v_MediaCodecID": "MediaCodecID"
                        
                    // },
                    "viewID": "168",
                "panelType": "ReadOnlyView",
                "operationId": "UI_mediacodecs",
                "heading": "Check Access SBC Blocked",
                "mappings": {
                    "v_MediaCodecID": "MediaCodecID"
                },
                "panelType": "ReadOnlyView",
                "updatePanel": [
                    "WF_UpdIsAccessSBCBlocked"],

                "WF_UpdIsAccessSBCBlocked": {
                    "viewID": "3899",
                    "mappings": {
                        "v_MediaCodecID": "MediaCodecID"
                    },
                    "operationId": "WF_UpdIsAccessSBCBlocked",
                    "buttonLabel": "update",
                    "heading": "Check Access SBC Blocked",
                    "panelType": "UpdateableReadOnlyView",
                    "Params": [
                       
                        {"ViewParamId":57774, "name":"v_IsAccessSBCBlocked", "ctype":"select", "paramtype":"varchar", "label":"v_IsAccessSBCBlocked", "direction":"inout", "validator":"", "width":"auto"},
                      

                    ]
                },
                    // "Params":[
                        
                    //     {"ViewParamId":57791, "name":"v_IsAccessSBCBlocked", "ctype":"label", "paramtype":"varchar", "label":"v_IsAccessSBCBlocked", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57773, "name":"v_MaxConcurrentSessions", "ctype":"label", "paramtype":"varchar", "label":"v_MaxConcurrentSessions", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_MediaApplication", "ctype":"label", "paramtype":"varchar", "label":"v_MediaApplication", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_MediaCodecCode", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecCode", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_MediaCodecID", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_MediaCodecName", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecName", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_MediaCodecPriority", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecPriority", "direction":"out", "validator":"", "width":"auto"},
                    //      //{"ViewParamId":57775, "name":"v_IncomingChannels", "ctype":"label", "paramtype":"varchar", "label":"v_IncomingChannels", "direction":"out", "validator":"", "width":"auto"},
                    //     // {"ViewParamId":57774, "name":"v_SupportedAudioCodec", "ctype":"label", "paramtype":"varchar", "label":"v_SupportedAudioCodec", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_OutgoingChannels", "ctype":"label", "paramtype":"varchar", "label":"v_OutgoingChannels", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_SIPTrunkSaleGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkSaleGroupID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_DefaultForwardingIP", "ctype":"label", "paramtype":"varchar", "label":"v_DefaultForwardingIP", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_ForwardingPort", "ctype":"label", "paramtype":"varchar", "label":"v_ForwardingPort", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_ForwardingIPPolicy", "ctype":"label", "paramtype":"varchar", "label":"v_ForwardingIPPolicy", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_FailOverCauseCodeGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_FailOverCauseCodeGroupID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_LastSIPTrunkForwardingIPID", "ctype":"label", "paramtype":"varchar", "label":"v_LastSIPTrunkForwardingIPID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_IsSuspended", "ctype":"label", "paramtype":"varchar", "label":"v_IsSuspended", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_SIPTrunkChargeID", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkChargeID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_MediaCodecGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecGroupID", "direction":"out", "validator":"", "width":"auto"}
 
                    // ],
                
                    // "TX_Updaccnopaypalpayments":{
                    //     "viewID":"9786",
                    //     "heading":"Update Payment Detail",
                    //     "panelType": "UpdateableReadOnlyView",
                    //     "operationId": "TX_Updaccnopaypalpayments",
                    //     "Params":[
                    //         {"ViewParamId":78908, "name":"v_PaypalTXNID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalTXNID", "direction":"inout", "validator":"", "width":"auto"},
                    //         {"ViewParamId":79024, "name":"v_PaypalPayerID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPayerID", "direction":"inout", "validator":"", "width":"auto"}
                    //     ]
                    // }

                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]

            
        },
       
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.operation_MediaCodecDashboard.gui.AccessSBCBlocked.gui",
        url: "/AccessSBCBlocked",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
