export const mediationOperationLS_SearchSBCCDRsState = {
    states: [{
        name: "top.gui.mediation_operation_LS_SearchSBCCDRs",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Search SBC CDR",
                    "panelType": "InsertView",
                    type: "insert",
                    buttonLabel: "Search SBC CDR",
                    "operationId": "SE_sbccdrs",
                    "Params": [                
{"ViewParamId":57641, "name":"v_ToUri", "ctype":"textbox", "paramtype":"bigint", "label":"v_ToUri", "direction":"in", "validator":"", operationId: "LS_getDIDs", valueName: "v_ToUri", displayName: "v_ToUri", "width":"auto"},
{ "ViewParamId": 72024, "name": "v_FromUri", "ctype": "select", "paramtype": "bigint", "label": "v_FromUri", "direction": "inout", "validator": "", "width": "*", "options":[{"display":"Standard", "value":"Standard"}] },
                     {"ViewParamId":57641, "name":"v_CallDirection", "ctype":"select", "paramtype":"bigint", "label":"v_CallDirection", "direction":"in", "validator":"", operationId: "LS_siptrunks", valueName: "v_SIPTrunkName", displayName: "v_SIPTrunkName", "width":"auto"},
                           {"ViewParamId":57641, "name":"v_CallRejectCode", "ctype":"select", "paramtype":"bigint", "label":"v_CallRejectCode", "direction":"in", "validator":"", operationId: "LS_siptrunkextdialinggroups", valueName: "v_SIPTrunkExtDialingGroupName", displayName: "v_SIPTrunkExtDialingGroupName", "width":"auto"},
                        {"ViewParamId":73337, "name":"v_InviteTimeFrom", "ctype":"datetime", "paramtype":"varchar", "label":"v_InviteTimeFrom", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Sip trunk dialing extension","required":"true"},
                        {"ViewParamId":73338, "name":"v_InviteTimeTo", "ctype":"datetime", "paramtype":"varchar", "label":"v_InviteTimeTo", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73338, "name":"v_TryingTimeFrom", "ctype":"datetime", "paramtype":"varchar", "label":"v_TryingTimeFrom", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73337, "name":"v_TryingTimeTo", "ctype":"datetime", "paramtype":"varchar", "label":"v_TryingTimeTo", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Sip trunk dialing extension","required":"true"},
                        {"ViewParamId":73338, "name":"v_RingingTimeFrom", "ctype":"datetime", "paramtype":"varchar", "label":"v_RingingTimeFrom", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73338, "name":"v_CallAnswerTimeFrom", "ctype":"datetime", "paramtype":"varchar", "label":"v_CallAnswerTimeFrom", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73337, "name":"v_CallAnswerTimeTo", "ctype":"datetime", "paramtype":"varchar", "label":"v_CallAnswerTimeTo", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Sip trunk dialing extension","required":"true"},
                        {"ViewParamId":73338, "name":"v_ByeAckedFrom", "ctype":"textbox", "paramtype":"varchar", "label":"v_ByeAckedFrom", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73338, "name":"v_ByeAckedTo", "ctype":"textbox", "paramtype":"varchar", "label":"v_ByeAckedTo", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73338, "name":"v_StartTimeFrom", "ctype":"datetime", "paramtype":"varchar", "label":"v_StartTimeFrom", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},
                        {"ViewParamId":73338, "name":"v_StartTimeTo", "ctype":"datetime", "paramtype":"varchar", "label":"v_StartTimeTo", "direction":"in", "validator":"", "width":"auto","placeholder":"Please enter the Service name","required":"true"},

                    ],
                 }];
                  // "gridOperations": [{
                    //     operationId: "TX_Insaccount",
                    //     label: "Add Device",
                    //     type: "insert",
                    //     viewsObj: {
                    //         "viewID": "888",
                    //         "heading": "Add Device",
                    //         "mappings": {
                    //             "v_AccountID": "AccountID"
                    //         },
                    //         "panelType": "InsertView",
                    //         buttonLabel: "Save Device",
                    //         "operationId": "TX_Insdevice",
                    //         "Params":[
                    //             {"ViewParamId":73336, "name":"v_AccountIdentification", "ctype":"textbox", "paramtype":"varchar", "label":"v_AccountIdentification", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":73337, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":73338, "name":"v_BillingPassword", "ctype":"textbox", "paramtype":"v_BillingPassword", "label":"v_DeviceModel", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":73339, "name":"v_BillingPasswordExpiry", "ctype":"label", "paramtype":"varchar", "label":"v_BillingPasswordExpiry", "direction":"in", "validator":"", "width":"auto"},
                    //         ]
                    //     }
                    // }],
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_operation_LS_SearchSBCCDRs.gui",
        url: "SearchSBCCDRs",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_operation_CreateResellerAccounts.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};