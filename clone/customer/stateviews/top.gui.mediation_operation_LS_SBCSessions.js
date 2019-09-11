export const mediationOperationLS_SBCSessionsState = {
    states: [{
        name: "top.gui.mediation_operation_LS_SBCSessions",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "SBC Sessions List",
                    "panelType": "ListView",
                    "operationId": "LS_sbcsessions",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000,10000,20000],
                        paginationPageSize: 20000,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                         enableScrollbars: true,
                        exporterCsvFilename: 'SBCSessions.csv',
                        enableGridMenu: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [
                            { "ViewColumnDefID": 50361, "name": "v_AccountingCode", "displayName": "ID", "cellTemplate": "<div><a my-href=\"index.html#/tblcdrs?v_RecordID={{row.entity.v_RecordID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50362, "displayName": "v_AuthorizationCode", "name": "v_v_AuthorizationCode", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50363, "displayName": "v_FirstPriorityRouteURI", "name": "v_v_FirstPriorityRouteURI", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50364, "displayName": "v_ByeParty", "name": "v_v_ByeParty", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50365, "displayName": "v_CallDirection", "name": "v_CallDirection", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50366, "displayName": "v_CallRejectCode", "name": "v_CallRejectCode", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50367, "displayName": "v_CallSubType", "name": "v_CallSubType", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50368, "displayName": "v_CancelParty", "name": "v_CancelParty", "width": "*" , enableCellEdit: false},
                            { "ViewColumnDefID": 50369, "displayName": "v_CauseCode ", "name": "v_CauseCode ", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50368, "displayName": "v_CancelParty", "name": "v_CancelParty", "width": "*" , enableCellEdit: false},
                            { "ViewColumnDefID": 50369, "displayName": "v_CauseCodeDescription ", "name": "v_CauseCodeDescription ", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50368, "displayName": "v_ChargingInfo", "name": "v_ChargingInfo", "width": "*" , enableCellEdit: false},
                            { "ViewColumnDefID": 50369, "displayName": "v_ContactUri ", "name": "v_ContactUri ", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50368, "displayName": "v_ContactURIHost", "name": "v_ContactURIHost", "width": "*" , enableCellEdit: false},
                            { "ViewColumnDefID": 50369, "displayName": "v_ContactURIPort ", "name": "v_ContactURIPort ", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50368, "displayName": "v_ContactURIUser", "name": "v_ContactURIUser", "width": "*" , enableCellEdit: false},
                            { "ViewColumnDefID": 50369, "displayName": "v_CorrelationID ", "name": "v_CorrelationID ", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 50368, "displayName": "v_ChargingInfo", "name": "v_ChargingInfo", "width": "*" , enableCellEdit: false},
                            { "ViewColumnDefID": 50369, "displayName": "v_ContactUri ", "name": "v_ContactUri ", "width": "*", enableCellEdit: false }
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
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
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_operation_LS_SBCSessions.gui",
        url: "SBCSessions",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};