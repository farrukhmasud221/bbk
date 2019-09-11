export const DeviceDetailState = {
    states: [{
        name: "top.gui.mediation_devicedetail",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1229",
                    "heading": "Device Detail",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_devices",
                    "mappings": {
                        "v_DeviceID": "DeviceID"
                    },
                    // "updatePanel": [
                    //     "TX_Updaccnopaypalpayments",
                    // ],
                    "Params":[
                        {"ViewParamId":57791, "name":"v_DeviceIdentification", "ctype":"label", "paramtype":"varchar", "label":"v_DeviceIdentification", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57773, "name":"v_DevicePlatform", "ctype":"label", "paramtype":"varchar", "label":"v_DevicePlatform", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57774, "name":"v_DeviceModel", "ctype":"label", "paramtype":"varchar", "label":"v_DeviceModel", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57775, "name":"v_DeviceVersion", "ctype":"label", "paramtype":"varchar", "label":"v_DeviceVersion", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":79851, "name":"v_NoOfIdentificationAttempts", "ctype":"label", "paramtype":"bigint", "label":"v_NoOfIdentificationAttempts", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57789, "name":"v_LastIdentificationAttempt", "ctype":"label", "paramtype":"varchar", "label":"v_LastIdentificationAttempt", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57790, "name":"v_NoOfFailedVoucherRecharges", "ctype":"label", "paramtype":"varchar", "label":"v_NoOfFailedVoucherRecharges", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":79016, "name":"v_LastFailedVoucherAttempt", "ctype":"label", "paramtype":"varchar", "label":"v_LastFailedVoucherAttempt", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57789, "name":"v_DevicePlatformChangeCount", "ctype":"label", "paramtype":"varchar", "label":"v_DevicePlatformChangeCount", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":57790, "name":"v_DeviceModelChangeCount", "ctype":"label", "paramtype":"varchar", "label":"v_DeviceModelChangeCount", "direction":"out", "validator":"", "width":"auto"},
                        {"ViewParamId":79016, "name":"v_DeviceVersionChangeCount", "ctype":"label", "paramtype":"varchar", "label":"v_DeviceVersionChangeCount", "direction":"out", "validator":"", "width":"auto"},
                    ],
                    
                    // "TX_Updaccnopaypalpayments":{
                    //     "viewID":"9786",
                    //     "heading":"Update Payment Detail",
                    //     "panelType": "UpdateableReadOnlyView",
                    //     "operationId": "TX_Updaccnopaypalpayments",
                    //     "Params":[
                    //         {"ViewParamId":78908, "name":"v_PaypalTXNID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalTXNID", "direction":"inout", "validator":"", "width":"auto"},
                    //         {"ViewParamId":79024, "name":"v_PaypalPayerID", "ctype":"label", "paramtype":"varchar", "label":"v_PaypalPayerID", "direction":"inout", "validator":"", "width":"auto"}
                    //     ]
                    // }

                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.mediation_devicedetail.gui",
        url: "DeviceDetail/:DeviceID",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
