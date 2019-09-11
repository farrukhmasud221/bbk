export const accountDashboardPackageState = {
    states: [{
        name: "top.gui.accountdashboard.gui.package",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9673",
                    "heading": "Package",
                    "panelType": "ListView",
                    "rowOperations": [{
                        operationId: "TX_ProcessAccNoServiceOffering1",
                        "label": "Update Subscription",
                        bulk: false,
                        type: 'update',
                        showInDropDown: false,
                        viewsObj: {
                            "heading": "Update Package",
                            "panelType": "UpdateView",
                            "operationId": "TX_ProcessAccNoServiceOffering1",
                            "mappings": {  "v_AccNoServiceOfferingID": "v_AccNoServiceOfferingID"  },
                            "Params": [
                                { "ViewParamId": 71485, "name": "v_AccNoServiceOfferingID", "ctype": "label", "paramtype": "bigint", "label": "AccNoServiceOfferingID", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 73718, "name": "v_NextServiceOfferingID", "ctype": "select", "paramtype": "bigint", "label": "NextServiceOfferingID", "direction": "in", "validator": "", "width": "*", displayName: 'v_ServiceOfferingName', valueName: 'v_ServiceOfferingID', operationId: "LS_serviceofferings" },
                                // { "ViewParamId": 71486, "name": "v_AccNoPBCInstanceID", "ctype": "label", "paramtype": "bigint", "label": "AccNoPBCInstanceID", "direction": "in", "validator": "", "width": "*" },
                                // { "ViewParamId": 71488, "name": "v_BillCycleRunID", "ctype": "label", "paramtype": "bigint", "label": "BillCycleRunID", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 79893, "name": "v_OverrideCharges", "ctype": "label", "paramtype": "decimal", "label": "v_OverrideCharges", "direction": "in", "validator": "", "width": "*" },
                                { "ViewParamId": 71487, "name": "v_RenewTime", "ctype": "datetime", "paramtype": "datetime", "label": "RenewTime", "direction": "in", "validator": "", "width": "*" },
                            ]
                        }
                    },
                    // {
                    //     operationId: "TX_MrkActivSessionCoARequestTS",
                    //     "label": "Deactive Session",
                    //     "bulk": false,
                    //     "mappings": {
                    //         "v_SessionID": "v_SessionID"
                    //     },
                    //     type: "delete",
                    //     showInDropDown: false,
                    //     confirmation: true
                    // },
                    // {
                    //     operationId: "TX_MrkActivSessionCoARequestTS",
                    //     "label": "Hide Session",
                    //     "bulk": true,
                    //     "mappings": {
                    //         "v_SessionID": "v_SessionID"
                    //     },
                    //     type: "toggle",
                    //     showInDropDown: false,
                    // },
                    // {
                    //     operationId: "TX_MrkActivSessionCoARequestTS",
                    //     //"label": "Activate Session",
                    //     "bulk": true,
                    //     "mappings": {
                    //         "v_SessionID": "v_SessionID"
                    //     },
                    //     type: "delete",
                    //     showInDropDown: true,
                    // },
                    // {
                    //     operationId: "TX_MrkActivSessionCoARequestTS",
                    //     "label": "Hide Session",
                    //     "bulk": false,
                    //     "mappings": {
                    //         "v_SessionID": "v_SessionID"
                    //     },
                    //     type: "toggle",
                    //     showInDropDown: true,
                    // },
                    // {
                    //     operationId: "TX_MrkActivSessionCoARequestTS",
                    //     "label": "Hi Session",
                    //     "bulk": false,
                    //     "mappings": {
                    //         "v_SessionID": "v_SessionID"
                    //     },
                    //     type: "action",
                    //     showInDropDown: false,
                    // }
                    ],
                    "operationId": "accnoserviceofferingsADP_f10",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "gridOptions": {
                        enableSorting: true,
                        enableGridMenu: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 56758, "name": "v_AccNoServiceOfferingID", "displayName": "ID", "width": "*", "cellClass": "text-center", "headerCellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 56759, "name": "v_ServiceName", "displayName": "Service Name", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56761, "name": "v_ServiceOfferingName", "displayName": "Subscription", "width": "*", "cellClass": "text-center", enableCellEdit: true },
                            { "ViewColumnDefID": 57815, "displayName": "Expiry Date", "name": "v_AccNOPBCExpiryDate", "width": "*", "cellFilter": "date:\'dd-MMM-yyyy\'", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 57816, "displayName": "Username", "name": "UserName As v_UserName", "width": "*", enableCellEdit: false },
                        ],
                        onRegisterApi: null
                    }
                },
                {
                    "viewID": "9674",
                    "heading": "Package History",
                    "panelType": "ListView",
                    "operationId": "GU_accnoserviceoffrnghistADP",
                    mappings: {
                            "v_AccountID": "AccountID"
                    },
                    "gridOptions": {
                        enableGridMenu: true,
                        enableSorting: true, paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 56763, "name": "v_ServiceOfferingName", "label": "Subscription Name", "cellTemplate": "<div><a my-href=\"index.html#/tblserviceofferings?v_ServiceOfferingID={{row.entity.v_ServiceOfferingID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56791, "label": "OldServiceOfferingName", "name": "v_OldServiceOfferingName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56765, "label": "Date Assigned", "name": "v_DateAssigned", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56766, "label": "Expiry", "name": "v_EndDate", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56792, "label": "AccNoCounterInstanceID", "name": "v_AccNoCounterInstanceID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56768, "label": "Charges", "name": "v_TotalCharges", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56769, "label": "Total Units", "name": "v_TotalUnits", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56770, "label": "Comsumed Units", "name": "v_ConsumedUnits", "width": "*", enableCellEdit: false },
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
        name: "top.gui.accountdashboard.gui.package.gui",
        url: "/Package",
        views: {
            "tabContent@top": {
                component: 'gridComponent'
            }
        }
    }]
};