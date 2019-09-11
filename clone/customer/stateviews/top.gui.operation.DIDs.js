

export const Operation_DIDsState = {
    states: [{
        name: "top.gui.operation_DIDs",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "DIDS",
                    "panelType": "ListView",

                    gridOperations: [{
                        type: 'insert',
                        label: 'Add',
                        operationId: 'TX_InsertBulkDIDs2',
                        viewsObj: {
                            "viewID": "346",
                            "heading": "DIDs",
                            "panelType": "InsertView",
                            "operationId": "TX_InsertBulkDIDs2",
                            buttonLabel: "Add",
                            "Params": [


                                // { "ViewParamId": 54501, "name": "v_SIPTrunkName", "ctype": "textbox", "paramtype": "varchar", "label": "v_SIPTrunkName", "direction": "in", "validator": "", "width": "*" },
                                // { "ViewParamId": 54501, "name": "v_SIPTrunkDescription", "ctype": "textarea", "paramtype": "varchar", "label": "v_SIPTrunkDescription", "direction": "in", "validator": "", "width": "*" },
                                // {
                                //     "ViewParamId": 54501, "name": "v_IsPostPaidSIPTrunk", "ctype": "select", "paramtype": "varchar", "label": "IsPostPaid",
                                //     "options": [{ 'display': 'Yes', 'value': '1' },
                                //     { 'display': 'No', 'value': '0' }], "direction": "in", "validator": "", "width": "*"
                                // },
                                // { "ViewParamId": 54501, "name": "v_TechPrefix", "ctype": "textbox", "paramtype": "varchar", "label": "v_TechPrefix", "direction": "in", "validator": "", "width": "*" },
                                //   {
                                //     "ViewParamId": 54501, "name": "v_DIDNumber", "ctype": "select", "paramtype": "varchar", "label": "v_DIDNumber", "options": [{ 'display': 'Yes', 'value': '1' },
                                //     { 'display': 'No', 'value': '0' }], "direction": "in", "validator": "", "width": "*"
                                // },
                                { "ViewParamId": 54501, "name": "v_DIDNumber", "ctype": "textbox", "paramtype": "varchar", "label": "v_DIDNumber", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 54501, "name": "v_DIDType", "ctype": "select", "paramtype": "varchar", "label": "v_DIDType", "options": [{ 'display': 'Standard', 'value': '' },
                                    { 'display': 'RegistrationBase', 'value': '' }], "direction": "in", "validator": "", "width": "*"},
                                { "ViewParamId": 54501, "name": "v_ServiceID", "ctype": "select", "paramtype": "varchar", "label": "v_ServiceID", "options": [{ 'display': 'Default Service', 'value': 'Default Service' },
                                { 'display': 'SipTrunking', 'value': 'SipTrunking' }],"direction": "in", "validator": "", "width": "*" },
                                {"ViewParamId":57641, "name":"v_SIPTrunkName", "ctype":"select", "paramtype":"bigint", "label":"v_SIPTrunkName", "direction":"in", "validator":"", operationId: "LS_siptrunks", valueName: "v_SIPTrunkName", displayName: "v_SIPTrunkName", "width":"auto"},

//{ "ViewParamId": 54501, "name": "v_DIDProviderTrunkID", "ctype": "select", "paramtype": "varchar", "label": "v_DIDProviderTrunkID", "direction": "in", "options": [{ 'display': 'ST Trunk', 'value': '1' }, "direction": "in", "validator": "", "width": "*" "validator": "", "width": "*" },
                               
                                {
                                    "ViewParamId": 54501, "name": "v_DIDProviderTrunkID", "ctype": "select", "paramtype": "varchar", "label": "v_DIDProviderTrunkID", "options": [{ 'display': 'ST Trunk', 'value': 'ST Trunk' }
                                    ], "direction": "in", "validator": "", "width": "*"
                                },


                             //   { "ViewParamId": 54501, "name": "v_MediaCodecGroupName", "ctype": "textbox", "paramtype": "varchar", "label": "v_MediaCodecGroupName", "options": [{ 'display': 'ST Trunk', 'value': '1' }, "direction": "in", "validator": "", "width": "*" }


                            ]
                        }
                    }],
                    "operationId": "LS_getDIDs",
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
                                "name": "v_DIDID",
                                "cellClass": "text-center",
                                "label": "v_DIDID",
                                "cellTemplate": "<div><a ng-href=\"#!/tbldids/{{row.entity.v_DIDID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                // "cellTemplate": "<div><a ng-href=\"#!/siptrunks/{{row.entity.v_SIPTrunkName}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },


                            //{ "ViewColumnDefID": 36388, "name": "v_SIPTrunkName", "cellClass": "text-center", "label": "v_SIPTrunkID", "width": "*", enableCellEdit: false },
                            // {
                            //     "ViewColumnDefID": 36391,
                            //     "name": "v_SIPTrunkName",
                            //     "cellClass": "text-center",
                            //     "label": "v_SIPTrunkID",
                            //     "cellTemplate": "<div><a ng-href=\"#!/tbldids/{{row.entity.v_SIPTrunkID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                            //     "width": "auto",
                            //     enableCellEdit: false
                            // },
                            { "ViewColumnDefID": 36388, "name": "v_DIDID", "cellClass": "text-center", "label": "v_DIDID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DIDNumber", "cellClass": "text-center", "label": "v_DIDNumber", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPTrv_PopNameunkExtDialingGroupName", "cellClass": "text-center", "label": "v_PopName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_DIDType", "cellClass": "text-center", "label": "v_DIDType", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkName", "cellClass": "text-center", "label": "v_SIPTrunkName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkExtDialingGroupName", "cellClass": "text-center", "label": "v_SIPTrunkExtDialingGroupName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkDialingExtension", "cellClass": "text-center", "label": "v_SIPTrunkDialingExtension", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ServiceName", "cellClass": "text-center", "label": "v_ServiceName", "width": "*", enableCellEdit: false },
                           
                        ],
                    }
                }];

                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.operation_DIDs.gui",
        url: "DIDs",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
