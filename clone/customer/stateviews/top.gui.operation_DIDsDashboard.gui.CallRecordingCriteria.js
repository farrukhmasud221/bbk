export const DIDsDashboardCallRecordingCriteriaState = {
    states: [{
        name: "top.gui.operation_DIDsDashboard.gui.CallRecordingCriteria",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "Call Recording Criteria",
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

                            
                          
                            {"name":"v_ID", "type":"bigint", "default":null, "direction":"out"},
                            {"name":"v_CustomerID", "type":"bigint", "default":null, "direction":"out"},
                            {"name":"v_PhoneNumber", "type":"varchar", "length":255, "default":null, "direction":"out"},
                            {"name":"v_IsIncoming", "type":"tinyint", "default":null, "direction":"out"},
                            {"name":"v_IsOutgoing", "type":"tinyint", "default":null, "direction":"out"},
                            {"name":"v_InsertTime", "type":"tinyint", "default":null, "direction":"out"}
                                  

                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
                        ],
                    },
                    
                //  "gridOperations": [{
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
                //                 {"ViewParamId":73336, "name":"v_InsertTime", "ctype":"textbox", "paramtype":"varchar", "label":"v_InsertTime", "direction":"in", "validator":"", "width":"auto"},
                               
                //             ]
                //         }
                //     }],
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
        name: "top.gui.operation_DIDsDashboard.gui.CallRecordingCriteria.gui",
        url: "/CallRecordingCriteria",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
