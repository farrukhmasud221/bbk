export const mediationOperationLS_AccessIncomingBlockCallsState = {
    states: [{
        name: "top.gui.mediation_operation_LS_AccessIncomingBlockCalls",
        abstract: true,
        params: { reload: false }, 
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Access Incoming Block Calls",
                    "panelType": "ListView",
                    "operationId": "LS_accesssbcincblockcalls",
                     "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'BlockedCallClasses.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [
                             { "ViewColumnDefID": 36388, "name": "v_AccessSBCIncBlockCallID", "cellClass":"text-center","label": "v_AccessSBCIncBlockCallID", "width": "*", enableCellEdit: false },
                                { "ViewColumnDefID": 36388, "name": "v_AccessSBCIncBlockCallPrefix", "cellClass":"text-center","label": "v_AccessSBCIncBlockCallPrefix", "width": "*", enableCellEdit: false }
                           
                            
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
        name: "top.gui.mediation_operation_LS_AccessIncomingBlockCalls.gui",
        url: "SipResponseCodes",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true
    }]
};