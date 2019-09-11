export const siptrunkdashboardSIPTrunkDialingExtensionState = {
    states: [{
        name: "top.gui.operation_siptrunkdashboard.gui.SIPTrunkDialingExtension",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_siptrunks",
                    "heading": "Support Ext Dialing",
                    "mappings": {
                        "v_SIPTrunkID": "SIPTrunkID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "TX_UpdIsSupportExtDialing", "TX_UpdSIPTrunkExtDialingGroupID"
                    ],

                    "TX_UpdIsSupportExtDialing": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdIsSupportExtDialing",
                        "buttonLabel": "update",
                        "heading": "v_SIP Trunk Dialing Extension",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            // {
                            //     "ViewParamId": 60465, "name": "v_SIPTrunkID", "ctype": "select", "paramtype": "ENUM", "label": "v_SIPTrunkID", "direction": "inout", "validator": "", "options": [{ "display": "Yes", "value": "1" }, { "display": "No", "value": "0" }], "width": "*"
                               
                            // },
                            { "ViewParamId": 60465, "name": "v_SIPTrunkID", "ctype": "readonly", "paramtype": "ENUM", "label": "v_SIPTrunkID", "direction": "inout", "validator": "", "width": "auto" },
                            { 

                                "ViewParamId": 72024, 
                                "name": "v_IsSupportExtensionDialing", 
                                "ctype": "select", 
                               "paramtype": "ENUM", "label": "v_IsSupportExtensionDialing", "direction": "inout", "validator": "", "options": [{ "display": "Yes", "value": "Yes" }, { "display": "No", "value": "No" }], "width":  "*"
                            },
                        ]
                    },


                    "TX_UpdSIPTrunkExtDialingGroupID": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdSIPTrunkExtDialingGroupID",
                        "buttonLabel": "update",
                        "heading": "v_SIP Trunk ExtDialing GroupID",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                             { "ViewParamId": 60465, "name": "v_SIPTrunkID", "ctype": "readonly", "paramtype": "ENUM", "label": "v_SIPTrunkID", "direction": "inout", "validator": "", "width": "auto" },
                            { "ViewParamId": 57641, "name": "v_SIPTrunkExtDialingGroupID", "ctype": "select", "paramtype": "bigint", "label": "v_SIPTrunkExtDialingGroupID", "direction": "inout", "validator": "", operationId: "LS_siptrunkextdialinggroups", valueName: "v_SIPTrunkExtDialingGroupID", displayName: "v_SIPTrunkExtDialingGroupName", "width": "auto" },
                           
                        ]
                    }
                }];
                //     "viewID": "168",
                //     "heading": "SIPTrunk Ext Dialing Group",
                //     "panelType": "ReadOnlyView",
                //     "operationId": "LS_siptrunkextdialinggroups",
                //     "mappings": {
                //           "v_SIPTrunkID": "SIPTrunkID"
                //     },
                //     "updatePanel": [
                //         "WF_updateAccountinfo"
                //     ],
                //     "WF_updateAccountinfo":{
                //         "viewID":"3899",
                //         "heading": "Update Log Request",
                //         "operationId": "WF_updateAccountinfo",
                //         "panelType": "UpdateableReadOnlyView",
                //     "Params": [
                //         { "ViewParamId": 72024, "name": "v_SIPTrunkExtDialingGroupID", "ctype": "label", "paramtype": "varchar", "label": "v_SIPTrunkExtDialingGroupID", "direction": "inout", "validator": "", "width": "*" },
                //           {"ViewParamId":57641, "name":"v_SIPTrunkExtDialingGroupName", "ctype":"select", "paramtype":"bigint", "label":"v_SIPTrunkExtDialingGroupName", "direction":"inout", "validator":"", operationId: "LS_getSIPTrunkDialingExtension", valueName: "v_SIPTrunkExtDialingGroupName", displayName: "v_SIPTrunkExtDialingGroupName", "width":"auto"},
                //         ]
                //     }
                // }];
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

            
                await metaDataService.resolve(viewsObj, $stateParams);
              
               console.log("viewsObj",viewsObj[0].TX_UpdIsSupportExtDialing.Params[1].value);
               if(viewsObj[0].TX_UpdIsSupportExtDialing.Params[1].value===0)
               {
                  viewsObj[0].TX_UpdIsSupportExtDialing.Params[1].value="No"; 
               }
               else
               {
                    viewsObj[0].TX_UpdIsSupportExtDialing.Params[1].value="Yes"; 
               }
                // viewsObj[0].Params.forEach(element => {
                //     console.log("element.value",element.value);

                //console.log("viewsObj",viewsObj);
                //   if(viewsObj.value===0)
                //   {
                //       element["value"]="No";
                //   }
                //   else if(element.value===1)
                //   {
                //        element["value"]="Yes";
                //   }
                 
               //});

                
             
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.SIPTrunkDialingExtension.gui",
        url: "/SIPTrunkDialingExtension",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
