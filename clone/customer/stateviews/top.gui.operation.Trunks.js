

export const Operation_TrunksState = {
    states: [{
        name: "top.gui.operation_Trunks",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "SipTrunk List",
                    "panelType": "ListView",

                    gridOperations: [{
                        type: 'insert',
                        label: 'Create Sip Trunk',
                        operationId: 'WF_CreateSIPTrunk',
                        viewsObj: {
                            "viewID": "346",
                            "heading": "Create Sip Trunk",
                            "panelType": "InsertView",
                            "operationId": "WF_CreateSIPTrunk",
                            buttonLabel: "Create Sip Trunk",
                            "Params": [


                                { "ViewParamId": 54501, "name": "v_SIPTrunkName", "ctype": "textbox", "paramtype": "varchar", "label": "v_SIPTrunkName", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_SIPTrunkDescription", "ctype": "textarea", "paramtype": "varchar", "label": "v_SIPTrunkDescription", "direction": "in", "validator": "", "width": "*" },
                                {
                                    "ViewParamId": 54501, "name": "v_IsPostPaidSIPTrunk", "ctype": "select", "paramtype": "varchar", "label": "IsPostPaid",
                                    "options": [{ 'display': 'Yes', 'value': '1' },
                                    { 'display': 'No', 'value': '0' }], "direction": "in", "validator": "", "width": "*"
                                },
                                { "ViewParamId": 54501, "name": "v_TechPrefix", "ctype": "textbox", "paramtype": "varchar", "label": "v_TechPrefix", "direction": "in", "validator": "", "width": "*" },
                                {
                                    "ViewParamId": 54501, "name": "v_Suspended", "ctype": "select", "paramtype": "varchar", "label": "v_Suspended", "options": [{ 'display': 'Yes', 'value': '1' },
                                    { 'display': 'No', 'value': '0' }], "direction": "in", "validator": "", "width": "*"
                                },
                                { "ViewParamId": 54501, "name": "v_DIDNumber", "ctype": "textbox", "paramtype": "varchar", "label": "Master Number", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_IPPolicy", "ctype": "textbox", "paramtype": "varchar", "label": "Forwarding IP Policy", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_PrimaryIP", "ctype": "textbox", "paramtype": "varchar", "label": "v_PrimaryIP", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_ForwardingPort", "ctype": "textbox", "paramtype": "varchar", "label": "v_ForwardingPort", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_TotalNoOfChannels", "ctype": "textbox", "paramtype": "varchar", "label": "v_TotalNoOfChannels", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_IncomingChannels", "ctype": "textbox", "paramtype": "varchar", "label": "v_IncomingChannels", "direction": "in", "validator": "", "width": "*" },

                                { "ViewParamId": 54501, "name": "v_OutgoingChannels", "ctype": "textbox", "paramtype": "varchar", "label": "v_OutgoingChannels", "direction": "in", "validator": "", "width": "*" },

                                { "ViewParamId": 54501, "name": "v_MediaCodecGroupName", "ctype": "textbox", "paramtype": "varchar", "label": "v_MediaCodecGroupName", "direction": "in", "validator": "", "width": "*" }


                            ]
                        }
                    }],
                    "operationId": "LS_siptrunks",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100, 500, 1000, 2000, 3000, 4000, 5000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'SipTrunk.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [
                            {
                                "ViewColumnDefID": 36391,
                                "name": "v_SIPTrunkID",
                                "cellClass": "text-center",
                                "label": "v_SIPTrunkID",
                                "cellTemplate": "<div><a ng-href=\"#!/siptrunks/{{row.entity.v_SIPTrunkID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                // "cellTemplate": "<div><a ng-href=\"#!/siptrunks/{{row.entity.v_SIPTrunkName}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },


                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkName", "cellClass": "text-center", "label": "v_SIPTrunkID", "width": "*", enableCellEdit: false },
                            {
                                "ViewColumnDefID": 36391,
                                "name": "v_SIPTrunkName",
                                "cellClass": "text-center",
                                "label": "v_SIPTrunkID",
                                "cellTemplate": "<div><a ng-href=\"#!/siptrunks/{{row.entity.v_SIPTrunkID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },
                            { "ViewColumnDefID": 36388, "name": "v_Destination", "cellClass": "text-center", "label": "v_Destination", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ForwardingIPPolicy", "cellClass": "text-center", "label": "v_ForwardingIPPolicy", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkExtDialingGroupName", "cellClass": "text-center", "label": "v_SIPTrunkExtDialingGroupName", "width": "*", enableCellEdit: false }


                        ],
                    }
                }];

                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.operation_Trunks.gui",
        url: "Trunks",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
