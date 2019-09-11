export const mediationOperationLS_SipReturnCodeMappingsState = {
    states: [{
        name: "top.gui.mediation_operation_LS_SipReturnCodeMappings",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Sip Return Code Mappings",
                    "panelType": "ListView",
                    // "panelType": "InsertView",
                    // buttonLabel: "Add Payment",
                    // "operationId": "WF_AddPayment",
                    // "Params": [
                    //     { "ViewParamId": 72024, "name": "UserAuthName", "ctype": "label", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*","placeholder":"92456XXXXXX","required":"true" },
                    //     { "ViewParamId": 61575, "name": "CreditAmount", "ctype": "number", "max": "20", "paramtype": "varchar", "label": "Credit Amount", "direction": "in", "validator": "", "width": "auto","placeholder":"Credit Amount","required":"true" }
                    //     // { "ViewParamId": 71179, "name": "v_PublicIdentity", "ctype": "label", "paramtype": "varchar", "label": "v_PublicIdentity", "direction": "in", "validator": "", "width": "*" },

                    // ],
                    "operationId": "LS_sipreturncodemappings",
                    "gridOptions": {
                     enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'SipReturnCodeMappings.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [
                               { "ViewColumnDefID": 36388, "name": "v_AppReturnCode", "cellClass":"text-center","label": "v_AppReturnCode", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ErrorDescription", "cellClass":"text-center","label": "v_ErrorDescription", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPResponseCodeID", "cellClass":"text-center","label": "v_SIPResponseCodeID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_SIPReturnCodeMappingID", "cellClass":"text-center","label": "Description", "width": "*", enableCellEdit: false }
                           
                            
                        ],
                    }
                }];
            
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_LS_SipReturnCodeMappings.gui",
        url: "SipReturnCodeMappings",
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
