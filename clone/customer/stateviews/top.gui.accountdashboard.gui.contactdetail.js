export const accountDashboardContactDetailState = {
    states: [{
        name: "top.gui.accountdashboard.gui.contactdetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "176",
                    "panelType": "ReadOnlyView",
                    
                    "updatePanel": ["TX_UpdateAccNoContactInfo"],
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "operationId": "UI_accounts",
                    "TX_UpdateAccNoContactInfo": {
                        "operationId": "TX_UpdateAccNoContactInfo",
                        "panelType": "UpdateableReadOnlyView",
                        "heading":"Contact Detail",
                        "Params": [
                            { "ViewParamId": 71580, "name": "v_Email", "ctype": "label", "paramtype": "varchar", "label": "Email", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71581, "name": "v_CustomerName", "ctype": "label", "paramtype": "varchar", "label": "CustomerName", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71582, "name": "v_Address", "ctype": "label", "paramtype": "varchar", "label": "Address", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71583, "name": "v_City", "ctype": "label", "paramtype": "varchar", "label": "City", "direction": "out", "validator": "", "width": "*" },
                            // { "ViewParamId": 73064, "name": "v_CountryStateID", "ctype": "select", "paramtype": "varchar", "label": "State", displayName: 'v_StateName', valueName: 'v_CountryStateID', operationId: "LS_countrystates", "direction": "inout", "validator": "", "width": "*", parent: null /*,  initValue: 11,  targetParam: "v_CountryStateID", targetName: "v_CountryStateID", */ },
                            // { "ViewParamId": 73063, "name": "v_CityID", "ctype": "select", "paramtype": "varchar", "label": "City", displayName: 'v_CityName', valueName: 'v_CityID', operationId: "cities_f1", "direction": "inout", "validator": "", "width": "*", parent: "v_CountryStateID", mappings: { "v_CountryStateID": "v_CountryStateID" }, options: null, /* initDisplay: "Lahore" */ },
                            { "ViewParamId": 71584, "name": "v_State", "ctype": "label", "paramtype": "varchar", "label": "State", "direction": "out", "validator": "", "width": "*" },
                            // { "ViewParamId": 71585, "name": "v_Country", "ctype": "label", "paramtype": "varchar", "label": "Country", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71586, "name": "v_Tel", "ctype": "label", "paramtype": "varchar", "label": "Tel", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71587, "name": "v_MobileNumber", "ctype": "label", "paramtype": "varchar", "label": "MobileNumber", "direction": "inout", "validator": "", "width": "*" },
                            // { "ViewParamId": 71588, "name": "v_Fax", "ctype": "label", "paramtype": "varchar", "label": "Fax", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71589, "name": "v_PostalCode", "ctype": "label", "paramtype": "varchar", "label": "PostalCode", "direction": "inout", "validator": "", "width": "*" },
                            { "ViewParamId": 71590, "name": "v_Company", "ctype": "label", "paramtype": "varchar", "label": "Company", "direction": "inout", "validator": "", "width": "*" }
                        ]
                    }

                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // deepStateRedirect: true,
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.contactdetail.gui",
        url: "/ContactDetail",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: "detailComponent"

            }
        },
    }]

};