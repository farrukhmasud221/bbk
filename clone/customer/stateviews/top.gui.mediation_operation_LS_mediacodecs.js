export const mediationOperationLS_mediacodecState = {
    states: [{
        name: "top.gui.mediation_operation_LS_mediacodes",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
             
               "viewID": "9669",
                    "heading": "Media Codecs",
                    "panelType": "ListView",
                    "operationId": "LS_mediacodecs",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000,10000,20000],
                        paginationPageSize: 20000,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                         enableScrollbars: true,
                        exporterCsvFilename: 'mediacodec.csv',
                        enableGridMenu: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        
                        "columnDefs": [
                            {
                                "ViewColumnDefID": 36391,
                                "name": "v_MediaCodecID",
                                "cellClass": "text-center",
                                "label": "v_MediaCodecID",
                                "cellTemplate": "<div><a ng-href=\"#!/tblmedia/{{row.entity.v_MediaCodecID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                // "cellTemplate": "<div><a ng-href=\"#!/siptrunks/{{row.entity.v_SIPTrunkName}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },
                            { "ViewColumnDefID": 36388, "name": "v_MediaCodecName", "cellClass": "text-center", "label": "v_MediaCodecID", "width": "*", enableCellEdit: false },
                            {
                                "ViewColumnDefID": 36391,
                                "name": "v_MediaCodecName",
                                "cellClass": "text-center",
                                "label": "v_MediaCodecName",
                                "cellTemplate": "<div><a ng-href=\"#!/tblmedia/{{row.entity.v_MediaCodecID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },

                            

                            { "ViewColumnDefID": 36391, "name": "tblmediacodecs","cellClass":"text-center", "label": "tblmediacodecs", "width": "auto", enableCellEdit: true },
                               { "ViewColumnDefID": 36388, "name": "v_IsAccessSBCBlocked", "cellClass":"text-center","label": "v_IsAccessSBCBlocked", "width": "*", enableCellEdit: true },
                               { "ViewColumnDefID": 36391, "name": "v_MediaCodecName","cellClass":"text-center", "label": "v_MediaCodecName", "width": "auto", enableCellEdit: true },
                                  { "ViewColumnDefID": 36388, "name": "v_MediaApplication", "cellClass":"text-center","label": "v_MediaApplication", "width": "*", enableCellEdit: true },
                                  { "ViewColumnDefID": 36388, "name": "v_MediaCodecCode", "cellClass":"text-center","label": "v_MediaCodecCode", "width": "*", enableCellEdit: true },
                                  { "ViewColumnDefID": 36388, "name": "v_MaxConcurrentSessions", "cellClass":"text-center","label": "v_MaxConcurrentSessions", "width": "*", enableCellEdit: true },
                                  { "ViewColumnDefID": 36388, "name": "v_MediaCodecPriority", "cellClass":"text-center","label": "v_MediaCodecPriority", "width": "*", enableCellEdit: true },
                                 
                        
                            // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto"}, 
                         
                        ],
                    },
                //    "gridOperations": [{
                //        operationId: "LS_mediacodecs",
                //        label: "Create Account",
                //        type: "insert",
                //        viewsObj: {
                //            "viewID": "888",
                //           "heading": "Create Account",
                //            "mappings": {
                //                "tblmediacodecs": "v_MediaCodecID"
                //            },
                //           "panelType": "InsertView",
                //            buttonLabel: "Create Account",
                //            "operationId": "LS_mediacodecs",
                //            "Params":[
                               
                //                {"ViewParamId":73337, "name":"v_MediaCodecID", "ctype":"label", "paramtype":"varchar", "label":"v_MediaCodecID", "direction":"in", "validator":"", "width":"auto","placeholder":"92345XXXXX","required":"true"},
                //                {"ViewParamId":73338, "name":"v_MediaApplication", "ctype":"textbox", "paramtype":"varchar", "label":"v_MediaApplication", "direction":"in", "validator":"", "width":"auto","placeholder":"password","required":"true"},
                     
				//  {"ViewParamId":73338, "name":"v_IsReseller", "ctype":"checkbox", "paramtype":"varchar", "label":"v_IsReseller", "direction":"in", "validator":"", "width":"auto","placeholder":"password","required":"true"},

                                
                //            ]
                //        }
                //      }],
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
    }, {
        name: "top.gui.mediation_operation_LS_mediacodec.gui",
        url: "MediaCodec",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};