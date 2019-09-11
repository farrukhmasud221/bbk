export const publicIdentityDashboardRandomStringApprovedState = {
    states: [{
        name: "top.gui.mediation_publicidentitydashboard.gui.randomstringapproved",
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
                    "Params": [
                        { "ViewParamId": 72024, "name": "v_RandomStringApproved", "ctype": "datetime", "paramtype": "varchar", "label": "v_RandomStringApproved", "direction": "inout", "validator": "", "width": "*" },
                    ],
                    "panelType": "ReadOnlyView",
                    
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.randomstringapproved.gui",
        url: "/RandomStringApproved",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};