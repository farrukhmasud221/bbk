export const siptrunkdashboardCLIRulesState = {
states: [{
        name: "top.gui.operation_siptrunkdashboard.gui.CLIRules",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "TX_UpdIncomingCLIRule",
                    "heading": "Cli Rules",
                    "mappings": {
                        "v_SIPTrunkID": "SIPTrunkID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "TX_UpdIncomingCLIRule", "TX_UpdOutgoingCLIRuleName"
                    ],

                    "TX_UpdIncomingCLIRule": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdIncomingCLIRule",
                        "buttonLabel": "update",
                        "heading": "Incomming Cli Rules",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            {
                                "ViewParamId": 72024,
                                "name": "v_IncomingCLIRuleName",
                                "ctype": "label",
                                "paramtype": "varchar",
                                "label": "v_IncomingCLIRuleName",
                                "direction": "inout",
                                "validator": "",
                                "width": "*"
                            },
                            {
                                "ViewParamId": 72024,
                                "name": "v_IncomingCLIRuleData1",
                                "ctype": "label",
                                "paramtype": "varchar",
                                "label": "v_IncomingCLIRuleData1",
                                "direction": "inout",
                                "validator": "",
                                "width": "*"
                            },

                        ]
                    },


                    "TX_UpdOutgoingCLIRuleName": {
                        "viewID": "3899",
                        "mappings": {
                            "v_SIPTrunkID": "SIPTrunkID"
                        },
                        "operationId": "TX_UpdIncomingCLIRule",
                        "buttonLabel": "update",
                        "heading": "Outgoing Cli Rules",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            {
                                "ViewParamId": 72024,
                                "name": "v_OutgoingCLIRuleName",
                                "ctype": "label",
                                "paramtype": "varchar",
                                "label": "v_OutgoingCLIRuleName",
                                "direction": "inout",
                                "validator": "",
                                "width": "*"
                            },
                            {
                                "ViewParamId": 72024,
                                "name": "v_OutgoingCLIRuleData1",
                                "ctype": "label",
                                "paramtype": "varchar",
                                "label": "v_OutgoingCLIRuleData1",
                                "direction": "inout",
                                "validator": "",
                                "width": "*"
                            },

                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.CLIRules.gui",
        url: "/CLIRules",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
