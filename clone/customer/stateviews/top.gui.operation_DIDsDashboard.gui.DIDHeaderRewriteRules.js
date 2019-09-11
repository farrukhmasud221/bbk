export const DIDsDashboardDIDHeaderRewriteRulesState = {
    states: [{
        name: "top.gui.operation_DIDsDashboard.gui.DIDHeaderRewriteRules",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "DID Header Rewrite Rules",
                    "panelType": "ListView",
                    "operationId": "UI_dids",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000,10000,20000],
                        paginationPageSize: 20000,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                         enableScrollbars: true,
                        exporterCsvFilename: 'SipTrunk.csv',
                        enableGridMenu: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [

                            
                               { "ViewColumnDefID": 36388, "name": "v_DIDID", "cellClass":"text-center","label": "v_DIDID", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_ToRegex","cellClass":"text-center", "label": "v_ToRegex", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_FromRegex", "cellClass":"text-center","label": "v_FromRegex", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_RequestRegex","cellClass":"text-center", "label": "v_RequestRegex", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_ContactRegex", "cellClass":"text-center","label": "v_ContactRegex", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_IsReject","cellClass":"text-center", "label": "v_IsReject", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_PrependTo", "cellClass":"text-center","label": "v_PrependTo", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_PrependFrom","cellClass":"text-center", "label": "v_PrependFrom", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_PrependRequest", "cellClass":"text-center","label": "v_PrependRequest", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_PrependContact","cellClass":"text-center", "label": "v_PrependContact", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_RemoveFromTo", "cellClass":"text-center","label": "v_RemoveFromTo", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_RemoveFromFrom","cellClass":"text-center", "label": "v_RemoveFromFrom", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_RemoveFromRequest", "cellClass":"text-center","label": "v_RemoveFromRequest", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_RemoveFromContact","cellClass":"text-center", "label": "v_RemoveFromContact", "width": "auto", enableCellEdit: true },

                               { "ViewColumnDefID": 36388, "name": "v_ReplaceTo", "cellClass":"text-center","label": "v_ReplaceTo", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_ReplaceFrom","cellClass":"text-center", "label": "v_ReplaceFrom", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_ReplaceRequest", "cellClass":"text-center","label": "v_ReplaceRequest", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_ReplaceContact","cellClass":"text-center", "label": "v_ReplaceContact", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_HeaderRewriteRulePriority", "cellClass":"text-center","label": "v_HeaderRewriteRulePriority", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_InsertTime","cellClass":"text-center", "label": "v_InsertTime", "width": "auto", enableCellEdit: true },

                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
                        ],
                    },
                    
                 "gridOperations": [{
                        operationId: "TX_Insaccount",
                        label: "Add ",
                        type: "insert",
                        viewsObj: {
                            "viewID": "888",
                            "heading": "Add",
                            "mappings": {
                                "v_AccountID": "AccountID"
                            },
                            "panelType": "InsertView",
                            buttonLabel: "Add",
                            "operationId": "TX_Insdevice",
                            "Params":[
                                {"ViewParamId":73336, "name":"v_InsertTime", "ctype":"textbox", "paramtype":"varchar", "label":"v_InsertTime", "direction":"in", "validator":"", "width":"auto"},
                                {"name":"v_AccountID", "type":"bigint", "default":null, "direction":"in"},
					{"name":"v_ToRegex", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_FromRegex", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_RequestRegex", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_ContactRegex", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_IsReject", "type":"tinyint", "default":null, "direction":"in"},
					{"name":"v_PrependTo", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_PrependFrom", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_PrependRequest", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_PrependContact", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_RemoveFromTo", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_RemoveFromFrom", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_RemoveFromRequest", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_RemoveFromContact", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_ReplaceTo", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_ReplaceFrom", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_ReplaceRequest", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_ReplaceContact", "type":"varchar", "length":255, "default":null, "direction":"in"},
					{"name":"v_HeaderRewriteRulePriority", "type":"bigint", "default":null, "direction":"in"},
					{"name":"v_AdminID", "type":"bigint", "serverProperty":"sessionState.v_AdministratorID", "default":null, "direction":"in"},
					{"name":"v_TXID", "type":"bigint", "serverProperty":"ResourceManager.TXID", "default":null, "direction":"in"},
					{"name":"v_IsNestedTransaction", "type":"tinyint", "serverProperty":"Transaction.GlobalTransactionID", "default":null, "direction":"in"},
					{"name":"v_AccountHeaderReWriteRuleID", "type":"bigint", "default":null, "direction":"out"},
					{"name":"v_ReturnCode", "type":"bigint", "default":null, "direction":"out"}
                               
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
                await metaDataService.resolve(viewsObj, $stateParams);
                //    console.log("hello",viewsObj[0].gridOptions.data);

                // viewsObj[0].gridOptions.data.forEach(element => {
                //   if(element["v_Status"]===0)
                //   {
                //       element["v_Status"]="Block";
                //   }
                //   else{
                //       element["v_Status"]="UnBlock";
                //   }
                // });



                return viewsObj;
            }]
        }
    },











    
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDHeaderRewriteRules.gui",
        url: "/DIDHeaderRewriteRules",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
