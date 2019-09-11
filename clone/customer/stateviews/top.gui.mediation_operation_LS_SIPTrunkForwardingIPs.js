

export const DIDsDashboardSIPTrunkForwardingIPsState = {
    states: [{
        name: "top.gui.operation_DIDsDashboard.gui.SIPTrunkForwardingIPs",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "SIP Trunk Forwarding IPs",
                    "panelType": "ListView",

                    "operationId": "siptrunkforwardingips_f1",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100, 500, 1000, 2000, 3000, 4000, 5000],
                        paginationPageSize: 500,
                        data: null,
                        enableScrollbars: true,
                        exporterCsvFilename: 'SipTrunk.csv',
                        enableGridMenu: true,
                        enableFiltering: true,
                        enableRowSelection: true,
                        multiSelect: true,
                        "columnDefs": [
                            


                            { "ViewColumnDefID": 36388, "name": "v_SIPTrunkID", "cellClass": "text-center", "label": "v_SIPTrunkID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ForwardingIP", "cellClass": "text-center", "label": "v_ForwardingIP", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ForwardingPort", "cellClass": "text-center", "label": "v_ForwardingPort", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_NumberOfChannels", "cellClass": "text-center", "label": "v_NumberOfChannels", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_ForwardingIP", "cellClass": "text-center", "label": "v_ForwardingIP", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 36388, "name": "v_InsertTime", "cellClass": "text-center", "label": "v_InsertTime", "width": "*", enableCellEdit: false },
                           
                           


                        ],
                        
                    },
                    rowOperations: [{
                        operationId: "TX_RevokeRoleFromAdmin",
                        type: "delete",
                        label: "Unassign",
                        mappings: {
                            "v_RoleID": "v_RoleID",
                            "v_AdministratorID": "AdministratorID"
                        }
                    }],


                    "gridOperations": [{
                        operationId: "TX_InsSIPTrunkForwardingIPs",
                        label: "Add",
                        type: "insert",
                        viewsObj: {
                            "viewID": "888",
                            "heading": "Add",
                           
                            "panelType": "InsertView",
                            buttonLabel: "Add",
                            "operationId": "TX_InsSIPTrunkForwardingIPs",
                            
                            "Params":[
                                {"ViewParamId":73336, "name":"v_SIPTrunkID", "ctype":"textbox", "paramtype":"varchar", "label":"v_SIPTrunkID", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_ForwardingIP", "ctype":"textbox", "paramtype":"varchar", "label":"v_ForwardingIP", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_ForwardingPort", "ctype":"textbox", "paramtype":"varchar", "label":"v_ForwardingPort", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_NumberOfChannels", "ctype":"textbox", "paramtype":"varchar", "label":"v_NumberOfChannels", "direction":"in", "validator":"", "width":"auto"},
                                {"ViewParamId":73336, "name":"v_RoutingPriority", "ctype":"textbox", "paramtype":"varchar", "label":"v_RoutingPriority", "direction":"in", "validator":"", "width":"auto"},
                                
                                     
                            ]
                        }
                        
                    }],








                    
                }];

                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.SIPTrunkForwardingIPs",
        url: "/SIPTrunkForwardingIPs1",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }

        },
        deepStateRedirect: true
    }]
};
