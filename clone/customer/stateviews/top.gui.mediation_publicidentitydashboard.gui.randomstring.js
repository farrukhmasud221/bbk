export const publicIdentityDashboardRandomStringState = {
    states: [{
        name: "top.gui.mediation_publicidentitydashboard.gui.randomstring",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_publicidentities",
                    "mappings": {
                        "v_PublicIdentityID": "PublicIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "Params": [
                        { "ViewParamId": 72024, "name": "v_RandomString", "ctype": "label", "paramtype": "varchar", "label": "v_RandomString", "direction": "inout", "validator": "", "width": "*" },
                    ],
                    
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.randomstring.gui",
        url: "/RandomString",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};