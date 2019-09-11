export const mediationOperationcustomercdrsState = {
    states: [{
        name: "top.gui.mediation_operation_customercdrs",
        abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Customer CDRs",
                    "panelType": "ListView",
                    "operationId": "WF_getcustomerCDRs",  
                    "Params":[
                        {"ViewParamId":75119, "name":"v_ID", "ctype":"label", "paramtype":"bigint", "label":"ID", "direction":"out", "validator":"", "width":"auto"}
                    ],
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 10,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                           
							{ "ViewColumnDefID": 36388, "name": "connect_time", "label": "connect_time", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "disconnect_time", "label": "disconnect_time",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "prefix", "label": "prefix",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36391, "name": "cost", "label": "cost",  "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "duration", "label": "duration",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "interval_1", "label": "interval_1", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "cli", "label": "cli", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36391, "name": "pdd1xx", "label": "pdd1xx",  "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "cld", "label": "cld", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "i_cdr", "label": "i_cdr", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "call_id", "label": "call_id", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "delay", "label": "delay",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36391, "name": "cld_in", "label": "cld_in", "cellClass":"text-center",  "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "i_call", "label": "i_call", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "i_account", "label": "i_account", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36391, "name": "price_n", "label": "price_n",  "cellClass":"text-center", "width": "*", enableCellEdit: false },
			        			{ "ViewColumnDefID": 36388, "name": "description", "label": "description", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "interval_n", "label": "interval_n",  "cellClass":"text-center","width": "*", enableCellEdit: false },
			          			{ "ViewColumnDefID": 36391, "name": "price_1", "label": "price_1",  "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "cli_in", "label": "cli_in",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "billed_duration", "label": "billed_duration", "cellClass":"text-center", "width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "country", "label": "country",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "user_agent", "label": "user_agent",  "cellClass":"text-center","width": "*", enableCellEdit: false },
							{ "ViewColumnDefID": 36388, "name": "remote_ip", "label": "remote_ip", "cellClass":"text-center", "width": "*", enableCellEdit: false },
                           ],
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams)
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_operation_customercdrs.gui",
        url: "customercdrs",
        views: {
            "tabContent@top": { //gui.aaa_administration_aaadashboard": {
                component: 'gridComponent'
            }
        }
    }]
};