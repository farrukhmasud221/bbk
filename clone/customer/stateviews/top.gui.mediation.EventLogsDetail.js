export const EventLogsDetailState = {
    states: [{
        name: "top.gui.mediation_EventLogsDetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1229",
                    "heading": "Event Logs",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_privateidentitylogevents",
                    "mappings": {
                        "v_PrivateIdentityEventLogID": "LogDetail"
                    },
                    // "updatePanel": [
                    //     "TX_Updaccnopaypalpayments",
                    // ],
                    "Params":[
                        {"ViewParamId":57791, "name":"v_UserName", "ctype":"label", "paramtype":"varchar", "label":"v_UserName", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57774, "name":"v_LoggingEventMessage", "ctype":"label", "paramtype":"varchar", "label":"v_EventLogDetail", "direction":"out", "validator":"", "width":"auto"},
                    
                    ],
                    // "TX_Updaccnopaypalpayments":{
                    //     "viewID":"9786",
                    //     "heading":"Update Payment Detail",
                    //     "panelType": "UpdateableReadOnlyView",
                    //     "operationId": "TX_Updaccnopaypalpayments",
                    //     "Params":[
                    //         {"ViewParamId":78908, "name":"v_PaypalTXNID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalTXNID", "direction":"inout", "validator":"", "width":"auto"},
                    //         {"ViewParamId":79024, "name":"v_PaypalPayerID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPayerID", "direction":"inout", "validator":"", "width":"auto"}
                    //     ]
                    // }

                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.mediation_EventLogsDetail.gui",
        url: "EventLogsDetail/:LogDetail",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
