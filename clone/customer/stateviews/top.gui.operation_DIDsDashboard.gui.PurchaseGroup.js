export const DIDsDashboardPurchaseGroupState = {
    states: [{
        name: "top.gui.operation_DIDsDashboard.gui.PurchaseGroup",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_dids",
                    "heading": "Purchase Group",
                    "mappings": {
                        "v_DIDID": "DIDID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": [
                        "TX_UpdDIDPurchaseGroupID"],
    
                    "TX_UpdDIDPurchaseGroupID": {
                        "viewID": "3899",
                        "mappings": {
                            "v_DIDID": "DIDID"
                        },
                        "operationId": "TX_UpdDIDPurchaseGroupID",
                        "buttonLabel": "update",
                        "heading": "Purchase Group",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                           
                         //   {"ViewParamId":57774, "name":"v_DIDPurchaseGroupID", "ctype":"select", "paramtype":"varchar", "label":"v_DIDPurchaseGroupID", "direction":"inout", "validator":"", "width":"auto"},

                            { "ViewParamId": 60465, "name": "v_DIDPurchaseGroupID", "ctype": "select", "paramtype": "ENUM", "label": "v_DIDPurchaseGroupID", "direction": "inout", "validator": "", "options": [{ "display": "Default Purchase Group", "value": "" },], "width": "auto" },

                          
    
                        ]
                    },
                    // "viewID": "1229",
                    // "heading": "Basic",
                    // "panelType": "ReadOnlyView",
                    // "operationId": "TX_UpdDIDForwardingNumber",
                    // "mappings": {
                    //     "v_DIDID": "DIDID"
                    // },
                  
                    
                    
                    


                  

                    
                     
                    // "Params":[
                    //      {"ViewParamId":57773, "name":"v_ForwardingNumber", "ctype":"label", "paramtype":"varchar", "label":"v_ForwardingNumber", "direction":"out", "validator":"", "width":"auto"},
                    //      //{"ViewParamId":57774, "name":"v_DIDNumber", "ctype":"label", "paramtype":"varchar", "label":"v_DIDNumber", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_CityID", "ctype":"label", "paramtype":"varchar", "label":"v_CityID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_AreaCodeID", "ctype":"label", "paramtype":"varchar", "label":"v_AreaCodeID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_DIDPurchaseGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_DIDPurchaseGroupID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_DIDSaleGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_DIDSaleGroupID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_DIDProviderTrunkID", "ctype":"label", "paramtype":"varchar", "label":"v_DIDProviderTrunkID", "direction":"out", "validator":"", "width":"auto"},
                    //     // {"ViewParamId":57774, "name":"v_SIPTrunkID", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_IsMasterSipTrunkDID", "ctype":"label", "paramtype":"varchar", "label":"v_IsMasterSipTrunkDID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57774, "name":"v_SIPTrunkAssignmentDate", "ctype":"label", "paramtype":"varchar", "label":"v_SIPTrunkAssignmentDate", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_AccNoServiceOfferingID", "ctype":"label", "paramtype":"varchar", "label":"v_AccNoServiceOfferingID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_AccNoChargeHeadLineRentID", "ctype":"label", "paramtype":"varchar", "label":"v_AccNoChargeHeadLineRentID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_Status", "ctype":"label", "paramtype":"varchar", "label":"v_Status", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_AccountID", "ctype":"label", "paramtype":"varchar", "label":"v_AccountID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_AssignedDate", "ctype":"label", "paramtype":"varchar", "label":"v_AssignedDate", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_ServiceID", "ctype":"label", "paramtype":"varchar", "label":"v_ServiceID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_HuntGroupID", "ctype":"label", "paramtype":"varchar", "label":"v_HuntGroupID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_Username", "ctype":"label", "paramtype":"varchar", "label":"v_Username", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_DomainName", "ctype":"label", "paramtype":"varchar", "label":"v_DomainName", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_LiveStatus", "ctype":"label", "paramtype":"varchar", "label":"v_LiveStatus", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_RegistrationDate", "ctype":"label", "paramtype":"varchar", "label":"v_RegistrationDate", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_DIDType", "ctype":"label", "paramtype":"varchar", "label":"v_DIDType", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_RegionID", "ctype":"label", "paramtype":"varchar", "label":"v_RegionID", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_IsIncomingAllowed", "ctype":"label", "paramtype":"varchar", "label":"v_IsIncomingAllowed", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_IsOutgoingAllowed", "ctype":"label", "paramtype":"varchar", "label":"v_IsOutgoingAllowed", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_IsRestrictWhiteListUserAgent", "ctype":"label", "paramtype":"varchar", "label":"v_IsRestrictWhiteListUserAgent", "direction":"out", "validator":"", "width":"auto"},
                    //     //  {"ViewParamId":57775, "name":"v_IncomingTechPrefix", "ctype":"label", "paramtype":"varchar", "label":"v_IncomingTechPrefix", "direction":"out", "validator":"", "width":"auto"}
                         
 
                    // ],
                   

                }]
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.PurchaseGroup.gui",
        url: "/PurchaseGroup",
        views: {
            "tabContent@top": { //gui.servicedetail": {
                component: "detailComponent"
            }
        }
    }]
}
