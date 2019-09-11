export const LogDetailState = {
    states: [{
        name: "top.gui.mediation_logdetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1229",
                    "heading": "Log Detail",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_privateidentitydebuglogs",
                    "mappings": {
                        "v_PrivateIdentityDebugLogID": "PrivateIdentityDebugLogID"
                    },
                    "Params":[
                        {"ViewParamId":57791, "name":"v_DebugLogs", "ctype":"label", "paramtype":"varchar", "label":"v_DebugLogs", "direction":"out", "validator":"", "width":"auto"},
                    ],
                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.mediation_logdetail.gui",
        url: "LogDetail/:PrivateIdentityDebugLogID",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
