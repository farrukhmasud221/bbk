export const mediationOperationCreateAccountsState = {
    states: [{
        name: "top.gui.mediation_operation_CreateAccounts",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Insert DID",
                    "panelType": "InsertView",
                    type: "insert",
                    buttonLabel: "Insert DID",
                    "operationId": "TX_InsertDID",
                    "Params": [
                        {"ViewParamId":73337, "name":"v_DIDNumber", "ctype":"label", "paramtype":"varchar", "label":"v_DIDNumber", "direction":"in", "validator":"", "width":"auto","placeholder":"DID Number","required":"true"},
                               
                            
                              

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
        name: "top.gui.mediation_operation_CreateAccounts.gui",
        url: "CreateDID",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_operation_CreateAccounts.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};