export const accountDashboardServiceIdentificationState = {
    states: [{
        name: "top.gui.accountdashboard.gui.serviceidentification",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1594",
                    "heading": "Service Group User Names",
                    "panelType": "ListView",
                    "operationId": "accnoservicegroupusernames_f1",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "gridOperations": [{
                        operationId: "TX_InsertAccNoSGUserName",
                        label: "Add Service Group User Name",
                        type: "insert",
                        viewsObj: {
                            "viewID": "129",
                            "heading": "Service Group User Name",
                            "operationId": "TX_InsertAccNoSGUserName",
                            "mappings": {
                                    "v_AccountID": "AccountID"
                            },
                            buttonLabel: "Add",
                            "panelType": "InsertView",
                            "Params": [
                                { "ViewParamId": 53239, "name": "v_ServiceGroupID", "ctype": "select", "paramtype": "bigint", "label": "ServiceGroup", "direction": "in", "validator": "", "operationId": "LS_servicegroups", valueName: "v_ServiceGroupID", displayName: "v_ServiceGroupName", "width": "*" },
                                { "ViewParamId": 53240, "name": "v_UserName", "ctype": "label", "paramtype": "varchar", "label": "UserName", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 53241, "name": "v_Password", "ctype": "label", "paramtype": "varbinary", "label": "Password", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 53242, "name": "v_AccNoServiceGroupUserNameID", "ctype": "label", "paramtype": "bigint", "label": "AccNoServiceGroupUserNameID", "direction": "out", "validator": "", "width": "*" }
                            ]
                        }
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
                            { "ViewColumnDefID": 38902, "name": "v_AccNoServiceGroupUserNameID", "displayName": "ID", "cellTemplate": "<div><a my-href=\"index.html#/tblaccnoservicegroupusernames?v_AccNoServiceGroupUserNameID={{row.entity.v_AccNoServiceGroupUserNameID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38903, "name": "v_AccountID", "label": "AccountID", "cellTemplate": "<div><a my-href=\"index.html#/tblaccounts?v_AccountID={{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38904, "name": "v_AccNoServiceOfferingID", "label": "AccNoServiceOfferingID", "cellTemplate": "<div><a my-href=\"index.html#/tblaccnoserviceofferings?v_AccNoServiceOfferingID={{row.entity.v_AccNoServiceOfferingID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38905, "name": "v_ServiceGroupName", "label": "ServiceGroupName", "cellTemplate": "<div><a my-href=\"index.html#/tblservicegroups?v_ServiceGroupID={{row.entity.v_ServiceGroupID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38906, "name": "v_ServiceName", "label": "ServiceName", "cellTemplate": "<div><a my-href=\"index.html#/tblservices?v_ServiceID={{row.entity.v_ServiceID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38907, "name": "v_CPEID", "label": "CPEID", "cellTemplate": "<div><a my-href=\"index.html#/tblcpes?v_CPEID={{row.entity.v_CPEID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38908, "name": "v_HuntGroupID", "label": "HuntGroupID", "cellTemplate": "<div><a my-href=\"index.html#/tblhuntgroups?v_HuntGroupID={{row.entity.v_HuntGroupID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38909, "label": "CPEPortNumber", "name": "v_CPEPortNumber", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38910, "label": "UserName", "name": "v_UserName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38912, "label": "OutboundProxy", "name": "v_OutboundProxy", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38913, "label": "AllowedConcurrentSessions", "name": "v_AllowedConcurrentSessions", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38914, "name": "v_PBXHuntGroupID", "label": "PBXHuntGroupID", "cellTemplate": "<div><a my-href=\"index.html#/tblpbxhuntgroups?v_PBXHuntGroupID={{row.entity.v_PBXHuntGroupID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 38915, "name": "v_ACDQueueID", "label": "ACDQueueID", "cellTemplate": "<div><a my-href=\"index.html#/tblacdqueues?v_ACDQueueID={{row.entity.v_ACDQueueID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38916, "label": "AccNoSOSGUserNameRateMltplir", "name": "v_AccNoSOSGUserNameRateMltplir", "width": "*", "cellClass": "text-right", enableCellEdit: false },
                            { "ViewColumnDefID": 38917, "label": "RateMultiplierResetDateTime", "name": "v_RateMultiplierResetDateTime", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.serviceidentification.gui",
        url: "/ServiceIdentification",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        }
    }]
}