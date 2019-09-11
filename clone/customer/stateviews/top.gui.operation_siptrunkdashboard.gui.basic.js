import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export const siptrunkdashboardbasicState = {
    states: [{
        name: "top.gui.operation_siptrunkdashboard.gui.basic",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                     "viewID": "1229",
                    "heading": "Basic",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_siptrunks",
                    "mappings": {
                        "v_SIPTrunkID": "SIPTrunkID"
                    },
                    "updatePanel": [
                        "TX_UpdSIPTrunkIncTechPrefix","TX_UpdDIDUsernamePass","WF_DeleteSIPTrunk2", "TX_updSIPTrunkName","TX_UpdateMediaCodecGroupID","TX_UpdSIPTrunkChannels","TX_UpdSIPTrunkForwardingIP","TX_UpdForwardingIPPolicy","TX_UpdSIPTrunkSuspended"
                    ],
                    
                    "TX_updSIPTrunkName": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_updSIPTrunkName",
                        "buttonLabel": "update",
                        "heading":"Update SIPTrunk",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkID", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_SIPTrunkID", 
                                "direction": "out", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkName", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_SIPTrunkName", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            
                        ]
                    },

                    



//   "gridOperations": [{
//                         operationId: "WF_InsSIPTrunkForwardingIPs",
//                         label: "Add Device",
//                         type: "insert",
//                         viewsObj: {
//                             "viewID": "888",
//                             "heading": "Add Device",
//                             "mappings": {
//                                 "v_SIPTrunkID": "SIPTrunkID"
//                             },
//                             "panelType": "ListView",
//                             buttonLabel: "Save Device",
//                             "operationId": "WF_InsSIPTrunkForwardingIPs",
//                             "Params":[
//                                 {"ViewParamId":73336, "name":"v_AccountIdentification", "ctype":"textbox", "paramtype":"varchar", "label":"v_AccountIdentification", "direction":"in", "validator":"", "width":"auto"},
//                                 {"ViewParamId":73337, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"in", "validator":"", "width":"auto"},
//                                 {"ViewParamId":73338, "name":"v_BillingPassword", "ctype":"textbox", "paramtype":"v_BillingPassword", "label":"v_DeviceModel", "direction":"in", "validator":"", "width":"auto"},
//                                 {"ViewParamId":73339, "name":"v_BillingPasswordExpiry", "ctype":"label", "paramtype":"varchar", "label":"v_BillingPasswordExpiry", "direction":"in", "validator":"", "width":"auto"},
//                             ]
//                         }
//                     }],

/////////////////////////////
// "WF_Inssiptrunkincomblockaddresses": {
//     "viewID": "3899",
//     "mappings": {
//         "v_SIPTrunkID": "SIPTrunkID"
//     },
//     "operationId": "WF_Inssiptrunkincomblockaddresses",
//     "buttonLabel": "update",
//     "heading":"Update MediaCodec Group",
//     "panelType": "UpdateableReadOnlyView",
//     "Params": [
//         { 
//             "ViewParamId": 72024, 
//             "name": "v_SIPTrunkName", 
//             "ctype": "label", 
//             "paramtype": "varchar", 
//             "label": "v_SIPTrunkName", 
//             "direction": "out", 
//             "validator": "", 
//             "width": "*" 
//         },
//         { 
//             "ViewParamId": 72024, 
//             "name": "v_MediaCodecGroupID", 
//             "ctype": "label", 
//             "paramtype": "varchar", 
//             "label": "v_MediaCodecGroupID", 
//             "direction": "out", 
//             "validator": "", 
//             "width": "*" 
//         },
//        {"ViewParamId":57641, "name":"v_MediaCodecGroupID", "ctype":"select", "paramtype":"bigint", "label":"v_MediaCodecGroup", "direction":"in", "validator":"", operationId: "LS_mediacodecgroups", valueName: "v_MediaCodecGroupID", displayName: "v_MediaCodecGroupName", "width":"auto"},
        
//     ]
// },












///////////////////////////


                    
                    "TX_UpdateMediaCodecGroupID": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdateMediaCodecGroupID",
                        "buttonLabel": "update",
                        "heading":"MediaCodec Group",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkID", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_SIPTrunkID", 
                                "direction": "out", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_MediaCodecGroupID", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_MediaCodecGroupID", 
                                "direction": "out", 
                                "validator": "", 
                                "width": "*" 
                            },
                           {"ViewParamId":57641, "name":"v_MediaCodecGroupID", "ctype":"select", "paramtype":"bigint", "label":"v_MediaCodecGroup", "direction":"in", "validator":"", operationId: "LS_mediacodecgroups", valueName: "v_MediaCodecGroupID", displayName: "v_MediaCodecGroupName", "width":"auto"},
                            
                        ]
                    },


                    
                      "TX_UpdSIPTrunkChannels": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdSIPTrunkChannels",
                        "buttonLabel": "update",
                        "heading":"SIP Trunk Channels",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                             { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkID", 
                                "ctype": "readonly", 
                                "paramtype": "varchar", 
                                "label": "v_SIPTrunkID", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_NoOfChannels", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_NoOfChannels", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_IncomingChannels", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_IncomingChannels", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                             { 
                                "ViewParamId": 72024, 
                                "name": "v_OutgoingChannels", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_OutgoingChannels", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            }
                        
                            
                        ]
                    },
                    "TX_UpdSIPTrunkForwardingIP": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdSIPTrunkForwardingIP",
                        "buttonLabel": "update",
                        "heading":"Update SIP ForwardingIP Policy",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                             { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkID", 
                                "ctype": "readonly", 
                                "paramtype": "varchar", 
                                "label": "v_SIPTrunkID", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_DefaultForwardingIP", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_DefaultForwardingIP", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_ForwardingPort", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_ForwardingPort", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            }
                        
                            
                        ]
                    },








                    
                     "TX_UpdForwardingIPPolicy": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdForwardingIPPolicy",
                        "buttonLabel": "update",
                        "heading":"Update ForwardingIP Policy ",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                             { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkID", 
                                "ctype": "readonly", 
                                "paramtype": "varchar", 
                                "label": "v_SIPTrunkID", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_DefaultForwardingIP", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_DefaultForwardingIP", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            { 
                                "ViewParamId": 72024, 
                                "name": "v_ForwardingIPPolicy", 
                                "ctype": "label", 
                                "paramtype": "varchar", 
                                "label": "v_ForwardingPort", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            }
                        
                            
                        ]
                    },

                    "WF_DeleteSIPTrunk2": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "WF_DeleteSIPTrunk2",
                        "buttonLabel": "update",
                        "heading":"SIP Trunk Name",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                             { 
                                "ViewParamId": 72024, 
                                "name": "v_SIPTrunkName", 
                                "ctype": "readonly", 
                                "paramtype": "varchar", 
                                "label": "SIP Trunk Name", 
                                "direction": "inout", 
                                "validator": "", 
                                "width": "*" 
                            },
                            
                        
                            
                        ]
                    },
                    "TX_UpdDIDUsernamePass": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdDIDUsernamePass",
                        "buttonLabel": "update",
                        "heading": "UserName and Password",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                           
                          //  {"ViewParamId":57774, "name":"v_Username", "ctype":"label", "paramtype":"varchar", "label":"v_Username", "direction":"inout", "validator":"", "width":"auto"},
                            {"ViewParamId":57774, "name":"v_Username", "ctype":"label", "paramtype":"varchar", "label":"v_Username", "direction":"inout", "validator":"", "width":"auto"},
                            {"ViewParamId":57774, "name":"v_Password", "ctype":"label", "paramtype":"varchar", "label":"v_Password", "direction":"in", "validator":"", "width":"auto"},
                            //{"ViewParamId":57774, "name":"v_DomainName", "ctype":"label", "paramtype":"varchar", "label":"v_DomainName", "direction":"inout", "validator":"", "width":"auto"},
                          
    
                        ]
                    },



                    "TX_UpdSIPTrunkSuspended": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdSIPTrunkSuspended",
                        "buttonLabel": "update",
                        "heading": "SIP Trunk Suspended",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                           
                          //  {"ViewParamId":57774, "name":"v_Username", "ctype":"label", "paramtype":"varchar", "label":"v_Username", "direction":"inout", "validator":"", "width":"auto"},
                            {"ViewParamId":57774, "name":"v_IsSuspended", "ctype":"select", "paramtype":"varchar", "label":"v_IsSuspended", "direction":"inout", "validator":"", "options": [{ "display": "Yes", "value": "1" }, { "display": "No", "value": "0" }],"width":"auto"},
                           // {"ViewParamId":57774, "name":"v_Password", "ctype":"label", "paramtype":"varchar", "label":"v_Password", "direction":"in", "validator":"", "width":"auto"},
                            //{"ViewParamId":57774, "name":"v_DomainName", "ctype":"label", "paramtype":"varchar", "label":"v_DomainName", "direction":"inout", "validator":"", "width":"auto"},
                          
    
                        ]
                    },


                    
                    "TX_UpdSIPTrunkIncTechPrefix": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdSIPTrunkIncTechPrefix",
                        "buttonLabel": "update",
                        "heading": "SIP Trunk Inc Tech",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                           
                          // {"ViewParamId":57774, "name":"v_SIPTrunkName", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkName", "direction":"inout", "validator":"", "width":"auto"},
                            //{"ViewParamId":57774, "name":"v_IsSuspended", "ctype":"select", "paramtype":"varchar", "label":"v_IsSuspended", "direction":"inout", "validator":"", "options": [{ "display": "Yes", "value": "1" }, { "display": "No", "value": "0" }],"width":"auto"},
                           // {"ViewParamId":57774, "name":"v_Password", "ctype":"label", "paramtype":"varchar", "label":"v_Password", "direction":"in", "validator":"", "width":"auto"},
                            {"ViewParamId":57774, "name":"v_SIPTrunkIncomingTechPrefix", "ctype":"number", "paramtype":"varchar", "label":"v_SIPTrunkIncomingTechPrefix", "direction":"inout", "validator":"", "width":"auto"},
                          
    
                        ]
                    },





                    "Params":[
                        {"ViewParamId":57773, "name":"v_SIPTrunkID", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkID", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57773, "name":"v_SIPTrunkName", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkName", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57774, "name":"v_SIPTrunkDescription", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkDescription", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_IsPostPaidSIPTrunk", "ctype":"label", "paramtype":"varchar", "label":"v_IsPostPaidSIPTrunk", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57774, "name":"v_CustomerID", "ctype":"label", "paramtype":"varchar", "label":"v_CustomerID", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_TechPrefix", "ctype":"label", "paramtype":"varchar", "label":"v_TechPrefix", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57774, "name":"v_NoOfChannels", "ctype":"label", "paramtype":"varchar", "label":"v_NoOfChannels", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_IncomingChannels", "ctype":"label", "paramtype":"varchar", "label":"v_IncomingChannels", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57774, "name":"v_SupportedAudioCodec", "ctype":"label", "paramtype":"varchar", "label":"v_SupportedAudioCodec", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_OutgoingChannels", "ctype":"label", "paramtype":"varchar", "label":"v_OutgoingChannels", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57774, "name":"v_SIPTrunkSaleGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkSaleGroupID", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_DefaultForwardingIP", "ctype":"label", "paramtype":"varchar", "label":"v_DefaultForwardingIP", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_ForwardingPort", "ctype":"label", "paramtype":"varchar", "label":"v_ForwardingPort", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_ForwardingIPPolicy", "ctype":"label", "paramtype":"varchar", "label":"v_ForwardingIPPolicy", "direction":"out", "validator":"", "width":"auto"},
                         {"name":"v_SIPTrunkExtDialingGroupID", "type":"bigint", "default":null, "direction":"out"},
                        //  {"name":"v_IsSupportCityWideDialing", "type":"bigint", "default":null, "direction":"out"},
                         {"ViewParamId":57775, "name":"v_IsSupportCityWideDialing", "ctype":"label", "paramtype":"varchar", "label":"v_IsSupportCityWideDialing", "direction":"out", "validator":"", "width":"auto"},

                         {"ViewParamId":57775, "name":"v_FailOverCauseCodeGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_FailOverCauseCodeGroupID", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_LastSIPTrunkForwardingIPID", "ctype":"label", "paramtype":"varchar", "label":"v_LastSIPTrunkForwardingIPID", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_IsSuspended", "ctype":"label", "paramtype":"varchar", "label":"v_IsSuspended", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_SIPTrunkChargeID", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkChargeID", "direction":"out", "validator":"", "width":"auto"},
                         {"ViewParamId":57775, "name":"v_MediaCodecGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecGroupID", "direction":"out", "validator":"", "width":"auto"}
                         
 
                    ],
                   

                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                viewsObj[0].Params.forEach(element => {
                    console.log("element.value",element.value);
                  if(element.value===0)
                  {
                      element["value"]="No";
                  }
                  else if(element.value===1)
                  {
                       element["value"]="Yes";
                  }
                  else{
                      element["value"]=element["value"];
                  }
                });

                
             console.log("viewsObj",viewsObj[0].Params[19].value)
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.basic.gui",
        url: "/basic",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
