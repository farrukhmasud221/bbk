export const bankAccountDetailState = {
    states: [{
        name: "top.gui.bankaccountdetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "3854",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_abmfbankaccounts",
                    "updatePanel": [
                        "TX_UpdABMFBankAccountNumber"
                    ],
                    mappings: {
                            v_ABMFBankAccountID: "ABMFBankAccountID"
                    },
                    "TX_UpdABMFBankAccountNumber":{
                        "heading": "Bank Account Detail",
                        "operationId": "TX_UpdABMFBankAccountNumber",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 73831, "name": "v_BankID", "ctype": "select", "paramtype": "string", "label": "v_BankName", "direction": "in", operationId: "LS_banks", displayName: "v_BankName", valueName: "v_BankID", "validator": "", "width": "*" },
                            { "ViewParamId": 73831, "name": "v_BankName", "ctype": "label", "paramtype": "string", "label": "Bank Name", "direction": "out", "validator": "", "width": "*" },
                            { "ViewParamId": 73831, "name": "v_ABMFBankAccountNumber", "ctype": "label", "paramtype": "string", "label": "BankAccountNumber", "direction": "inout", "validator": "", "width": "*" }
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }],
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`,
    },
    {
        name: "top.gui.bankaccountdetail.gui",
        url: "BankAccountDetail/:ABMFBankAccountID",
        views: {
            "tabContent@top": { //gui.bankdetail": {
                component: "detailComponent"
            }
        }
    }]
}
