

export const Operation_taskOperationState = {
    states: [{
        name: "top.gui.operation_taskOperation",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Media Codecs",
                    "panelType": "ListView",
                    

                    // gridOperations: [{
                    //     type: 'insert',
                    //     label: 'Create Media Codecs',
                    //     operationId: 'WF_CreateSIPTrunk',
                    //     viewsObj: {
                    //         "viewID": "346",
                    //         "heading": "Create Sip Trunk",
                    //         "panelType": "InsertView",
                    //         "operationId": "WF_CreateSIPTrunk",
                    //         buttonLabel: "Create Sip Trunk",
                    //         "Params": [


                    //             { "ViewParamId": 54501, "name": "v_SIPTrunkName", "ctype": "textbox", "paramtype": "varchar", "label": "v_SIPTrunkName", "direction": "in", "validator": "", "width": "*" },
                    //             { "ViewParamId": 54501, "name": "v_SIPTrunkDescription", "ctype": "textarea", "paramtype": "varchar", "label": "v_SIPTrunkDescription", "direction": "in", "validator": "", "width": "*" },
                    //             {
                    //                 "ViewParamId": 54501, "name": "v_IsPostPaidSIPTrunk", "ctype": "select", "paramtype": "varchar", "label": "IsPostPaid",
                    //                 "options": [{ 'display': 'Yes', 'value': '1' },
                    //                 { 'display': 'No', 'value': '0' }], "direction": "in", "validator": "", "width": "*"
                    //             },
                    //             { "ViewParamId": 54501, "name": "v_TechPrefix", "ctype": "textbox", "paramtype": "varchar", "label": "v_TechPrefix", "direction": "in", "validator": "", "width": "*" },
                    //             {
                    //                 "ViewParamId": 54501, "name": "v_Suspended", "ctype": "select", "paramtype": "varchar", "label": "v_Suspended", "options": [{ 'display': 'Yes', 'value': '1' },
                    //                 { 'display': 'No', 'value': '0' }], "direction": "in", "validator": "", "width": "*"
                    //             },
                    //             { "ViewParamId": 54501, "name": "v_DIDNumber", "ctype": "textbox", "paramtype": "varchar", "label": "Master Number", "direction": "in", "validator": "", "width": "*" },
                    //             { "ViewParamId": 54501, "name": "v_IPPolicy", "ctype": "textbox", "paramtype": "varchar", "label": "Forwarding IP Policy", "direction": "in", "validator": "", "width": "*" },
                    //             { "ViewParamId": 54501, "name": "v_PrimaryIP", "ctype": "textbox", "paramtype": "varchar", "label": "v_PrimaryIP", "direction": "in", "validator": "", "width": "*" },
                    //             { "ViewParamId": 54501, "name": "v_ForwardingPort", "ctype": "textbox", "paramtype": "varchar", "label": "v_ForwardingPort", "direction": "in", "validator": "", "width": "*" },
                    //             { "ViewParamId": 54501, "name": "v_TotalNoOfChannels", "ctype": "textbox", "paramtype": "varchar", "label": "v_TotalNoOfChannels", "direction": "in", "validator": "", "width": "*" },
                    //             { "ViewParamId": 54501, "name": "v_IncomingChannels", "ctype": "textbox", "paramtype": "varchar", "label": "v_IncomingChannels", "direction": "in", "validator": "", "width": "*" },

                    //             { "ViewParamId": 54501, "name": "v_OutgoingChannels", "ctype": "textbox", "paramtype": "varchar", "label": "v_OutgoingChannels", "direction": "in", "validator": "", "width": "*" },

                    //             { "ViewParamId": 54501, "name": "v_MediaCodecGroupName", "ctype": "textbox", "paramtype": "varchar", "label": "v_MediaCodecGroupName", "direction": "in", "validator": "", "width": "*" }


                    //         ]
                    //     }
                    // }],

                    
                    "operationId": "LS_mediacodecs",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100, 500, 1000, 2000, 3000, 4000, 5000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'MediaCodec.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
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
                                "label": "v_MediaCodecID",
                                "cellTemplate": "<div><a ng-href=\"#!/tblmedia/{{row.entity.v_MediaCodecID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },

                            { "ViewColumnDefID": 36388, "name": "v_MediaCodecID", "cellClass": "text-center", "label": "v_MediaCodecID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_MediaApplication", "cellClass": "text-center", "label": "v_MediaApplication", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_MediaCodecCode", "cellClass": "text-center", "label": "v_MediaCodecCode", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_MediaCodecName", "cellClass": "text-center", "label": "v_MediaCodecName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_MediaCodecPriority", "cellClass": "text-center", "label": "v_MediaCodecPriority", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_IsAccessSBCBlocked", "cellClass": "text-center", "label": "v_IsAccessSBCBlocked", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_MaxConcurrentSessions", "cellClass": "text-center", "label": "v_MaxConcurrentSessions", "width": "*", enableCellEdit: false }


                        ],
                    }
                }];

                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.operation_taskOperation.gui",
        url: "taskOperation",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
