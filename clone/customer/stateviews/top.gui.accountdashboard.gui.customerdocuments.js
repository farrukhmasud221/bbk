export const states = [{
    name: "top.gui.accountdashboard.gui.customerdocuments",
    params: {
        reload: true
    },
    abstract: true,
    resolve: {
        viewsObj: ["metaDataService", "$stateParams", 'httpService', async function (metaDataService, $stateParams, httpService) {
            let viewsObj = [{
                "heading": "Customer Documents",
                "panelType": "ListView",
                "operationId": "TX_GetCustomerDocsByAccountID",
                "mappings": {
                    "v_AccountID": "AccountID"
                },
                gridOperations: [{
                    type: 'insert',
                    label: 'Upload Document',
                    operationId: 'WF_AddCustomerDocument',
                    viewsObj: {
                        "viewID": "3548",
                        "heading": "Upload Document",
                        "panelType": "InsertView",
                        "operationId": "WF_AddCustomerDocument",
                        buttonLabel: 'Upload',
                        mappings: {
                            "v_AccountID": "AccountID"
                        },
                        "Params": [
                            { "name": "v_DocumentTypeID", "ctype": "select", "label": "Document Type", "direction": "in", "operationId": "LS_CustomerDocumentTypes", "valueName": "v_DocumentTypeID", "displayName": "v_DocumentTypeName", "width": "auto", required: true },
                            { "name": "v_CustomerDocument", "ctype": "file", "label": "Select File", "direction": "in", fileTypes: '.png,.jpg,.jpeg,.pdf', required: true },
                            { "name": "v_Remarks", "ctype": "textarea", "label": "Remarks", "direction": "in" }
                        ]
                    },
                }],
                "gridOptions": {
                    enableSorting: true,
                    paginationPageSizes: [10, 20, 50, 100],
                    paginationPageSize: 10,
                    data: null,
                    enableScrollbars: true,
                    enableFiltering: true,
                    enableRowHeaderSelection: false,
                    "columnDefs": [
                        { name: 'v_CustomerDocumentID', width: '*', displayName: 'Document ID', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_DocumentTypeName', width: '*', displayName: 'Document Type', "cellClass": "text-center", enableCellEdit: false },
                        { name: 'v_FileName', width: '*', displayName: 'File Name', "cellClass": "text-center", enableCellEdit: false, cellTemplate: '<div><a href="' + httpService.getPath('WF_GetCustomerFileByDocumentID') + '?v_CustomerDocumentID={{row.entity.v_CustomerDocumentID}}" target="_blank">{{grid.getCellValue(row, col)}}</a></div>' }
                    ],
                    onRegisterApi: null
                }
            }];
            await metaDataService.resolve(viewsObj, $stateParams)
            return viewsObj;
        }]
    }
},
{
    name: "top.gui.accountdashboard.gui.customerdocuments.gui",
    url: "/CustomerDocuments",
    views: {
        "tabContent@top": {
            component: 'gridComponent'
        }
    }
}]
