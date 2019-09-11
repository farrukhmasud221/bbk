export const states = [{
    name: "top.gui.fileOperationsDashboard",
    abstract: true,
    // params: { CustomerID: null },
    resolve: {
        viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
            let viewsObj = {
                name: "FileOperationsDashboard",
                id: "FileOperationsDashboard",
                "panelType": "TabsMenu",
                "class": "nav nav-tabs",
                "heading": "File Operations",
                Params: [
                    { name: "Add File", id: "AddFile", url: "/FileOperations/AddFile" },
                    { name: "Add Operation", id: "AddOperation", url: "/FileOperations/AddOperation" },
                    { name: "Search Files", id: "SearchFiles", url: "/FileOperations/SearchBatches" },
                    // { name: "Account", id: "Account", url: "/CustomerDashboard/" },
                    // { name: "Country State Charge Head Group Tax", id: "CountryStateChargeHeadGroupTax", url: "/CustomerDashboard/" + $stateParams.CustomerID + "/CountryStateChargeHeadGroupTax" }
                ]
            };
            await metaDataService.resolve(viewsObj, $stateParams, $state$);
            return viewsObj;
        }]
    },
    // template: `
    //            <div ui-view="topmenu"></div>
    //            <div ui-view="tabContent" class="tab-content"></div>
    //        `
},
{
    name: "top.gui.fileOperationsDashboard.gui",
    url: "FileOperations",
    views: {
        "topmenu@top": {
            component: "menuComponent"
        }
    },
    deepStateRedirect: { default: "top.gui.fileOperationsDashboard.gui.submit.gui" },
    // sticky: true
},
{
    name: "top.gui.fileOperationsDashboard.gui.submit.**",
    url: "/AddFile",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsDashboard.gui.submit').then(response => {
            return response;
        });
    }
},
{
    name: "top.gui.fileOperationsDashboard.gui.operation.**",
    url: "/AddOperation",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsDashboard.gui.operation').then(response => {
            return response;
        });
    }
},
{
    name: "top.gui.fileOperationsDashboard.gui.search.**",
    url: "/SearchBatches",
    lazyLoad: function () {
        return System.import('./top.gui.fileOperationsDashboard.gui.search').then(response => {
            return response;
        });
    }
}]