export const accountDashboardActiveSessionState = {
    states: [{
        name: "top.gui.accountdashboard.gui.activesession",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9670",
                    "heading": "Active Sessions",
                    "panelType": "ListView",
                    "operationId": "activesessionsADP_f2",
                    "mappings": {
                            "v_AccountID": "AccountID"
                    },
                    "rowOperations": [{
                        operationId: "TX_SessionToStopAccounting",
                        label: "Stop Accounting",
                        type: "delete",
                        mappings: {
                            "v_AccountID": "AccountID"
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
                            { "ViewColumnDefID": 56597, "headerTooltip": "ID", "displayName": "ID", "name": "v_SessionID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56603, "headerTooltip": "MSISDN", "displayName": "MSISDN", "name": "v_UserName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56605, "headerTooltip": "Framed IP", "displayName": "Framed IP", "name": "v_FramedIPAddress", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56606, "headerTooltip": "NAS IP Address", "displayName": "NAS IP Address", "name": "v_NASIPAddress", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56608, "headerTooltip": "Calling Number", "displayName": "Calling Number", "name": "v_Calling_Station_ID", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56709, "headerTooltip": "Start Time", "displayName": "Start Time", "name": "v_StartTime", "cellFilter": "date:\'dd-MMM-yyyy HH:mm:ss\'", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56710, "headerTooltip": "Session Time (sec)", "displayName": "Session Time (sec)", "name": "v_SessionTime", "cellFilter": "date:\'dd-MMM-yyyy HH:mm:ss\'", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56711, "headerTooltip": "Download (MB)", "displayName": "Download (MB)", "name": "v_UsageUnitsIn", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56712, "headerTooltip": "Upload (MB)", "displayName": "Upload (MB)", "name": "v_UsageUnitsOut", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        },
        // deepStateRedirect: true,
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.activesession.gui",
        url: "/ActiveSession",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        },
        // deepStateRedirect: true,
        // sticky: true
    }
    ]

};