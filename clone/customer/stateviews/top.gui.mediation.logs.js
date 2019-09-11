export const LogsState = {
    states: [{
        name: "top.gui.mediation_logs",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Events Logs",
                    "panelType": "ListView",
                    "operationId": "LS_privateidentitylogevents",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10,20,50, 100,200, 500],
                        paginationPageSize: 50,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "name": "v_PrivateIdentity", "label": "UserName",  "cellClass":"text-center", "width": "*","width": "*","cellTemplate": "<div><a ng-href=\"#!/EventLogsDetail/{{row.entity.v_PrivateIdentityEventLogID}}\">{{grid.getCellValue(row, col)}}</a></div>", enableCellEdit: false },
                            { "name": "v_LoggingEventMessage", "label": "v_LoggingEventMessage", "width": "*", enableCellEdit: false },                            
                        ],
                    },
                    // "gridOperations": [{
                    //     operationId: "TX_Insdevice",
                    //     label: "Add Device",
                    //     type: "insert",
                    //     viewsObj: {
                    //         "viewID": "888",
                    //         "heading": "Add Device",
                    //         "mappings": {
                    //             "v_AccountID": "AccountID"
                    //         },
                    //         "panelType": "InsertView",
                    //         buttonLabel: "09Save Device",
                    //         "operationId": "TX_Insdevice",
                    //         "Params":[
                    //             {"ViewParamId":73336, "name":"v_DeviceIdentification", "ctype":"textbox", "paramtype":"varchar", "label":"v_DeviceIdentification", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":73337, "name":"v_DevicePlatform", "ctype":"label", "paramtype":"varchar", "label":"v_DevicePlatform", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":73338, "name":"v_DeviceModel", "ctype":"textbox", "paramtype":"varchar", "label":"v_DeviceModel", "direction":"in", "validator":"", "width":"auto"},
                    //             {"ViewParamId":73339, "name":"v_DeviceVersion", "ctype":"label", "paramtype":"varchar", "label":"v_DeviceVersion", "direction":"in", "validator":"", "width":"auto"}
                    //         ]
                    //     }
                    // }],
                }];
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_logs.gui",
        url: "provisioningDID",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: true
    }]
};