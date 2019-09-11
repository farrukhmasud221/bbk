export const DevicesState = {
    states: [{
        name: "top.gui.mediation_devices",
         abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Devices",
                    "panelType": "ListView",
                    "operationId": "LS_devices",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 20,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            // { "ViewColumnDefID": 36384, "name": "v_DeviceIdentification", "label": "v_DeviceIdentification",  "width": "*", enableCellEdit: false },
                            { "name": "v_DeviceModel", "cellClass":"text-center","label": "v_DeviceModel", "cellTemplate": "<div><a ng-href=\"#!/DeviceDetail/{{row.entity.v_DeviceID}}\">{{grid.getCellValue(row, col)}}</a></div>",      "width": "*", enableCellEdit: false },
                            // { "name": "v_DeviceModelChangeCount", "label": "v_DeviceModelChangeCount", "width": "*", enableCellEdit: false },
                             { "name": "v_DevicePlatform","cellClass":"text-center", "label": "v_DevicePlatform", "width": "*", enableCellEdit: false },
                            // { "name": "v_DevicePlatformChangeCount", "label": "v_DevicePlatformChangeCount", "width": "*", enableCellEdit: false },
                            { "name": "v_DeviceVersion","cellClass":"text-center", "label": "v_DeviceVersion", "width": "*", enableCellEdit: false },
                            // { "name": "v_DeviceVersionChangeCount", "label": "v_DeviceVersionChangeCount", "width": "*", enableCellEdit: false },
                            { "name": "v_LastFailedVoucherAttempt","cellClass":"text-center", "label": "v_LastFailedVoucherAttempt", "width": "*", enableCellEdit: false },
                            // { "name": "v_LastIdentificationAttempt", "label": "v_LastIdentificationAttempt", "width": "*", enableCellEdit: false },
                            // { "name": "v_NoOfFailedVoucherRecharges", "label": "v_NoOfFailedVoucherRecharges", "width": "*", enableCellEdit: false },
                             { "name": "v_NoOfIdentificationAttempts","cellClass":"text-center", "label": "v_NoOfIdentificationAttempts", "width": "*", enableCellEdit: false },
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
                    //         buttonLabel: "Save Device",
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
                console.log("Devices"+JSON.stringify(viewsObj));
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_devices.gui",
        url: "Devices",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: false
    }]
};