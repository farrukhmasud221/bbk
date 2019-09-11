export const mediationOperationLS_CallClassesState = {
    states: [{
        name: "top.gui.mediation_operation_LS_CallClasses",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Call Classes List",
                    "panelType": "ListView",
                    "operationId": "LS_sbccallclasses",
                        "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'CallClasses.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
                        enableRowSelection: true,
                        multiSelect: true, 
                        "columnDefs": [
                             { "ViewColumnDefID": 36388, "name": "v_SBCCallClassID", "cellClass":"text-center","label": "v_SBCCallClassID", "width": "*", enableCellEdit: false },
                                { "ViewColumnDefID": 36388, "name": "v_SBCCallClassName", "cellClass":"text-center","label": "v_SBCCallClassName", "width": "*", enableCellEdit: false }
                           
                            
                        ],
                    }
                }];
            
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_LS_CallClasses.gui",
        url: "CallClasses",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
            // "tabContent@top": {
            //     component: "formComponent"
            // },

        },
        deepStateRedirect: true
    }]
};
