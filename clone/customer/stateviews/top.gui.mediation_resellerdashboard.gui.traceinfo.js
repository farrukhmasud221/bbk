export const resellerdashboardTraceInfoState = {
    states: [{
        name: "top.gui.mediation_resellerdashboard.gui.traceinfo",
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
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
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
                viewsObj[0].WF_Updprivateidlogrequest.Params[1].value+"SEc";
               console.log(viewsObj[0].WF_Updprivateidlogrequest.Params[1].value+"SEc");

                
                        // var obj={
                        // "ctype":"number",
                        // "direction":"inout",
                        // "label":"v_TraceLevel",
                        // "max":"5",
                        // "min":"1",
                        // "name":"v_TraceLevel",
                        // "paramtype":"bigint",
                        // "validator":"",
                        // "value":"3"
                        // }

                       // viewsObj[0].WF_Updprivateidlogrequest.Params.pop();
                        //  info.forEach(element => {
                        //      console.log(element);
                        // //     // var _codec ={
                        // //     //     "ctype":"number",
                        // //     //     "direction":"inout",
                        // //     //     "label":"v_TraceLevel",
                        // //     //     "max":"5",
                        // //     //     "min":"1",
                        // //     //     "name":"v_TraceLevel",
                        // //     //     "paramtype":"bigint",
                        // //     //     "validator":"",
                        // //     //     "value":"3"
                        // //     //     }
                        //  });
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.traceinfo.gui",
        url: "/TraceInfo",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]
};