export const mediationOperationLS_EmergencyNumbersState = {
    states: [{
        name: "top.gui.mediation_operation_LS_EmergencyNumbers",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Emergency Numbers",
                    "panelType": "ListView",
                    "operationId": "LS_emergencynumbers",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 36396, "name": "v_ID","cellClass":"text-center", "label": "v_ID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_CalledNumber","cellClass":"text-center", "label": "v_CalledNumber","cellTemplate": "<div><a ng-href=\"#!/UnvarifiedDetail/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_DestName","cellClass":"text-center", "label": "v_DestName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_FirstPriorityRouteURI","cellClass":"text-center", "label": "v_FirstPriorityRouteURI", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_SecondPriorityRouteURI","cellClass":"text-center", "label": "v_SecondPriorityRouteURI", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_ThirdPriorityRouteURI","cellClass":"text-center", "label": "v_ThirdPriorityRouteURI", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_WellformedNumber","cellClass":"text-center", "label": "v_WellformedNumber", "width": "*", enableCellEdit: false },
                           
                           
                            
                        ],
                    }
                }];
            
                await metaDataService.resolve(viewsObj, $stateParams)
                console.log("hey"+JSON.stringify(viewsObj));
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_LS_EmergencyNumbers.gui",
        url: "EmergencyNumbers",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true
    }]
};