export const accountDashboardVASState = {
    states: [{
        name: "top.gui.accountdashboard.gui.vas",
        params: {
            reload: true
        },
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "7085",
                    "heading": "VAS",
                    "panelType": "ListView",
                    "operationId": "accnochargeheadlinerents_f1",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    gridOperations: [{
                        type: 'insert',
                        label: 'Create New VAS',
                        operationId: 'TX_InsAccNoChargeHeadLineRent',
                        viewsObj: {
                            "viewID": "3548",
                            "heading": "VAS",
                            "panelType": "InsertView",
                            "operationId": "TX_InsAccNoChargeHeadLineRent",
                            buttonLabel: 'Create',
                            mappings: {
                                    "v_AccountID": "AccountID"
                            },
                            "Params": [
                                { "ViewParamId": 60461, "name": "v_ChargeHeadID", "ctype": "select", "paramtype": "bigint", "label": "ChargeHead", "direction": "in", "validator": "", "operationId": "LS_chargeheads", "valueName": "v_ChargeHeadID", "displayName": "v_ChargeHeadName", "width": "auto" },
                                { "ViewParamId": 60462, "name": "v_ChargeQuantity", "ctype": "label", "paramtype": "bigint", "label": "ChargeQuantity", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 60463, "name": "v_SubscriptionID", "ctype": "textbox", "paramtype": "bigint", "label": "SubscriptionID", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 60464, "name": "v_ChargesPerBillingCycle", "ctype": "textbox", "paramtype": "decimal", "label": "ChargesPerBillingCycle", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 60465, "name": "v_BillingCyclePeriod", "ctype": "select", "paramtype": "ENUM", "label": "BillingCyclePeriod", "direction": "in", "validator": "", "options": [{ "display": "DAY", "value": "DAY" }, { "display": "WEEK", "value": "WEEK" }, { "display": "MONTH", "value": "MONTH" }, { "display": "QUARTER", "value": "QUARTER" }, { "display": "YEAR", "value": "YEAR" }], "width": "auto" },
                                { "ViewParamId": 60466, "name": "v_NumberofBillingCyclePeriods", "ctype": "label", "paramtype": "bigint", "label": "NumberofBillingCyclePeriods", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 60467, "name": "v_AccNoChargeHeadLineRentID", "ctype": "label", "paramtype": "bigint", "label": "AccNoChargeHeadLineRentID", "direction": "out", "validator": "", "width": "auto" }
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
                            // { "ViewColumnDefID": 38023, "label": "ID", "name": "v_AccNoChargeHeadLineRentID", "cellTemplate": "<div><a my-href=\"index.html#/tblaccnochargeheadlinerents?v_AccNoChargeHeadLineRentID={{row.entity.v_AccNoChargeHeadLineRentID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "15%", "cellClass": "text-center", enableCellEdit: false },
                            // { "ViewColumnDefID": 38024, "label": "AccountID", "name": "v_AccountID", "cellTemplate": "<div><a my-href=\"index.html#/tblaccounts?v_AccountID={{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38025, "label": "ChargeHeadName", "name": "v_ChargeHeadName", "cellTemplate": "<div><a my-href=\"index.html#/tblchargeheads?v_ChargeHeadID={{row.entity.v_ChargeHeadID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 38026, "label": "ChargeQuantity", "name": "v_ChargeQuantity", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            // { "ViewColumnDefID": 38027, "label": "SubscriptionID", "name": "v_SubscriptionID", "cellTemplate": "<div><a my-href=\"index.html#/tblsubscriptions?v_SubscriptionID={{row.entity.v_SubscriptionID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            // { "ViewColumnDefID": 38028, "label": "ChargeCount", "name": "v_ChargeCount", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            // { "ViewColumnDefID": 38029, "label": "MaxChargeCount", "name": "v_MaxChargeCount", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38030, "label": "ChargesPerBillingCycle", "name": "v_ChargesPerBillingCycle", "width": "auto", "cellFilter": "number:2", "cellClass": "text-right", enableCellEdit: false },
                            { "ViewColumnDefID": 38031, "label": "BillingCyclePeriod", "name": "v_BillingCyclePeriod", "width": "auto", "cellClass":"text-center" },
                            { "ViewColumnDefID": 38032, "label": "NumberofBillingCyclePeriods", "name": "v_NumberofBillingCyclePeriods", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38033, "label": "SubscriptionCharges", "name": "v_SubscriptionChargesSoFar", "cellFilter":"number:2", "cellClass":"text-right", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 38034, "label": "AccNoPBCExpiryDate", "name": "v_AccNoPBCExpiryDate", "width": "auto", enableCellEdit: false },
                            // { "ViewColumnDefID": 38035, "label": "AccNoPBCInstanceID", "name": "v_AccNoPBCInstanceID", "cellTemplate": "<div><a my-href=\"index.html#/tblaccnopbcinstances?v_AccNoPBCInstanceID={{row.entity.v_AccNoPBCInstanceID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38036, "label": "DateStarted", "name": "v_DateStarted", "width": "auto", "cellFilter":"date:\'dd-MMM-yyyy\'", "cellClass":"text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38037, "label": "DateEnd", "name": "v_DateEnd", "width": "auto", "cellFilter":"date:\'dd-MMM-yyyy\'", "cellClass":"text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 38038, "label": "TotalAmount", "name": "v_TotalAmountToBeCharged", "cellFilter":"number:2", "cellClass":"text-right", "width": "auto", enableCellEdit: false }
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
        name: "top.gui.accountdashboard.gui.vas.gui",
        url: "/VAS",
        views: {
            "tabContent@top": {
                component: 'gridComponent'
            }
        }
    }
    ]

};