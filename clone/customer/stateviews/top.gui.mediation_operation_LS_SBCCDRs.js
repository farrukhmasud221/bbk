export const mediationOperationLS_SBCCDRsState = {
    states: [{
        name: "top.gui.mediation_operation_LS_SBCCDRs",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
               "viewID": "9669",
                    "heading": "SBC CDRs List",
                    "panelType": "ListView",
                    "operationId": "LS_sbccdrs",
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

                            { "ViewColumnDefID": 36388, "name": "CallLegIDA", "cellClass": "text-center", "label": "CallLegIDA", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallLegIDB", "cellClass": "text-center", "label": "CallLegIDB", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "IncomingToURI", "cellClass": "text-center", "label": "IncomingToURI", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "IncomingFromUri", "cellClass": "text-center", "label": "IncomingFromUri", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "IncomingRequestUri", "cellClass": "text-center", "label": "IncomingRequestUri", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "InviteTime", "cellClass": "text-center", "label": "InviteTime", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "OutgoingToUri", "cellClass": "text-center", "label": "OutgoingToUri", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "OutgoingFromUri", "cellClass": "text-center", "label": "OutgoingFromUri", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "OutgoingRequestUri", "cellClass": "text-center", "label": "OutgoingRequestUri", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "OutgoingContactUri", "cellClass": "text-center", "label": "OutgoingContactUri", "width": "*", enableCellEdit: true },




                            { "ViewColumnDefID": 36388, "name": "Duration", "cellClass": "text-center", "label": "Duration", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "OutgoingOffer", "cellClass": "text-center", "label": "OutgoingOffer", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "RingingTime", "cellClass": "text-center", "label": "RingingTime", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "CancelInitiatedTime", "cellClass": "text-center", "label": "CancelInitiatedTime", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CancelParty", "cellClass": "text-center", "label": "CancelParty", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CancelAcknowledgedTime", "cellClass": "text-center", "label": "CancelAcknowledgedTime", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallAnswerTime", "ViewColumnDefID": 36388, "name": "CallAnswerTime", "cellClass": "text-center", "label": "OutgoingContactUri", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "ByeInitiated", "cellClass": "text-center", "label": "ByeInitiated", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "ByeAcked", "cellClass": "text-center", "label": "ByeAcked", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallElapsedTime", "cellClass": "text-center", "label": "CallElapsedTime", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallTerminationCause", "cellClass": "text-center", "label": "CallTerminationCause", "width": "*", enableCellEdit: true },


                            { "ViewColumnDefID": 36388, "name": "OriginatingTrunkNumber", "cellClass": "text-center", "label": "OriginatingTrunkNumber", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "TerminatingTrunkNumber", "cellClass": "text-center", "label": "TerminatingTrunkNumber", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallSubType", "cellClass": "text-center", "label": "CallSubType", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36391, "name": "CallDirection", "cellClass": "text-center", "label": "CallDirection", "width": "auto", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "ForwardingNumber", "cellClass": "text-center", "label": "ForwardingNumber", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "PDD", "cellClass": "text-center", "label": "PDD", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "FailoverOutgoingToUri", "ViewColumnDefID": 36388, "name": "FailoverOutgoingToUri", "cellClass": "text-center", "label": "OutgoingContactUri", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallRejectCode", "cellClass": "text-center", "label": "CallRejectCode", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CallRejectDescription", "cellClass": "text-center", "label": "CallRejectDescription", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "ByeParty", "cellClass": "text-center", "label": "ByeParty", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "IsSuccessful", "cellClass": "text-center", "label": "IsSuccessful", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CauseCode", "cellClass": "text-center", "label": "CauseCode", "width": "*", enableCellEdit: true },
                            { "ViewColumnDefID": 36388, "name": "CauseCodeDescription", "cellClass": "text-center", "label": "CauseCodeDescription", "width": "*", enableCellEdit: true },
                        
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
                   console.log("hello",viewsObj[0].gridOptions.data);

                viewsObj[0].gridOptions.data.forEach(element => {
                  if(element["v_Status"]===0)
                  {
                      element["v_Status"]="Block";
                  }
                  else{
                      element["v_Status"]="UnBlock";
                  }
                });



                return viewsObj;
            }]
        }
    }, {
        name: "top.gui.mediation_operation_LS_SBCCDRs.gui",
        url: "SBCCDRs",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true,
        sticky: true
    }]
};