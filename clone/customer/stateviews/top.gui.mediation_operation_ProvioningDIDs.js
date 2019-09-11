export const mediationOperationProvioningDIDsAccountsState = {
    states: [{
        name: "top.gui.mediation_ProvioningDIDs",
              abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Block/UnBlock DIDs",
                    "panelType": "InsertView",
                    type: "insert",
                    buttonLabel: "Block / UnBlock DIDs",
                    "operationId": "TX_UpdateDIDStatus",
                    "Params": [
                        {"ViewParamId":57641, "name":"v_DIDNumber", "ctype":"select", "paramtype":"bigint", "label":"v_DIDNumber", "direction":"in", "validator":"", operationId: "LS_getDIDs", valueName: "v_DIDNumber", displayName: "v_DIDNumber", "width":"auto"},      
{ "ViewParamId": 72024, "name": "v_Status", "ctype": "select", "paramtype": "bigint", "label": "Block/UnBlock", "direction": "inout", "validator": "", "width": "*", "options":[{"display":"Block", "value":0},{"display":"UnBlock", "value":1}] },

                            
                               
                                

				// {"ViewParamId":73338, "name":"v_IsReseller", "ctype":"checkbox", "paramtype":"varchar", "label":"v_IsReseller", "direction":"in", "validator":"", "width":"auto","placeholder":"password","required":"true"},
                        // { "ViewParamId": 71179, "name": "v_PublicIdentity", "ctype": "label", "paramtype": "varchar", "label": "v_PublicIdentity", "direction": "in", "validator": "", "width": "*" },

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
        name: "top.gui.mediation_ProvioningDIDs.gui",
        url: "ProvioningDIDs",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_ProvioningDIDs.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};