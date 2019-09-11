export const siptrunkdashboardChargesState = {
    states: [{
        name: "top.gui.operation_siptrunkdashboard.gui.Charges",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "SIP trunk Charges",
                    "panelType": "ListView",
                    "operationId": "TX_InsertBulkDIDs2",
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
                            
                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkChargeID", "cellClass":"text-center","label": "v_SIPTrunkChargeID", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_ChargeAmount","cellClass":"text-center", "label": "ChargeAmount", "width": "auto", enableCellEdit: true },



                            { "ViewColumnDefID": 36388, "name": "v_ChargesPerPort", "cellClass":"text-center","label": "ChargesPerPort", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_BillPeriod","cellClass":"text-center", "label": "BillPeriod", "width": "auto", enableCellEdit: true },
                            
                               { "ViewColumnDefID": 36388, "name": "v_BillPeriodType", "cellClass":"text-center","label": "BillPeriodType", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_NoOfChannels","cellClass":"text-center", "label": "NoOfChannels", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_PreviousBalance", "cellClass":"text-center","label": "PreviousBalance", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_PreviousPaidTill","cellClass":"text-center", "label": "PreviousPaidTill", "width": "auto", enableCellEdit: true },

                               { "ViewColumnDefID": 36388, "name": "v_NextPaidTill", "cellClass":"text-center","label": "v_NextPaidTill", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_InsertTime","cellClass":"text-center", "label": "v_InsertTime", "width": "auto", enableCellEdit: true },
                                  

                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
                        ],
                    },
                    
                //  "gridOperations": [{
                //         operationId: "TX_Insaccount",
                //         label: "Add ",
                //         type: "insert",
                //         viewsObj: {
                //             "viewID": "888",
                //             "heading": "Add ",
                //             "mappings": {
                //                 "v_AccountID": "AccountID"
                //             },
                //             "panelType": "InsertView",
                //             buttonLabel: "Add",
                //             "operationId": "TX_Insdevice",
                //             "Params":[
                //                 {"ViewParamId":73336, "name":"v_StartDate", "ctype":"datetime", "paramtype":"varchar", "label":"v_StartDate", "direction":"in", "validator":"", "width":"auto"},
                               
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
        name: "top.gui.operation_siptrunkdashboard.gui.Charges.gui",
        url: "/charges",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
