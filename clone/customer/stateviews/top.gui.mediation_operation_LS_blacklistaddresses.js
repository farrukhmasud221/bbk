export const mediationOperationLS_blacklistaddressesState = {
    states: [{
        name: "top.gui.mediation_operation_LS_blacklistaddresses",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "Acess Incoming Block Calls",
                    "panelType": "ListView",
                    "operationId": "LS_accesssbcincblockcalls",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000,10000,20000],
                        paginationPageSize: 20000,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                         enableScrollbars: true,
                        exporterCsvFilename: 'CDRsList.csv',
                        enableGridMenu: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [

                            
                               { "ViewColumnDefID": 36388, "name": "v_BlackListAddressID", "cellClass":"text-center","label": "v_BlackListAddressID", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_BlackListAddress","cellClass":"text-center", "label": "v_BlackListAddress", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_BlackListAddressExpiry", "cellClass":"text-center","label": "v_BlackListAddressExpiry", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_LastRejectedCallLogged","cellClass":"text-center", "label": "v_LastRejectedCallLogged", "width": "auto", enableCellEdit: true },
                                
                        
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
        name: "top.gui.mediation_operation_LS_blacklistaddresses.gui",
        url: "AcessBlackListAdresses",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};