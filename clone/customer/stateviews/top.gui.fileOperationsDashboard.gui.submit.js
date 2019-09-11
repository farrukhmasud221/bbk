export const states = [{
    name: "top.gui.fileOperationsDashboard.gui.submit",
    params: { reload: true },
    abstract: true,
    resolve: {
        viewsObj: ['metaDataService', '$stateParams', 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = {
                // "heading": "Import File",
                "panelType": "bulk",
                "operationId": "GU_GetProvBatchTemplatesAll",
                "selectParam": {
                    label: "Select Operation",
                    ctype: 'selectSearch',
                    name: 'v_ProvisioningBatchTemplateID',
                    operationId: 'GU_GetProvBatchTemplatesAll',
                    displayName: 'v_ProvBatchTemplateName',
                    valueName: 'v_ProvisioningBatchTemplateID',
                    metaDataParam: 'v_ProvBatchTemplateMetaData',
                    apiParam: 'v_GlobalApiName',
                    templateID: 'v_ProvisioningBatchTemplateID',
                    apiID: "v_APIID",
                    options: [],
                },
                "fileParam": {
                    name: 'fileParam',
                    fileTypes: '.csv,.xlsx,.xls',
                    label: 'Please Select Excel File',
                    value: null
                },
                submitButtonLabel: 'Submit File'
            }
            await metaDataService.resolve(viewsObj, $stateParams);
            return viewsObj;
        }]
    },
},
{
    name: "top.gui.fileOperationsDashboard.gui.submit.gui",
    url: "/AddFile",
    views: {
        "tabContent@top": {
            component: 'bulkComponent'
        }
    }
}]
