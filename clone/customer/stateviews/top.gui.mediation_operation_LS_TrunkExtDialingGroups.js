export const mediationOperationLS_TrunkExtDialingGroupsState = {
    states: [{
        name: "top.gui.mediation_operation_LS_TrunkExtDialingGroups",
       abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "215",
                    "heading": "Sip Trunk Ext Dialing Groups",
                    "panelType": "ListView",
                    "operationId": "LS_siptrunkextdialinggroups",
                    // rowOperations: [{
                    //     operationId: "TX_UpdateChargeHeadGroupName",
                    //     "label": "Update Charge Head Name",
                    //     type: "update",
                    //     viewsObj: {
                    //         "viewID": "359",
                    //         "heading": "Charge Head Groups",
                    //         "panelType": "UpdateView",
                    //         "operationId": "TX_UpdateChargeHeadGroupName",
                    //         "mappings": { "v_ChargeHeadGroupID": "v_ChargeHeadGroupID" },
                    //         "Params": [{ "ViewParamId": 71656, "name": "v_ChargeHeadGroupName", "ctype": "label", "paramtype": "varchar", "label": "v_ChargeHeadGroupName", "direction": "inout", "validator": "", "width": "*" }]
                    //     }
                    // }],
                    gridOperations: [{
                        type: 'insert',
                        label: 'Add Dialing Group',
                        operationId: 'TX_InsSIPTrunkExtDialingGroup',
                        viewsObj: {
                            "viewID": "346",
                            "heading": "Add SipTrunk Ext Dialing Group",
                            "panelType": "InsertView",
                            "operationId": "TX_InsSIPTrunkExtDialingGroup",
                            buttonLabel: "Add Dialing Group",
                            "Params": [
                                { "ViewParamId": 54501, "name": "v_SIPTrunkExtDialingGroupName", "ctype": "label", "paramtype": "varchar", "label": "v_SIPTrunkExtDialingGroupName", "direction": "in", "validator": "", "width": "*" }
                            ]
                        }
                    }],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                                                "columnDefs": [
                             { "ViewColumnDefID": 36388, "name": "v_SIPTrunkExtDialingGroupID", "cellClass":"text-center","label": "v_SIPTrunkExtDialingGroupID", "width": "*", enableCellEdit: false },
                                { "ViewColumnDefID": 36388, "name": "v_SIPTrunkExtDialingGroupName", "cellClass":"text-center","label": "v_SIPTrunkExtDialingGroupName", "width": "*", enableCellEdit: false }
                           
                            
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_LS_TrunkExtDialingGroups.gui",
        url: "TrunkExtDialingGroups",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
            // "tabContent@top": {
            //     component: "formComponent"
            // },

        },
        deepStateRedirect: true
    }]
};
