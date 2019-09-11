

export const siptrunkdashboardpopnameState = {
    states: [{
        name: "top.gui.operation_siptrunkdashboard.gui.popname",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "DID POP Name",
                    "panelType": "ListView",

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


                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkName", "cellClass": "text-center", "label": "v_SIPTrunkID", "width": "*", enableCellEdit: false },
                            {
                                "ViewColumnDefID": 36391,
                                "name": "v_SIPTrunkName",
                                "cellClass": "text-center",
                                "label": "v_SIPTrunkID",
                                "cellTemplate": "<div><a ng-href=\"#!/tbldids/{{row.entity.v_SIPTrunkID}}\">{{grid.getCellValue(row, col)}}</a></div>",
                                "width": "auto",
                                enableCellEdit: false
                            },
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
        name: "top.gui.operation_siptrunkdashboard.gui.popname.gui",
        url: "/popname",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
