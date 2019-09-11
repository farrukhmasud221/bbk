export const AddPaymentState = {
    states: [{
        name: "top.gui.mediation_AddPayment",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Acount Payment",
                    "panelType": "InsertView",
                    buttonLabel: "Add Payment",
                    "operationId": "WF_AddPayment",
                    "Params": [
                        { "ViewParamId": 72024, "name": "UserAuthName", "ctype": "label", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*","placeholder":"92456XXXXXX","required":"true" },
                        { "ViewParamId": 61575, "name": "CreditAmount", "ctype": "number", "max": "20", "paramtype": "varchar", "label": "Credit Amount", "direction": "in", "validator": "", "width": "auto","placeholder":"Credit Amount","required":"true" }
                        // { "ViewParamId": 71179, "name": "v_PublicIdentity", "ctype": "label", "paramtype": "varchar", "label": "v_PublicIdentity", "direction": "in", "validator": "", "width": "*" },

                    ],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [

                            { "ViewColumnDefID": 36391, "name": "v_PrivateIdentity","cellClass":"text-center", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/PrivateIdentityDashboard/{{row.entity.v_AccNoPrivateIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_PublicIdentity", "label": "v_PublicIdentity", "cellTemplate": "<div><a ng-href=\"#!/PublicIdentityDashboard/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DeviceModel", "cellClass":"text-center","label": "v_DeviceModel", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DeviceIdentification", "cellClass":"text-center","label": "v_DeviceIdentification", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DevicePlatform", "cellClass":"text-center","label": "v_DevicePlatform", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DeviceVersion", "cellClass":"text-center","label": "v_DeviceVersion", "width": "*", enableCellEdit: false }
                        ],
                    },
                    "gridOperations": [{
                        operationId: "WF_CreateAccount",
                        label: "Create Account",
                        type: "insert",
                        viewsObj: {
                            "viewID": "888",
                            "heading": "Create Account",
                            "mappings": {
                                "v_AccountID": "AccountID"
                            },
                            "panelType": "InsertView",
                            buttonLabel: "Create Account",
                            "operationId": "WF_CreateAccount",
                            "Params":[
                               
                                {"ViewParamId":73337, "name":"UserAuthName", "ctype":"label", "paramtype":"varchar", "label":"UserName", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73338, "name":"UserPassword", "ctype":"textbox", "paramtype":"varchar", "label":"UserPassword", "direction":"in", "validator":"", "width":"auto"},
                                
                            ]
                        }
                    }],
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
        name: "top.gui.mediation_AddPayment.gui",
        url: "AddPayment",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            
        },
        deepStateRedirect: true
    }]
};