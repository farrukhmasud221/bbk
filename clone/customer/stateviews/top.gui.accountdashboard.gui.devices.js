export const accountDashboardDevicesState = {
    states: [{
        name: "top.gui.accountdashboard.gui.devices",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9669",
                    "heading": "Logs",
                    "panelType": "ListView",
                    "operationId": "devices_f1",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                              // { "ViewColumnDefID": 36384, "name": "v_DeviceIdentification", "label": "v_DeviceIdentification",  "width": "*", enableCellEdit: false },
                              { "name": "v_DeviceModel", "label": "v_DeviceModel", "cellTemplate": "<div><a ng-href=\"#!/DeviceDetail/{{row.entity.v_DeviceID}}\">{{grid.getCellValue(row, col)}}</a></div>", "cellClass":"text-center", "width": "*", enableCellEdit: false },
                              // { "name": "v_DeviceModelChangeCount", "label": "v_DeviceModelChangeCount", "width": "*", enableCellEdit: false },
                               { "name": "v_DevicePlatform","cellClass":"text-center", "label": "v_DevicePlatform", "width": "*", enableCellEdit: false },
                              // { "name": "v_DevicePlatformChangeCount", "label": "v_DevicePlatformChangeCount", "width": "*", enableCellEdit: false },
                              { "name": "v_DeviceVersion", "cellClass":"text-center","label": "v_DeviceVersion", "width": "*", enableCellEdit: false },
                              // { "name": "v_DeviceVersionChangeCount", "label": "v_DeviceVersionChangeCount", "width": "*", enableCellEdit: false },
                              { "name": "v_LastFailedVoucherAttempt","cellClass":"text-center", "label": "v_LastFailedVoucherAttempt", "width": "*", enableCellEdit: false },
                              // { "name": "v_LastIdentificationAttempt", "label": "v_LastIdentificationAttempt", "width": "*", enableCellEdit: false },
                              // { "name": "v_NoOfFailedVoucherRecharges", "label": "v_NoOfFailedVoucherRecharges", "width": "*", enableCellEdit: false },
                               { "name": "v_NoOfIdentificationAttempts","cellClass":"text-center", "label": "v_NoOfIdentificationAttempts", "width": "*", enableCellEdit: false },
                         ],
                        onRegisterApi: null
                    },
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.devices.gui",
        url: "/Devices",
        views: {
            "tabContent@top": {
                component: 'gridComponent'
            }
        }
    }]
}