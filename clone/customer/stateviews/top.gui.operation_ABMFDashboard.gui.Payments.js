export const ABMFDashboardPaymentsState = {
    states: [{
        name: "top.gui.operation_ABMFDashboard.gui.Payments",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "Payments",
                    "panelType": "ListView",
                    "operationId": "SE_Accounts",
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

                            {"ViewParamId":57791, "name":"v_ID", "ctype":"label", "paramtype":"varchar", "label":"v_ID", "direction":"out", "validator":"", "width":"auto"},
                            {"ViewParamId":57773, "name":"v_Amount", "ctype":"label", "paramtype":"varchar", "label":"v_Amount", "direction":"out", "validator":"", "width":"auto"},
                             {"ViewParamId":57774, "name":"v_Remarks", "ctype":"label", "paramtype":"varchar", "label":"v_Remarks", "direction":"out", "validator":"", "width":"auto"},
                             {"ViewParamId":57775, "name":"v_Balance", "ctype":"label", "paramtype":"varchar", "label":"v_Balance", "direction":"out", "validator":"", "width":"auto"},
                             {"ViewParamId":57774, "name":"v_InsertTime", "ctype":"label", "paramtype":"varchar", "label":"v_InsertTime", "direction":"out", "validator":"", "width":"auto"},
                             {"ViewParamId":57775, "name":"v_PaymentModeID", "ctype":"label", "paramtype":"varchar", "label":"v_PaymentModeID", "direction":"out", "validator":"", "width":"auto"},
                        //  {"ViewParamId":57774, "name":"v_MediaCodecPriority", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecPriority", "direction":"out", "validator":"", "width":"auto"},
                        //  {"ViewParamId":57775, "name":"v_IncomingChannels", "ctype":"label", "paramtype":"varchar", "label":"v_IncomingChannels", "direction":"out", "validator":"", "width":"auto"},
                        // {"ViewParamId":57774, "name":"v_SupportedAudioCodec", "ctype":"label", "paramtype":"varchar", "label":"v_SupportedAudioCodec", "direction":"out", "validator":"", "width":"auto"},
                        //        { "ViewColumnDefID": 36391, "name": "v_Destination","cellClass":"text-center", "label": "v_Destination", "width": "auto", enableCellEdit: true },
                        //        { "ViewColumnDefID": 36391, "name": "v_Destination","cellClass":"text-center", "label": "v_Destination", "width": "auto", enableCellEdit: true },


                                  

                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
                        ],
                    },
                    
                  "gridOperations": [{
                         operationId: "TX_AddReceipt",
                        label: "Add ",
                         type: "insert",
                         viewsObj: {
                             "viewID": "888",
                             "heading": "Add ",
                             "mappings": {
                                "v_ABMFID": "ABMFID"
                             },
                             "panelType": "InsertView",
                             buttonLabel: "Add",
                             "operationId": "TX_AddReceipt",
                             "Params":[
                                {"ViewParamId":73336, "name":"v_Amount", "ctype":"textbox", "paramtype":"varchar", "label":"v_Amount", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_DeferredCommission", "ctype":"textbox", "paramtype":"varchar", "label":"v_DeferredCommission", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_InstrumentNumber", "ctype":"textbox", "paramtype":"varchar", "label":"v_InstrumentNumber", "direction":"in", "validator":"", "width":"auto"},
                                //{"ViewParamId":73336, "name":"v_PaymentModeName", "ctype":"select", "paramtype":"varchar", "label":"v_PaymentModeName", "direction":"in", "validator":"", "width":"auto"},
                                { "ViewParamId": 60465, "name": "v_PaymentModeName", "ctype": "select", "paramtype": "ENUM", "label": "v_PaymentModeName", "direction": "inout", "validator": "", "options": [{ "display": "Yes", "value": "1" }, { "display": "No", "value": "0" }], "width": "auto" },

                                {"ViewParamId":73336, "name":"v_Remarks", "ctype":"textarea", "paramtype":"varchar", "label":"v_Remarks", "direction":"in", "validator":"", "width":"auto"},
                               // {"ViewParamId":73336, "name":"v_InsertTime", "ctype":"textbox", "paramtype":"varchar", "label":"v_InsertTime", "direction":"in", "validator":"", "width":"auto"},
                               

                                { "ViewParamId": 60465, "name": "v_PaymentTaxes", "ctype": "select", "paramtype": "ENUM", "label": "v_PaymentTaxes", "direction": "inout", "validator": "", "options": [{ "display": "Yes", "value": "1" }, { "display": "No", "value": "0" }], "width": "auto" },
                               
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
        name: "top.gui.operation_ABMFDashboard.gui.Payments.gui",
        url: "/Payments",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
