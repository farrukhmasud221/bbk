
export const agentDashboardVoucherSettingsState = {
    states: [{
        name: "top.gui.agentdashboard.gui.vouchersettings",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_agents",
                    "mappings": {
                        "v_AgentID": "AgentID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdDMAgentIsVoucher"],
                    "TX_UpdDMAgentIsVoucher": {
                        "operationId": "TX_UpdDMAgentIsVoucher",
                        "heading": "Voucher Settings",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_IsVoucherPaymentSupported", "ctype": "select", "paramtype": "bigint", "label": "v_Voucher", "options":[{"display":"Disabled", "value":0},{"display":"Enabled", "value":1}], "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);

                var respObj= null;
                viewsObj.forEach(function(element) {
                    
                    respObj= element;
                    //element.data.v_IsVoucherPaymentSupported="Enable";
                });

               // viewsObj.pop();
                if(viewsObj[0].TX_UpdDMAgentIsVoucher.Params[0].value===1){
                    viewsObj[0].TX_UpdDMAgentIsVoucher.Params[0].value="Enabled";
                }
                else{
                    viewsObj[0].TX_UpdDMAgentIsVoucher.Params[0].value="Disabled";
                }
                    
               
             
               // viewsObj.push(respObj);

                return viewsObj;
                
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.vouchersettings.gui",
        url: "/VoucherSettings",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};