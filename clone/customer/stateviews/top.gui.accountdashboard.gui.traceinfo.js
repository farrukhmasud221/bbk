export const privateIdentityDashboardTraceInfoState = {
    states: [{
        name: "top.gui.accountdashboard.gui.traceinfo",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_accnoprivateidentities",
                    "heading": "BasicInformation",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "updatePanel": [
                        "WF_Updprivateidlogrequest"
                    ],
                    "WF_Updprivateidlogrequest":{
                        "viewID":"3899",
                        "heading": "Update Log Request",
                        "operationId": "WF_Updprivateidlogrequest",
                        "panelType": "UpdateableReadOnlyView",
                        "Params":[
                            {"ViewParamId":61574, "name":"v_TraceLevel", "ctype":"number", "min":1, "max":"5", "paramtype":"bigint", "label":"v_TraceLevel", "direction":"inout","validator":"", "width":"auto"},
                            {"ViewParamId":61575, "name":"v_LogDuration", "ctype":"number", "min":1, "paramtype":"bigint", "label":"v_LogDuration", "direction":"inout", "validator":"", "width":"auto"}
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);

                console.log("asd");
                // console.log("asda",viewsObj[0].data.v_LogDuration);



                // console.log(viewsObj);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.accountdashboard.gui.traceinfo.gui",
        url: "/TraceInfo",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};