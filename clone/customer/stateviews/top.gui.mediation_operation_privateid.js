export const mediationOperationPrivateIDState = {
    states: [{
        name: "top.gui.mediation_operation_privateid",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Accounts",
                    "panelType": "SearchView",
                    buttonLabel: "Search",
                    "operationId": "SE_AccnoPrivateIdentities",
                    "Params": [
 { "ViewParamId": 71178, "name": "v_SignUpDateFrom", "ctype": "datetime", "paramtype": "varchar", "label": "StartDate", "direction": "in", "validator": "", "width": "*", "required": "","placeholder":"Start Date" },
                        { "ViewParamId": 71178, "name": "v_SignUpDateTo", "ctype": "datetime", "paramtype": "varchar", "label": "EndDate", "direction": "in", "validator": "", "width": "*", "required": "","placeholder":"End Date" },                        
{ "ViewParamId": 71178, "name": "v_UserName", "ctype": "label", "paramtype": "varchar", "label": "v_UserName", "direction": "in", "validator": "", "width": "*", "required": "","placeholder":"Click Search Button to get all record" },
                         { "ViewParamId": 71179, "name": "v_IsReseller", "ctype": "select", "paramtype": "varchar", "label": "v_IsReseller","options":[{"display":"Reseller Accounts", "value":1},{"display":"Accounts", "value":0}], "direction": "in", "validator": "", "width": "*" },

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
                   // "gridOperations": [{
                     //   operationId: "WF_CreateAccount",
                     //   label: "Create Account",
                      //  type: "insert",
                      //  viewsObj: {
                       //     "viewID": "888",
                      //     "heading": "Create Account",
                         //   "mappings": {
                      //          "v_AccountID": "AccountID"
                      //      },
                     //      "panelType": "InsertView",
                        //    buttonLabel: "Create Account",
                      //      "operationId": "WF_CreateAccount",
                      //      "Params":[
                               
                    //            {"ViewParamId":73337, "name":"UserAuthName", "ctype":"label", "paramtype":"varchar", "label":"UserName", "direction":"in", "validator":"", "width":"auto","placeholder":"92345XXXXX","required":"true"},
                     //           {"ViewParamId":73338, "name":"UserPassword", "ctype":"textbox", "paramtype":"varchar", "label":"UserPassword", "direction":"in", "validator":"", "width":"auto","placeholder":"password","required":"true"},
			//	 {"ViewParamId":73338, "name":"v_IsReseller", "ctype":"checkbox", "paramtype":"varchar", "label":"v_IsReseller", "direction":"in", "validator":"", "width":"auto","placeholder":"password","required":"true"},

                                
                        //    ]
                     //   }
                    //}],
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
        name: "top.gui.mediation_operation_privateid.gui",
        url: "PrivateID",
        views: {
            "tabContent@top": {
                component: "formComponent"
            },
            "searchResult@top.gui.mediation_operation_privateid.gui": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};