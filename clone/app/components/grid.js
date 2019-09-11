import { operationButtonClasses } from '../services/metaData';
export const gridComponent = {
    bindings: {
        viewsObj: "<",      /* receive resolved metadata from a state's resolve */
        resolve: "<",
        close: '&',
        dismiss: '&'
    },
    controller: ["$scope", "$stateParams", "utilityService", "httpService", "metaDataService", 'modalService', 'toastService', '$state', '$timeout', function ($scope, $stateParams, utilityService, httpService, metaDataService, modalService, toastService, $state, $timeout) {
        let vm = this;

        /* ON CONTROLLER INITIALIZATION */
        vm.$onInit = () => {
            vm.viewsObj = vm.resolve ? vm.resolve.viewsObj : vm.viewsObj;

            vm.viewsObject = Array.isArray(vm.viewsObj) ? vm.viewsObj : [vm.viewsObj];  /* covert viewsObj to array if not array - multiple grids possible */
            vm.operationButtonClasses = operationButtonClasses;                         /* make availble the operationType-buttonClasses array to template */
            $scope.rowOperations = [];      /* for rows to display button labels (and more importantly correctly pass the rowOperation to the callback), it needs to have access to objects on the scope. So we concat all rowOperations for different grids in a single object on the scope) */
            $scope.columnOperations = [];

            for (let viewObj of vm.viewsObject) {   /* for each grid inside viewsObj */
                $scope.rowOperations = $scope.rowOperations.concat(viewObj.rowOperations);      /* concat rowOperations of this grid to the scopes rowOperations Array */
                $scope.columnOperations = $scope.columnOperations.concat(viewObj.columnOperations);

                viewObj.gridOptions.onRegisterApi = gridApi => {                                /* initialize gridApi for each ui-grid */
                    viewObj.gridApi = gridApi;
                    if (viewObj.gridOptions.enableRowSelection) {                               /* if grid allows row selections, then register whenever user changes selection of rows - and evaluate whether to show bulk operation buttons for the current selection of rows */
                        viewObj.gridApi.selection.on.rowSelectionChanged($scope, row => { evalBulkShow(vm.getViewObjectByGrid(row.grid.options).ngShows, viewObj.bulkOperations, gridApi.selection.getSelectedRows(), row.grid); });
                        viewObj.gridApi.selection.on.rowSelectionChangedBatch($scope, rows => { console.log(gridApi.selection.getSelectedRows().length); evalBulkShow(vm.getViewObjectByGrid(rows[0].grid.options).ngShows, viewObj.bulkOperations, gridApi.selection.getSelectedRows(), rows[0].grid); });
                    }


                    // scope.gridApi.rowEdit.getDirtyRows()
                    viewObj.gridApi.edit.on.afterCellEdit($scope, (row, colDef, newValue, oldValue) => {
                        console.log('edited row id:' + row.entity + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue);
                    });
                }
            }
        }

        vm.$onDestroy = () => {
            console.log('GRID FINSIHING')
        }

        /** This method returns the viewObject for the grid passed to it as a param. Rows in each grid are only aware of their grid options, not of their viwObjects - so upon callback or any row event, we may need the viewObject for that row(s) and this method returns that
         * @param {object} gridOptions - gridOptions - access via row.grid.options or viewObj.gridOptions
         * @return {}
         */
        let getViewObjectByGrid = vm.getViewObjectByGrid = gridOptions => {
            for (let viewObj of vm.viewsObject)
                if (viewObj.gridOptions === gridOptions)
                    return viewObj;
        }

        /** This method is the callback for grid operation buttons i.e. operations which apply to the whole grid. Like inserting a record, submitting grid etc.
         * @param {object} viewObj - the viewObj for which gridoperation is to be executed
         * @param {object} gridOperation - the gridOperation obeject which contains the ID, type and other information about the gridOperation that is being called for execution
         */
        let executeGridOperation = vm.executeGridOperation = async (viewObj, gridOperation) => {
            if (gridOperation.type === 'insert') {
                modalService.createModal(gridOperation.viewsObj, $stateParams);
            } else if (gridOperation.type === 'file') {

            } else if ((gridOperation.confirmation && confirm(gridOperation.type === 'action' ? "Apply action?" : gridOperation.type[0].toUpperCase() + gridOperation.type.substring(1) + " record?")) || !gridOperation.confirmation) {
                if (gridOperation.func)
                    Object.assign($stateParams, gridOperation.func(viewObj.gridOptions.data));
                let [response, isSuccess] = await httpService.buildAndSendRequest(gridOperation.operationId, gridOperation.mappings, $stateParams);
                if (isSuccess) {
                    $stateParams.reload = !$stateParams.reload;
                    $state.go($state.current.name, $stateParams);
                }
            }
        }

        /** This method is the callback for the various row operations - delte, update, action & toggle.
         * @param {object} row - current row for which to execute row operation on
         * @param {object} rowOperation - operation object containing operationId, operation type and mappings or viewsObj
         */
        let executeRowOperation = $scope.executeRowOperation = async (row, rowOperation) => {
            let viewObj = vm.getViewObjectByGrid(row.grid.options); /* first get the viewObject for the grid */
            let data = Object.assign({}, copyObject(row.entity), copyObject($stateParams));    /* concat row data and state params */
            if (rowOperation.type !== 'update') {   /* for non-update ops (which don't need user input via a modal form */
                if ((rowOperation.confirmation && confirm(rowOperation.type === 'action' ? "Apply action?" : rowOperation.type[0].toUpperCase() + rowOperation.type.substring(1) + " record?")) || !rowOperation.confirmation) {                  /* display confimration message if rowOperation.confirmation set, else just proceed */
                    // if (rowOperation.platform)

                    if (rowOperation.operationId === 'ReAttemptTXID') {  /* SPECIAL CASE PLATFORM ONLY */
                        data = { v_Data: row.entity };
                    }
                    let [response, isSuccess] = await httpService.buildAndSendRequest(rowOperation.operationId, rowOperation.mappings || {}, data);
                    if (isSuccess) {                /* on success, splice data from grid if operation was a delete and refresh grid, or reload state for other operations */
                        if (rowOperation.type === 'delete') {
                            row.grid.options.data.splice(row.grid.options.data.indexOf(row.entity), 1);
                            row.grid.refresh();
                        } else {
                            if (viewObj.panelType === 'SearchView') {
                                let searchParams = {};
                                viewObj.Params.forEach((param, key) => {    /* for each param */
                                    if (isDefined(param.value))                 /* if value is defined only then put it in search params */
                                        searchParams[param.name] = param.value;
                                });

                                if (isDev)
                                    toastService.createToast('info', "Parameters Searched", searchParams, 5000);

                                /* execute REST query based on search params and update grid based on respinse - also show grid if hidden */
                                let [response, isSuccess] = await httpService.request(viewObj.operationId, searchParams);
                                viewObj.gridOptions.data = isSuccess ? response.data.rows : [];
                                console.log("hahahahaha",response.data.rows[0]);
                                vm.showResult = true;
                                viewObj.gridApi.core.refresh();
                            } else if ($stateParams.hasOwnProperty('reload')) {
                                $stateParams.reload = !$stateParams.reload;
                                $state.go($state.current.name, $stateParams);
                            }
                        }
                    }

                }
            } else                                  /* if operation is an update type, open the modal, sending stateParams and row data */
                modalService.createModal(rowOperation.viewsObj, data);
        }

        /** This method is the callback for the various row operations - delte, update, action & toggle.
         * @param {object} row - current row for which to execute row operation on
         * @param {object} rowOperation - operation object containing operationId, operation type and mappings or viewsObj
         */
        let executeColumnOperation = $scope.executeColumnOperation = async (row, columnOperation) => {
            console.log(columnOperation, row.entity)
            let viewObj = vm.getViewObjectByGrid(row.grid.options); /* first get the viewObject for the grid */
            let data = Object.assign({}, copyObject(row.entity), copyObject($stateParams));    /* concat row data and state params */
            if (columnOperation.type === 'state') {   /* for non-update ops (which don't need user input via a modal form */
                // if ((rowOperation.confirmation && confirm(rowOperation.type === 'action' ? "Apply action?" : rowOperation.type[0].toUpperCase() + rowOperation.type.substring(1) + " record?")) || !rowOperation.confirmation) {                  /* display confimration message if rowOperation.confirmation set, else just proceed */
                //     let [response, isSuccess] = await httpService.buildAndSendRequest(rowOperation.operationId, rowOperation.mappings, data);
                //     if (isSuccess) {                /* on success, splice data from grid if operation was a delete and refresh grid, or reload state for other operations */
                //         if (rowOperation.type === 'delete') {
                //             row.grid.options.data.splice(row.grid.options.data.indexOf(row.entity), 1);
                //             row.grid.refresh();
                //         } else {
                //             $stateParams.reload = !$stateParams.reload;
                //             $state.go($state.current.name, $stateParams);
                //         }
                //     }
                // }
            } else {                               /* if operation is an update type, open the modal, sending stateParams and row data */
                if (columnOperation.viewObj.panelType === 'dynamic') {
                    let cellData = JSON.parse(row.entity[columnOperation.column]);
                    if (typeof cellData === 'object') {
                        if (Array.isArray(cellData)) {

                        } else {
                            columnOperation.viewObj.panelType = "ReadOnlyView";
                            columnOperation.viewObj.Params = [];
                            Object.keys(cellData).forEach(param => {
                                columnOperation.viewObj.Params.push({ name: param, direction: 'out', ctype: 'label', })
                            })
                        }
                    } else
                        modalService.createModal(columnOperation.viewsObj, data);
                }

            }
        }

        /** This method is called on the pressing of grid buttons for a particular bulk operation.
         * @param {object} viewObj -  the viewObj for which bulkOperation is to be executed
         * @param {object} bulkOperation the bulkOperation object which contains the ID, type and other information about the bulkOperation that is being called for execution
         */
        let executeBulkOperations = vm.executeBulkOperations = async (viewObj, bulkOperation) => {
            let totalSuccess = 0; let results; let indices = [];
            if ((bulkOperation.bulkConfirmation && confirm(bulkOperation.type === 'action' ? "Apply action?" : bulkOperation.type[0].toUpperCase() + bulkOperation.type.substring(1) + " records?")) || bulkOperation.bulkConfirmation === false) {     /* display play confirmation message unless bulkConfirmation set to false */

                if (bulkOperation.serverBulk) {
                    let data = viewObj.gridApi.selection.getSelectedRows();
                    if (bulkOperation.func)
                        data = bulkOperation.func(data);
                    let [response, isSuccess] = await httpService.request(httpService.getConfig().serverSideBulkAPI, { [httpService.getConfig().serverSideBulkDataParam]: data, [httpService.getConfig().serverSideBulTargetAPIParam]: bulkOperation.operationId });
                    // $stateParams.reload = !$stateParams.reload;
                    // $state.go($state.current.name, $stateParams);
                } else {
                    viewObj.gridApi.selection.getSelectedRows().forEach(selectedRow => indices.push(viewObj.gridOptions.data.indexOf(selectedRow)));    /* for all selected rows, get their indices frrom the grid data array */
                    console.log(indices);

                    /* send all selected rows for processing and receive the results - in this case, an array corresponsing to whether each request is a success or not. */
                    results = await httpService.buildAndSendBulkRequests(bulkOperation.operationId, bulkOperation.mappings, viewObj.gridApi.selection.getSelectedRows(), $stateParams);
                    console.log(results)
                    totalSuccess = results.reduce((successes, success) => successes + (success ? 1 : 0), 0);    /* count the total successes & display appropriate message */
                    let toastMessage = totalSuccess > 0 ? (bulkOperation.type === 'action' ? "Action applied on " : '') + (totalSuccess === results.length ? "all " : "") + "selected records " + (totalSuccess === results.length ? "successfully" : "partially") + (bulkOperation.type === 'action' ? "!" : ' ' + bulkOperation.type + 'd!') : "failed to " + (bulkOperation.type === 'action' ? "apply action on" : bulkOperation.type) + " any selected records!";
                    toastService.createToast(totalSuccess === 0 ? 'error' : totalSuccess === results.length ? 'success' : 'warning', ((totalSuccess === results.length || totalSuccess === 0) ? 'Complete' : 'Partial') + ' ' + (totalSuccess > 0 ? 'Success' : 'Failure'), toastMessage[0].toUpperCase() + toastMessage.substring(1));
                }
                if (bulkOperation.type !== 'delete') {                          /* if bulkoperation is not delete, reload state */
                    if (viewObj.panelType === 'SearchView') {
                        let searchParams = {};
                        viewObj.Params.forEach((param, key) => {    /* for each param */
                            if (isDefined(param.value))                 /* if value is defined only then put it in search params */
                                searchParams[param.name] = param.value;
                        });

                        if (isDev)
                            toastService.createToast('info', "Parameters Searched", searchParams, 5000);

                        /* execute REST query based on search params and update grid based on respinse - also show grid if hidden */
                        let [response, isSuccess] = await httpService.request(viewObj.operationId, searchParams);
                        viewObj.gridOptions.data = isSuccess ? response.data.rows : [];
                        console.log("haaaaahahaha2",response.data.rows[0]);
                        vm.showResult = true;
                        viewObj.gridApi.core.refresh();
                    } else if ($stateParams.hasOwnProperty('reload')) {
                        $stateParams.reload = !$stateParams.reload;
                        $state.go($state.current.name, $stateParams);
                    }
                } else if (totalSuccess > 0) {                                  /* if bulk operation is a delete, and there are some success, remove those rows & refresh grid */
                    for (let index = results.length - 1; index >= 0; index--)
                        if (results[index])
                            viewObj.gridOptions.data.splice(indices[index], 1);
                    viewObj.gridApi.core.refresh();
                    $timeout(() => { }, 0);
                }
            }
        }

        vm.bulkUpdate = async (viewObj, operationId) => {
            let reqParams = [];
            for (let dataRow of viewObj.gridApi.selection.getSelectedRows())
                reqParams.push([dataRow, httpService.buildRequest(viewObj.deletePanel, viewObj.mappings[viewObj.deletePanel], dataRow), null]);
            for (let param of reqParams)
                param[2] = await httpService.request(viewObj.deletePanel, param[1]);
            let successCount = 0;
            for (let response of reqParams)
                if (Object.byString(response[2], httpService.getConfig().swaggerSuccess.responseFields) == httpService.getConfig().swaggerSuccess.success) {
                    successCount++;
                    viewObj.gridOptions.data.splice(viewObj.gridOptions.data.indexOf(response[0]), 1);
                }
            toastService.createToast(successCount === reqParams.length ? 'success' : 'warning', successCount === reqParams.length ? 'Success' : 'Warning', successCount === reqParams.length ? httpService.getConfig().batchDeleteAlert.success : httpService.getConfig().batchDeleteAlert.failure);
            viewObj.gridApi.core.refresh();
            viewObj.displayBulkButtons = viewObj.gridApi.selection.getSelectedRows().length > 0 ? true : false;
            console.log("hey"+viewObj.displayBulkButtons);

        }

        /** This method submits the grid for server side bulk processing - and shows failed results inside the grid once again, for correction & resubmission */
        let submitGrid = vm.submitGrid = async viewObj => {
            let [response, isSuccess] = await httpService.request(viewObj.operationId, { apiName: viewObj.bulkOperationId, payLoad: viewObj.gridOptions.data, mapping: viewObj.labelNameMappings });
            if (isSuccess && response.data.length > 0) {
                toastService.createToast('warning', 'Data Error', 'Some of the rows in the .csv file were erroneous. They are displayed in the grid. \nExport to excel OR edit in grid and re-submit', 15000);
                if (viewObj.gridOptions.columnDefs.find(column => column.name === 'Error Message') === undefined)
                    viewObj.gridOptions.columnDefs.unshift({ name: 'Error Message', displayName: "Error", cellClass: "text-center", width: '*' });
                await metaDataService.resolve({ heading: "", operationId: 'Bulkiterator', panelType: 'ListView', gridOptions: viewObj.gridOptions }, $stateParams)
                viewObj.gridOptions.data = response.data;
                viewObj.gridApi.core.refresh();
            } else {
                toastService.createToast('success', 'All rows processed', '');
                $stateParams.reload = !$stateParams.reload;
                $state.go($state.current.name, $stateParams);
            }
        }
    }],
    templateUrl: 'app/templates/grid.html' //HAVING ui-grid-row-edit in div will always raise rowedit, which expects a promise to be returned. Must have ui-grid-selection for selction
}

/** This methods evaluates on each change of row selection, for all bulk operations, whether to show the bulk operation button or not. For example, lets say that the row operation button is to be only shown if the date column has dates greater than 2017. If the user selects rows with dates both greater and less than 2017, the bulk button won't show. 
 * @param {object} ngShows - each rowOperationId is here
 * @param {[object]} bulkOperations - all bullk operations
 * @param {[object]} selectedRows - all selected rows
 */
let evalBulkShow = (ngShows, bulkOperations, selectedRows, grid) => {
    if (isDefined(bulkOperations) && selectedRows.length)       /* if bulk operation is defined and #of rows selected is > 0 */
        bulkOperations.forEach(bulkOperation => {                   /* for each bulkOperation */
            if (isDefined(bulkOperation.ngShow)) {                      /* if it has an ngShow */
                let results = [];
                selectedRows.forEach(row => {                               /* then for each of the selected rows, evaluate if ngShow condition is met, and push it to results */
                    if (bulkOperation.showOnDirty)
                        results.push(grid.getRow(row).isDirty);
                    else
                        results.push(eval(bulkOperation.ngShow));
                });
                ngShows[bulkOperation.operationId] = results.every(result => result === true);  /* then for this bulkOperation Id, set the ngShows to true if all evaluations are true*/
            }
        });
     console.log("ngshow is here"+ngShows)
}

















/**
vm.isValueChanged = (row, operationId, mappings) => {                           //0 => no change, 1 => row changed, 2 => user input required
            let parameters = httpService.getParameters(operationId);                 //get the parameter for the current operation ID
            let returnValue;
            for (let parameter of parameters) {                                         //for all parameters
                if (row.entity[mappings[operationId][parameter]] === undefined)         //if parameter does not exist in the grid
                    if ($stateParams[mappings[operationId][parameter]] === undefined) { //and if parameter does not exist in state
                        returnValue = 2;                                                //then user input is required and open a modal
                        break;
                    }
                    else {                                                                  //if parameter exists in the grid
                        if (row.entity[mappings[operationId][parameter]] !== row.grid.options.data[row.grid.options.data.indexOf(row.entity)][mappings[operationId][parameter]])                                          //and its value is changed
                            returnValue = 1;                                                //then its OK to execute operation
                    }
            }
            return returnValue || 0;
        }
 */