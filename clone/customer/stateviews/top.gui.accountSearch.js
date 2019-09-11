export const accountSearchState = {
    states: [{
        name: "top.gui.searchSubscriberDashboard.gui.accountSearch",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", '$stateParams', async function (metaDataService, $stateParams) {
                let viewsObj = {
                    "viewID": "9453",
                    "heading": "",
                    "penalType": "SearchView",
                    "Params": [
                        { "ViewParamId": 71178, "name": "v_CustomerName", "ctype": "text", "paramtype": "varchar", "label": "Customer Name", "direction": "in", "validator": "", "width": "*", "placeholder": "Customer Name" },
                        { "ViewParamId": 71179, "name": "v_Email", "ctype": "email", "paramtype": "varchar", "label": "Email", "direction": "in", "validator": "", "width": "*", "placeholder": "Email" },
                        { "ViewParamId": 71183, "name": "v_MobileNumber", "ctype": "text", "paramtype": "varchar", "label": "Mobile Number", "direction": "in", "validator": "", "width": "*", "placeholder": "Mobile Number" },
                        { "ViewParamId": 71186, "name": "v_UserName", "ctype": "text", "paramtype": "varchar", "label": "User Name", "direction": "in", "validator": "", "width": "*", "placeholder": "User Name" },

                        { "ViewParamId": 71186, "name": "v_CountryID", "ctype": "select", "paramtype": "varchar", "label": "Country", "direction": "in", "validator": "", "width": "*", "options": optsArr, "defaultselected": "3", operationId: "states_f1", level: 0 },

                        { "ViewParamId": 71186, "name": "v_CountryStateID", "ctype": "select", "paramtype": "varchar", "label": "State", "direction": "in", "validator": "", "width": "*", "options": [], displayParam: "v_StateName", valueParam: "v_CountryStateID", operationId: "cities_f1", level: 1 },
                        { "ViewParamId": 71186, "name": "v_CityName", "ctype": "select", "paramtype": "varchar", "label": "City", "direction": "in", "validator": "", "width": "*", "options": [], "defaultselected": "3", displayParam: "v_CityName", valueParam: "v_CityID", level: 2 },

                        { "ViewParamId": 71186, "name": "v_UserType", "ctype": "radio", "paramtype": "varchar", "label": "User Type", "direction": "in", "validator": "", "width": "*", "options": [{ "display": "User", "value": "1" }, { "display": "Admin", "value": "2" }, { "display": "Super", "value": "3" }], "defaultselected": "2" },

                        { "ViewParamId": 71189, "name": "v_ID", "ctype": "label", "paramtype": "bigint", "label": "ID", "direction": "out", "validator": "", "width": "*" }
                    ]

                }
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.searchSubscriberDashboard.gui.accountSearch.gui",
        url: "/AccountSearch",
        views: {
            "tabContent@top": { //gui.searchSubscriberDashboard": {
                component: "formComponent"
            }
        }

    }
    ]

};