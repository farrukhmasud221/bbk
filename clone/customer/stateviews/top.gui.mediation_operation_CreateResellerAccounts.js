export const mediationOperationCreateResellerAccountsState = {
    states: [{
        name: "top.gui.mediation_operation_CreateResellerAccounts",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Assign DIDs",
                    "panelType": "InsertView",
                    type: "insert",
                    buttonLabel: "Assign DID",
                    "operationId": "TX_InsertBulkDIDs2",
                    "Params": [
                        { "ViewParamId": 57641, "name": "v_DIDNumber", "ctype": "select", "paramtype": "bigint", "label": "v_DIDNumber", "direction": "in", "validator": "", operationId: "LS_getDIDs", valueName: "v_DIDNumber", displayName: "v_DIDNumber", "width": "auto" },
                        { "ViewParamId": 72024, "name": "v_DIDType", "ctype": "select", "paramtype": "bigint", "label": "v_DIDType", "direction": "inout", "validator": "", "width": "*", "options": [{ "display": "Standard", "value": "Standard" }] },
                        { "ViewParamId": 57641, "name": "v_SIPTrunkName", "ctype": "select", "paramtype": "bigint", "label": "v_SIPTrunkName", "direction": "in", "validator": "", operationId: "LS_siptrunks", valueName: "v_SIPTrunkName", displayName: "v_SIPTrunkName", "width": "auto" },
                        { "ViewParamId": 57641, "name": "v_SIPTrunkExtDialingGroupName", "ctype": "select", "paramtype": "bigint", "label": "v_SIPTrunkExtDialingGroupName", "direction": "in", "validator": "", operationId: "LS_siptrunkextdialinggroups", valueName: "v_SIPTrunkExtDialingGroupName", displayName: "v_SIPTrunkExtDialingGroupName", "width": "auto" },
                        { "ViewParamId": 73337, "name": "v_SIPTrunkDialingExtension", "ctype": "label", "paramtype": "varchar", "label": "v_SIPTrunkDialingExtension", "direction": "in", "validator": "", "width": "auto", "placeholder": "Please enter the Sip trunk dialing extension", "required": "true" },
                        //{ "ViewParamId": 73338, "name": "v_ServiceName", "ctype": "textbox", "paramtype": "varchar", "label": "v_ServiceName", "direction": "in", "validator": "", "width": "auto", "placeholder": "Please enter the Service name", "required": "true" },

                    ],
                }];
                //   "gridOperations": [{
                //         operationId: "TX_Insaccount",
                //         label: "Add Device",
                //         type: "insert",
                //         viewsObj: {
                //             "viewID": "888",
                //             "heading": "Add Device",
                //             "mappings": {
                //                 "v_AccountID": "AccountID"
                //             },
                //             "panelType": "InsertView",
                //             buttonLabel: "Save Device",
                //             "operationId": "TX_Insdevice",
                //             "Params":[
                //                 {"ViewParamId":73336, "name":"v_AccountIdentification", "ctype":"textbox", "paramtype":"varchar", "label":"v_AccountIdentification", "direction":"in", "validator":"", "width":"auto"},
                //                 {"ViewParamId":73337, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"in", "validator":"", "width":"auto"},
                //                 {"ViewParamId":73338, "name":"v_BillingPassword", "ctype":"textbox", "paramtype":"v_BillingPassword", "label":"v_DeviceModel", "direction":"in", "validator":"", "width":"auto"},
                //                 {"ViewParamId":73339, "name":"v_BillingPasswordExpiry", "ctype":"label", "paramtype":"varchar", "label":"v_BillingPasswordExpiry", "direction":"in", "validator":"", "width":"auto"},
                //             ]
                //         }
                //     }],
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_operation_CreateResellerAccounts.gui",
        url: "AssignDID",
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