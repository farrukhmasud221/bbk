export const ABMFDashboardInvoicesState = {
    states: [{
        name: "top.gui.operation_ABMFDashboard.gui.Invoices",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "Invoices",
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

                            { "ViewColumnDefID": 36391, "name": "v_ID","cellClass":"text-center", "label": "v_ID", "width": "auto", enableCellEdit: true },

                            { "ViewColumnDefID": 36388, "name": "v_Status", "cellClass":"text-center","label": "v_Status", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_ABMFID","cellClass":"text-center", "label": "v_ABMFID", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_InvoiceDate","cellClass":"text-center", "label": "v_InvoiceDate", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_InvoiceDueDate","cellClass":"text-center", "label": "v_InvoiceDueDate", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_Description","cellClass":"text-center", "label": "v_Description", "width": "auto", enableCellEdit: true },
                             { "ViewColumnDefID": 36391, "name": "v_Tax1","cellClass":"text-center", "label": "v_Tax1", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_Tax2","cellClass":"text-center", "label": "v_Tax2", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_InvoiceReferenceNo","cellClass":"text-center", "label": "v_InvoiceReferenceNo", "width": "auto", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_FromInvoiceDate","cellClass":"text-center", "label": "v_FromInvoiceDate", "width": "auto", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_ToInvoiceDate","cellClass":"text-center", "label": "v_ToInvoiceDate", "width": "auto", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_InvoiceDate","cellClass":"text-center", "label": "v_InvoiceDate", "width": "auto", enableCellEdit: true },

                              { "ViewColumnDefID": 36388, "name": "v_InvoiceDiscount", "cellClass":"text-center","label": "v_InvoiceDiscount", "width": "*", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_TotalInvoicePaymentTaxes","cellClass":"text-center", "label": "v_TotalInvoicePaymentTaxes", "width": "auto", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_InvoiceDueAmount","cellClass":"text-center", "label": "v_InvoiceDueAmount", "width": "auto", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_InvoiceFulyAdjustedTimeStamp","cellClass":"text-center", "label": "v_InvoiceFulyAdjustedTimeStamp", "width": "auto", enableCellEdit: true },
                              { "ViewColumnDefID": 36391, "name": "v_InvoiceOnHoldTimeStamp","cellClass":"text-center", "label": "v_InvoiceOnHoldTimeStamp", "width": "auto", enableCellEdit: true },
                            //    { "ViewColumnDefID": 36391, "name": "v_Destination","cellClass":"text-center", "label": "v_Destination", "width": "auto", enableCellEdit: true },
                            //    { "ViewColumnDefID": 36391, "name": "v_Destination","cellClass":"text-center", "label": "v_Destination", "width": "auto", enableCellEdit: true },


                                  

                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
                        ],
                    },
                    
                 "gridOperations": [{
                        operationId: "UI_invoices",
                        label: "Add",
                        type: "insert",
                        viewsObj: {
                            "viewID": "888",
                            "heading": "Add ",
                            "mappings": {
                                "v_ABMFID": "ABMFID"
                            },
                            "panelType": "InsertView",
                            buttonLabel: "Add",
                            "operationId": "UI_invoices",
                            "Params":[
                                {"ViewParamId":73336, "name":"v_FromInvoiceDate", "ctype":"datetime", "paramtype":"varchar", "label":"v_FromInvoiceDate", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_ToInvoiceDate", "ctype":"datetime", "paramtype":"varchar", "label":"v_ToInvoiceDate", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Description", "ctype":"textarea", "paramtype":"varchar", "label":"v_Description", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_InvoiceReferenceNo", "ctype":"label", "paramtype":"varchar", "label":"v_InvoiceReferenceNo", "direction":"in", "validator":"", "width":"auto"},
                                //{ "ViewColumnDefID": 36391, "name": "v_Description","ctype":"datetime", "label": "v_Description", "width": "auto", enableCellEdit: true },
                               // { "ViewColumnDefID": 36391, "name": "v_Description","ctype":"textarea","label": "v_Description", "width": "auto", enableCellEdit: true },
                                //{ "ViewColumnDefID": 36391, "name": "v_InvoiceReferenceNo", "label": "v_InvoiceReferenceNo", "width": "auto", enableCellEdit: true },
                               
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
        name: "top.gui.operation_ABMFDashboard.gui.Invoices.gui",
        url: "/Invoices",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
