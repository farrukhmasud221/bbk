export const DepartmentDetailsState = {
    states: [{
        name: "top.gui.departmentdetails",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "3945",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_departments",
                    "updatePanel": [
                        "TX_UpdDepartmentName"
                    ],
                    mappings: {
                            v_DepartmentID: "DepartmentID"
                    },
                    "nextState": {
                        "success": {
                            state: "",
                            params: []
                        },
                        "failure": {
                            state: "",
                            params: []
                        }
                    },
                    "TX_UpdDepartmentName":{
                        "heading": "Department Details",
                        "operationId": "TX_UpdDepartmentName",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 73831, "name": "v_DepartmentName", "ctype": "label", "paramtype": "bigint", "label": "Department Name", "direction": "inout", "validator": "", "width": "*" }
                        ],
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }],
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`,
    },
    {
        name: "top.gui.departmentdetails.gui",
        url: "DepartmentDetails/:DepartmentID",
        views: {
            "tabContent@top": { //gui.departmentdetails": {
                component: "detailComponent"
            }
        }
    }]
}
