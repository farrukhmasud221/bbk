export const states = [{
    name: "top.gui.fileOperationsDashboard.gui.operation",
    params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                // "heading": "CRUD File Operations",
                "panelType": "ListView",
                "operationId": "GU_GetProvBatchTemplatesAll",
                gridOperations: [{
                    operationId: "TX_InsProvBatchtemplate",
                    label: "Add File Operation",
                    type: "insert",
                    viewsObj: {
                        "viewID": "3657",
                        "heading": "Add File Operation",
                        "panelType": "SectionInsertView",
                        buttonLabel: "Add",
                        "operationId": "TX_InsProvBatchtemplate",
                        "sections": [
                            {
                                id: 0,
                                heading: 'Please select target API first',
                                Params: [
                                    { name: 'v_ProvBatchTemplateName', label: 'Operation Name', ctype: 'textbox', "direction": "in", required: true },
                                    // { name: 'v_APIID', label: 'Select Target API', ctype: 'selectSearch', collapse: true, "options": [{ "display": "WF_blkPostClearningPayments", "value": "WF_blkPostClearningPayments" }, { "display": "WF_blkPreClearningCheques", "value": "WF_blkPreClearningCheques" }, { "display": "WF_blkReturnCheques", "value": "WF_blkReturnCheques" }], "direction": "in", required: true }
                                    { name: 'v_APIID', label: 'Select Target API', ctype: 'selectSearch', collapse: true, valueName: 'v_APIID', displayName: 'v_GlobalApiName', operationId: 'GU_GetBulkAPIsByPortal', "direction": "in", required: true }
                                ]
                            },

                            {
                                "heading": "Please put appropriate header values next to respective API parameters. Optionally Allow Bulk Overwrite at run-time and/or default values",
                                parentParam: "v_APIID",
                                notParentParamValue: true,
                                parentSection: 0,
                                hasDynamicParams: true,
                                nColumns: 3,
                                rowSignature: [{ name: '', label: '', ctype: 'text', direction: 'in', dynamicName: true, dynamicLabel: true }, { name: 'allowOverwrite', label: 'Bulk Overwrite', ctype: 'checkbox', direction: 'in', dynamicName: true, stripDynamic: true }, { name: 'defaultValue', label: 'Default Bulk Value', ctype: 'text', direction: 'in', dynamicName: true, stripDynamic: true }],
                                submitAs: 'v_ProvBatchTemplateMetaData',
                                Params: []
                            }
                        ],

                    }
                }],
                rowOperations: [
                    {
                        type: 'update',
                        label: "Edit",
                        operationId: 'v_ProvBatchTemplateName',
                        viewsObj: {
                            "viewID": "3657",
                            "heading": "Edit File Operation",
                            "panelType": "SectionInsertView",
                            buttonLabel: "Submit Changes",
                            "operationId": 'TX_UpdProvBatchtemplate',
                            "sections": [
                                {
                                    id: 0,
                                    heading: 'Please select target API first',
                                    Params: [
                                        { name: 'v_Template', label: 'Operation Name', ctype: 'textbox', "direction": "in", required: true },
                                        { name: 'v_APIID', label: 'Select Target API', ctype: 'selectSearch', collapse: true, valueName: 'v_APIID', displayName: 'v_GlobalApiName', operationId: 'GU_GetBulkAPIsByPortal', "direction": "in", required: true }
                                    ]
                                },

                                {
                                    "heading": "Please put appropriate header values next to respective API parameters. Optionally Allow Bulk Overwrite at run-time and/or default values",
                                    parentParam: "v_APIID",
                                    notParentParamValue: true,
                                    parentSection: 0,
                                    hasDynamicParams: true,
                                    nColumns: 3,
                                    rowSignature: [{ name: '', label: '', ctype: 'text', direction: 'in', dynamicName: true, dynamicLabel: true }, { name: 'allowOverwrite', label: 'Bulk Overwrite', ctype: 'checkbox', direction: 'in', dynamicName: true, stripDynamic: true }, { name: 'defaultValue', label: 'Default Bulk Value', ctype: 'text', direction: 'in', dynamicName: true, stripDynamic: true }],
                                    submitAs: 'v_ProvBatchTemplateMetaData',
                                    Params: []
                                }
                            ],

                        }
                    },
                    {
                        type: 'delete',
                        label: "Delete",
                        operationId: 'TX_DelProvBatchtemplate',
                        mappings: {
                            "v_ProvisioningBatchTemplateID": "v_ProvisioningBatchTemplateID"
                        }
                    }
                ],
                gridOptions: {
                    enableSorting: true,
                    paginationPageSizes: [10, 20, 50, 100],
                    paginationPageSize: 10,
                    data: null,
                    enableGridMenu: true,
                    enableRowHeaderSelection: false,
                    enableRowSelection: false,
                    enableScrollbars: true,
                    enableFiltering: true,
                    columnDefs: [
                        { name: 'v_ProvBatchTemplateName', width: '*', displayName: 'Operation Name' },
                        { name: 'v_GlobalApiName', width: '*', displayName: 'Target API' }]
                }
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsDashboard.gui.operation.gui",
    url: "/AddOperation",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
