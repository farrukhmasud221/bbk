export const accountDashboardTroubleTicketsState = {
    states: [{
        name: "top.gui.accountdashboard.gui.troubletickets",
        params: {
            reload: true
        },
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "9672",
                    "heading": "",
                    "panelType": "ListView",
                    "operationId": "troubleticketsADP_f1",
                    "mappings": {
                        "v_AccountID": "AccountID"
                    },
                    "gridOperations": [{
                        operationId: "TX_InsertTroubleTicket",
                        label: "Add Trouble Ticket",
                        type: "insert",
                        viewsObj: {
                            "viewID": "3799",
                            "heading": "Trouble Ticket",
                            "panelType": "InsertView",
                            buttonLabel: 'Add',
                            "operationId": "TX_InsertTroubleTicket",
                            "mappings": {
                                "v_AccountID": "AccountID"
                            },
                            "Params": [
                                { "ViewParamId": 61303, "name": "v_AccountID", "ctype": "textbox", "paramtype": "bigint", "label": "AccountID", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61304, "name": "v_Subject", "ctype": "textbox", "paramtype": "varchar", "label": "Subject", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61305, "name": "v_CustomerName", "ctype": "textbox", "paramtype": "varchar", "label": "CustomerName", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61306, "name": "v_PhoneNo", "ctype": "textbox", "paramtype": "varchar", "label": "PhoneNo", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61307, "name": "v_CellNo", "ctype": "textbox", "paramtype": "varchar", "label": "CellNo", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61308, "name": "v_Email", "ctype": "textbox", "paramtype": "varchar", "label": "Email", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61309, "name": "v_IssueTypeCategoryID", "ctype": "select", "paramtype": "bigint", "label": "IssueTypeCategory", displayName: 'v_IssueTypeCategoryName', valueName: 'v_IssueTypeCategoryID', operationId: "LS_issuetypecategories", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61310, "name": "v_IssueTypeID", "ctype": "select", "paramtype": "bigint", "label": "IssueType", displayName: 'v_IssueTypeName', valueName: 'v_IssueTypeID', operationId: "LS_issuetypes", "direction": "in", "validator": "", "width": "auto" },
                                { "ViewParamId": 61311, "name": "v_TroubleTicketID", "ctype": "label", "paramtype": "bigint", "label": "TroubleTicketID", "direction": "out", "validator": "", "width": "auto" }
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
                        enableRowHeaderSelection: false,
                        "columnDefs": [
                            { "ViewColumnDefID": 56743, "name": "v_TroubleTicketID", "displayName": "ID", "cellTemplate": "<div><a ng-href=\"#!/TroubleTicketDetail/{{row.entity.v_TroubleTicketID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", "cellClass": "text-center", enableCellEdit: false },
                            { "ViewColumnDefID": 56746, cellTooltip: (row, col) => { return row.entity.v_Subject }, "displayName": "Subject", "name": "v_Subject", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56747, "displayName": "Customer Name", "name": "v_CustomerName", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56748, "displayName": "Phone No", "name": "v_PhoneNo", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56749, "displayName": "Cell No", "name": "v_CellNo", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56750, "displayName": "Email", "name": "v_Email", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56752, "name": "v_IssueTypeCategoryName", "displayName": "Issue Type Category Name", "cellTemplate": "<div><a ng-href=\"#!/TroubleIssueTypeCategory/{{row.entity.v_IssueTypeCategoryID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false },
                            { "ViewColumnDefID": 56755, "name": "v_TroubleTicketState", "displayName": "Trouble Ticket State", "cellTemplate": "<div><a ng-href=\"#!/TroubleTicketStates/{{row.entity.v_TroubleTicketStateID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "*", enableCellEdit: false }
                        ],
                        onRegisterApi: null
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.accountdashboard.gui.troubletickets.gui",
        url: "/TroubleTickets",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                component: 'gridComponent'
            }
        }
    }]
};