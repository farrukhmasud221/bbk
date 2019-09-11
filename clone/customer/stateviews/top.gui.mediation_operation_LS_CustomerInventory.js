export const mediationOperationLS_CustomerInventoryState = {
    states: [{
        name: "top.gui.mediation_operation_LS_CustomerInventory",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Customer Inventory",
                    "panelType": "ListView",
                    // "panelType": "InsertView",
                    // buttonLabel: "Add Payment",
                    // "operationId": "WF_AddPayment",
                    // "Params": [
                    //     { "ViewParamId": 72024, "name": "UserAuthName", "ctype": "label", "paramtype": "varchar", "label": "Username", "direction": "inout", "validator": "", "width": "*","placeholder":"92456XXXXXX","required":"true" },
                    //     { "ViewParamId": 61575, "name": "CreditAmount", "ctype": "number", "max": "20", "paramtype": "varchar", "label": "Credit Amount", "direction": "in", "validator": "", "width": "auto","placeholder":"Credit Amount","required":"true" }
                    //     // { "ViewParamId": 71179, "name": "v_PublicIdentity", "ctype": "label", "paramtype": "varchar", "label": "v_PublicIdentity", "direction": "in", "validator": "", "width": "*" },

                    // ],
                    "operationId": "GU_CustomerInventory",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000,10000,15000,20000,30000,40000,50000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'CustomerInventory.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [
                               { "ViewColumnDefID": 36388, "name": "Customer", "cellClass":"text-center","label": "SIP Trunk Name", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "Number", "cellClass":"text-center","label": "Number/DID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "Channels", "cellClass":"text-center","label": "Channels", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "ForwardingIP", "cellClass":"text-center","label": "IP", "width": "*", enableCellEdit: false },
                             { "ViewColumnDefID": 36388, "name": "STATUS", "cellClass":"text-center","label": "Status", "width": "*", enableCellEdit: false },
                             { "ViewColumnDefID": 36388, "name": "v_SIPTrunkName", "cellClass":"text-center","label": "v_SIPTrunkName", "width": "*", enableCellEdit: false }
                           
                           
                            
                        ],
                    }
                }];
            
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_LS_CustomerInventory.gui",
        url: "CustomerInventory",
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
