export const privateidentityDashboardgetPrivateIdentityRegistrationStatusState = {
           
    states: [{
        name: "top.gui.mediation_privateidentitydashboard.gui.getPrivateIdentityRegistrationStatus",
        
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "WF_getPrivateIdentityRegistrationStatus",
                    "heading": "Login Info",
                    "mappings": {
                        "v_AccNoPrivateIdentityID": "AccNoPrivateIdentityID"
                    },
                    "panelType": "ReadOnlyView",
                    "Params": [
                        { "ViewParamId": 72024, "name": "contact", "ctype": "label", "paramtype": "varchar", "label": "contact", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "expires", "ctype": "label", "paramtype": "varchar", "label": "expires", "direction": "out", "validator": "", "width": "*" },
                        { "ViewParamId": 72024, "name": "result", "ctype": "label", "paramtype": "varchar", "label": "Status", "direction": "out", "validator": "", "width": "*" },
                        // { "ViewParamId": 72024, "name": "faultString", "ctype": "label", "paramtype": "varchar", "label": "faultString", "direction": "out", "validator": "", "width": "*" },
                        ]
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log("hello",viewsObj[0].Params[2].value);
                if(viewsObj[0].Params[2].value==="OK"){
                    viewsObj[0].Params[2].value ="Online";
                }
                else{
                     viewsObj[0].Params[2].value="Offline";
                    viewsObj[0].Params.shift();
                    viewsObj[0].Params.shift();
                }
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.getPrivateIdentityRegistrationStatus.gui",
        
        url: "/getPrivateIdentityRegistrationStatus",
        views: {
            "tabContent@top": { 
                component: "detailComponent"
            

            }
        }
    }]

};