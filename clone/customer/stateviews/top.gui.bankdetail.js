export const BankDetailState = {
    states: [{
        name: "top.gui.bankdetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "3854",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_banks",
                    "updatePanel": [
                        "TX_updBankName"
                    ],
                    mappings: {
                            v_BankID: "v_BankID"
                    },
                    "nextState": {
                        "success": {
                            state: "top.gui.convergedbillingsystem_configuration_banks",
                            params: []
                        },
                        "failure": {
                            state: "",
                            params: []
                        }
                    },
                    "TX_updBankName":{
                        "heading": "Bank Detail",
                        "operationId": "TX_updBankName",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 73831, "name": "v_BankName", "ctype": "label", "paramtype": "string", "label": "Bank Name", "direction": "inout", "validator": "", "width": "*" }
                        ],
                        mappings: {
                                v_BankID: "v_BankID"
                        },
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }],
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`,
    },
    {
        name: "top.gui.bankdetail.gui",
        url: "BankDetail/:BankName",
        views: {
            "tabContent@top": { //gui.bankdetail": {
                component: "detailComponent"
            }
        }
    }]
}
