export const states = [{
    name: "top.gui.fileOperationsBatchResultsDashboard",
    abstract: true,
    params: { BatchID: null },
    resolve: {
        viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
            let viewsObj = {
                name: "FileOperationsDashboard",
                id: "FileOperationsDashboard",
                "panelType": "TabsMenu",
                "class": "nav nav-tabs",
                "heading": "Batch Transaction Details",
                Params: [
                    { name: "Failed", id: "Failed", url: "/SubmittedFileDetails/BatchID=" + $stateParams.BatchID + "/FailedTransactions" },
                    { name: "Successful", id: "Successful", url: "/SubmittedFileDetails/BatchID=" + $stateParams.BatchID + "/SuccessfulTransactions" },
                    { name: "Discarded", id: "Discarded", url: "/SubmittedFileDetails/BatchID=" + $stateParams.BatchID + "/DiscardedTransactions" },
                    { name: "Discard Attempts", id: "Discard Attempts", url: "/SubmittedFileDetails/BatchID=" + $stateParams.BatchID + "/DiscardAttempts" },
                    { name: "Locked Re-attempts", id: "Locked Re-attempts", url: "/SubmittedFileDetails/BatchID=" + $stateParams.BatchID + "/FailedReattempts" }
                ]
            };
            await metaDataService.resolve(viewsObj, $stateParams, $state$);
            return viewsObj;
        }]
    }
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui",
    url: "SubmittedFileDetails/BatchID=:BatchID",
    views: {
        "topmenu@top": {
            component: "menuComponent"
        }
    },
    deepStateRedirect: { default: "top.gui.fileOperationsBatchResultsDashboard.gui.failed.gui", params: ['BatchID'] },
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.failed.**",
    url: "/FailedTransactions",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsBatchResultsDashboard.gui.failed').then(response => {
            return response;
        });
    }
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.success.**",
    url: "/SuccessfulTransactions",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsBatchResultsDashboard.gui.success').then(response => {
            return response;
        });
    }
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.discard.**",
    url: "/DiscardedTransactions",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsBatchResultsDashboard.gui.discard').then(response => {
            return response;
        });
    }
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.discardAttempts.**",
    url: "/DiscardAttempts",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsBatchResultsDashboard.gui.discardAttempts').then(response => {
            return response;
        });
    }
},
{
    name: "top.gui.fileOperationsBatchResultsDashboard.gui.failedReattempts.**",
    url: "/FailedReattempts",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsBatchResultsDashboard.gui.failedReattempts').then(response => {
            return response;
        });
    }
}]