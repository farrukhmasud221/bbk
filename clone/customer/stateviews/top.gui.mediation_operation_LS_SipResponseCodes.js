export const mediationOperationLS_SipResponseCodesState = {
    states: [{
        name: "top.gui.mediation_operation_LS_SipResponseCodes",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Sip Response Codes",
                    "panelType": "ListView",
                    "operationId": "LS_sipresponsecodes",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            
                            { "ViewColumnDefID": 36396, "name": "v_SIPResponseCodeID","cellClass":"text-center", "label": "v_SIPResponseCodeID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36396, "name": "v_SIPResponseCodeDescription","cellClass":"text-center", "label": "v_SIPResponseCodeDescription", "width": "*", enableCellEdit: false }
                           
                           
                            
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
        name: "top.gui.mediation_operation_LS_SipResponseCodes.gui",
        url: "SipResponseCodes",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true
    }]
};