export const ABMFDashboardABMFContactsState = {
    states: [{
        name: "top.gui.operation_ABMFDashboard.gui.ABMFContacts",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "ABMF Contacts",
                    "panelType": "ListView",
                    "operationId": "SE_ABMFs",
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

                            { "ViewColumnDefID": 36388, "name": "v_ID", "cellClass":"text-center","label": "v_ID", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_Email","cellClass":"text-center", "label": "v_Email", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "v_CustomerName", "cellClass":"text-center","label": "v_CustomerName", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_Address","cellClass":"text-center", "label": "v_Address", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "v_City", "cellClass":"text-center","label": "v_City", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_Province_State","cellClass":"text-center", "label": "v_Province_State", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "v_Country", "cellClass":"text-center","label": "v_Country", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_LandLine_Tel","cellClass":"text-center", "label": "v_LandLine_Tel", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "v_Mobile_Tel", "cellClass":"text-center","label": "v_Mobile_Tel", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_Office_Tel","cellClass":"text-center", "label": "v_Office_Tel", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "v_Fax", "cellClass":"text-center","label": "v_Fax", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_PostalCode","cellClass":"text-center", "label": "v_PostalCode", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "v_Company", "cellClass":"text-center","label": "v_Company", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "v_InsertTime","cellClass":"text-center", "label": "v_InsertTime", "width": "auto", enableCellEdit: true },
                            //    { "ViewColumnDefID": 36391, "name": "v_Destination","cellClass":"text-center", "label": "v_Destination", "width": "auto", enableCellEdit: true },
                            //    { "ViewColumnDefID": 36391, "name": "v_Destination","cellClass":"text-center", "label": "v_Destination", "width": "auto", enableCellEdit: true },


                                  

                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                         
                        ],
                    },
                    
                 "gridOperations": [{
                        operationId: "TX_UpdateABMFContact",
                        label: "Add ",
                        type: "insert",
                        viewsObj: {
                            "viewID": "888",
                            "heading": "Add",
                            "mappings": {
                                "v_ABMFID": "ABMFID"
                            },
                            "panelType": "InsertView",
                            buttonLabel: "Add",
                            "operationId": "TX_UpdateABMFContact",
                            "Params":[
                                { "ViewParamId": 60465, "name": "v_ContactType", "ctype": "select", "paramtype": "ENUM", "label": "v_ContactType", "direction": "inout", "validator": "", "options": [{ "display": "Billing", "value": "Billing" }, { "display": "Primary", "value": "Primary" }, { "display": "Support", "value": "Support" }, { "display": "Technical", "value": "Technical" }], "width": "auto" },
                              //  {"ViewParamId":73336, "name":"v_CustomerType", "ctype":"textbox", "paramtype":"varchar", "label":"v_CustomerType", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Email", "ctype":"textbox", "paramtype":"varchar", "label":"v_Email", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_CustomerName", "ctype":"textbox", "paramtype":"varchar", "label":"v_CustomerName", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Address", "ctype":"textbox", "paramtype":"varchar", "label":"v_Address", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_City", "ctype":"textbox", "paramtype":"varchar", "label":"v_City", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Province_State", "ctype":"textbox", "paramtype":"varchar", "label":"v_Province_State", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Country", "ctype":"textbox", "paramtype":"varchar", "label":"v_Country", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_LandLine_Tel", "ctype":"textbox", "paramtype":"varchar", "label":"v_LandLine_Tel", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Mobile_Tel", "ctype":"textbox", "paramtype":"varchar", "label":"v_Mobile_Tel", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Office_Tel", "ctype":"textbox", "paramtype":"varchar", "label":"v_Office_Tel", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Fax", "ctype":"textbox", "paramtype":"varchar", "label":"v_Fax", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_PostalCode", "ctype":"textbox", "paramtype":"varchar", "label":"v_PostalCode", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Company", "ctype":"textbox", "paramtype":"varchar", "label":"v_Company", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_Designation", "ctype":"textbox", "paramtype":"varchar", "label":"v_Designation", "direction":"in", "validator":"", "width":"auto"},



                             
                               
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
        name: "top.gui.operation_ABMFDashboard.gui.ABMFContacts.gui",
        url: "/ABMFContacts",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
