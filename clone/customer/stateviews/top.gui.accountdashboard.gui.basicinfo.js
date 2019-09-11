export const accountDashboardBasicInfoState = {
    states: [{
        name: "top.gui.accountdashboard.gui.basicinfo",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9675",
                    "heading": "Basic Information",
                    "panelType": "ReadOnlyView",
                    "operationId": "GU_GetAccNoDashboardInfoADP",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "Params": [
                        { "ViewParamId": 73814, "name": "v_CurrentBalance", "ctype": "label", "paramtype": "decimal", "label": "CurrentBalance", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 73815, "name": "v_SubscriberStateName", "ctype": "label", "paramtype": "varchar", "label": "Status", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 73816, "name": "v_ServiceOfferingName", "ctype": "label", "paramtype": "varchar", "label": "ServiceOfferingName", "direction": "inout", "validator": "", "width": "*" },
                        { "ViewParamId": 73817, "name": "v_AccNoPBCExpiryDate", "ctype": "label", "paramtype": "datetime", "label": "PackageExpiryDate", "direction": "inout", "validator": "", "width": "*" },
                        // {
                        //     "ViewParamId": 73818,
                        //     "name": "v_TotalUnits",
                        //     "ctype": "label",
                        //     "paramtype": "varchar",
                        //     "label": "TotalUnits",
                        //     "direction": "inout",
                        //     "validator": "",
                        //     "width": "*"

                        // },
                        // { "ViewParamId": 73819, "name": "v_ConsumedUnits", "ctype": "label", "paramtype": "varchar", "label": "ConsumedUnits", "direction": "inout", "validator": "", "width": "*" },
                        // { "ViewParamId": 73820,"name": "v_RemainingUnits","ctype": "label","paramtype": "varchar","label": "RemainingUnits","direction": "inout","validator": "","width": "*"}
                    ]
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
        // deepStateRedirect: true,
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.basicinfo.gui",
        url: "/BasicInfo",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: "detailComponent"
            }
        }
    }
    ]

};