export const resellerdashboardgetPaymentsList = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.getPaymentsList",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [
                    {
                    "viewID": "9672",
                    "heading": "Payments",
                    "panelType": "ListView",
                    "operationId": "WF_getPaymentsList",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                           { "ViewColumnDefID": 56747, "displayName": "Date","cellClass":"text-center", "name": "Date", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56748, "displayName": "Amount", "cellClass":"text-center","name": "Amount", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56749, "displayName": "Voucher","cellClass":"text-center", "name": "ByVoucher", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56750, "displayName": "Credit Debit Card","cellClass":"text-center", "name": "ByDebitCreditCard", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    },
                    // "gridOperations": [{
                    //     operationId: "WF_PaymentByVoucher",
                    //     label: "Add Payment",
                    //     type: "insert",
                    //     viewsObj: {
                    //         "viewID": "888",
                    //         "heading": "Add payment",
                    //         "mappings": {
                    //             "v_AccountID": "AccountID"
                    //         },
                    //         "panelType": "InsertView",
                    //         buttonLabel: "Add Payment",
                    //         "operationId": "WF_PaymentByVoucher",
                    //         "Params":[
                    //             {"ViewParamId":61575, "name":"v_AccNoprivateIdentityID", "ctype":"number", "paramtype":"bigint", "label":"v_AccNoprivateIdentityID", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":61575, "name":"v_VoucherID", "ctype":"number", "paramtype":"bigint", "label":"v_VoucherID", "direction":"in", "validator":"", "width":"auto"}
                    //     ]
                    //     }
                    // }],
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.getPaymentsList.gui",
        url: "/getPaymentsList",
        views: {
            "tabContent@top": { //gui.aaa_administration_aaadashboard": {
                component: 'gridComponent'
            }
        }
    }]
};
