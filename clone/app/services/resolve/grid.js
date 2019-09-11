import { operationButtonClasses } from '../metaData';
/** A method to resolve grid component
 * @param {object} viewObj - metadata for the current view object
 * @param {object} httpParams - params & their values potentially required to execute REST operation for the grid
 * @param {object} httpService - service to execute REST operations
 * @param {function} getParamLabel - method to get label from name if label is not defined
 * @param {number} rowOperationIndex - keeps track of which rowOperation object to pass to each row operation's button's callback function
 * @param {number} columnOperationIndex - keeps track of which columnOperation object to pass to each column operation's button's callback function
*/
export let resolveGrid = async (viewObj, httpParams, httpService, getParamLabel, rowOperationIndex, columnOperationIndex) => {
    // if (viewObj.panelType === 'DynamicGrid') {
    //     let [response, isSuccess] = await httpService.request(viewObj.operationId, httpParams);
    //     if (isSuccess) {
    //         let metaData = JSON.parse(response.data.v_ProvBatchMetaData);
    //         // console.log(metaData, Object.keys(JSON.parse(metaData)));
    //         viewObj.gridOptions.columnDefs = [];
    //         viewObj.gridOptions.columnDefs.push({ name: 'v_TXID', width: '*', displayName: 'TXID', "cellClass": "text-center", enableCellEdit: false });
    //         viewObj.gridOptions.columnDefs.push({ name: 'v_ExitMessage', width: '*', displayName: viewObj.operationId === 'GU_GetFailedTxByProvBatchID' ? 'Error Message' : 'Exit Message', "cellClass": "text-center", enableCellEdit: false });
    //         if (viewObj.operationId === 'GU_GetClosedTxByProvBatchID')
    //             viewObj.gridOptions.columnDefs.push({ name: 'v_TxExitStatus', width: '*', displayName: 'Status', "cellClass": "text-center", enableCellEdit: false });

    //         Object.keys(metaData).forEach(key => {
    //             viewObj.gridOptions.columnDefs.push({ name: metaData[key].param, width: '*', displayName: key, "cellClass": "text-center", enableCellEdit: true })
    //         });
    //         let data = [];
    //         console.log(metaData, response.data.rows[0], viewObj.gridOptions.columnDefs)
    //         response.data.rows.forEach(row => {
    //             let dataRow = Object.assign(JSON.parse(row.v_RequestData), { v_TXID: row.v_TXID }, { v_ProvisioningBatchID: row.v_ProvisioningBatchID }, { v_ClientRequestID: row.v_ClientRequestID }, { v_TargetAPI: row.v_TargetAPI }, { v_ExitMessage: row.v_ResponseData } );
    //             if (viewObj.operationId === 'GU_GetClosedTxByProvBatchID')
    //                 Object.assign(dataRow, { v_TxExitStatus: row.v_TxExitStatus })
    //             data.push(dataRow);
    //         })
    //         console.log(data)
    //         viewObj.gridOptions.data = data;
    //     }
    // }
    /* Setting Button Labels & Confirmations for Grid Operations. By default, if operation confimartion is not defined for a non-insert frid operation, it is set to true. If operation label is not defined, it it set to operation type + operation Id*/
    for (let operation of viewObj.gridOperations || []) {
        operation.label = operation.label || (operation.type[0].toUpperCase() + operation.type.substring(1) + ' ' + operation.operationId);
        operation.confirmation = operation.type !== 'insert' ? operation.confirmation === undefined ? true : operation.confirmation : operation.confirmation;
    }

    /* Each row can have multiple types of operations defined, and multiple operations of each type. Operations like updates (which may update all row or some columns of the row, and typically open a form inside a modal), delete (deletes row) and actions (single click operation requirning no input - things like renew/toggle/reply etc.). Here, we are creating the template for the column where buttons for these operations reside. We have provided default labels and default button styling fo each type of operation, but this can be overriden in stateview i.e. viewObject if cellTemplate or label is defined. */

    let actionCellTemplate = '<div class="btn-group" uib-dropdown dropdown-append-to-body>';    /* dynamically generating the cellTemplate for the action buttons column in case row operations are defined. User has option of showing some or all of these operations in a dropdown. Appended to body so that cell overfows and dropdown is visisble.  */    /* let actionCellTemplate = '<div class="btn-group">'; */
    let actionCellLength = 0;       /* for setting width of all columns, we need to determine the length of the contents of the action call as as well */

    viewObj.bulkOperations = [];    /* some row operation may also be applicable by bulk. Push those row operations here */
    viewObj.ngShows = {};           /* for bulk operations, determine whether all selected rows meet the criteria defined for showing of button */

    if (Array.isArray(viewObj.rowOperations))           /* if row operations are defined, rearrange the array so that operations shown in dropdown are pushed to the end */
        viewObj.rowOperations.sort((a, b) => (a.showInDropDown || false) === (b.showInDropDown || false) ? 0 : b.showInDropDown ? -1 : 1);

    let startDropDown = false;      /* boolean indicating we are about to start placing row operation buttons inside dropdown. Needs to be set once */

    for (let operation of viewObj.rowOperations || []) {    /* for every row operation */
        operation.label = operation.label || (operation.type[0].toUpperCase() + operation.type.substring(1) + ' ' + rowOperationIndex); /* use default label if not given by user */
        operation.confirmation = operation.confirmation ? true : false;                                                     /* set confirmation to false if not defined */
        actionCellLength += operation.showInDropDown ? 0 : operation.label.length;                                          /* add button label length if not in dropdown */

        let ngShow = '';    /* ngShow contains dynamically generated conitional evaluation statement (based on the options set in showOn property in stateview) */
        for (let condition of operation.showOn || [])   /* For every condition, append to ngShow string. Row operation button will show if this condition evaluates to true */
            ngShow += 'row.entity.' + condition.name + ' ' + condition.condition + ' ' + condition.value + (condition.next ? ' ' + condition.next + ' ' : '');
        console.log(ngShow);
        if (operation.showOnDirty)
            ngShow = 'row.isDirty'

        if (!operation.showInDropDown)          /* if operation is not be be shown in a dropdown, then add it as a button to the action cell template */
            actionCellTemplate += '<button ng-show="' + (ngShow !== '' ? ngShow : true) + '" class="' + operationButtonClasses[operation.type] + ' btn-sm" ng-click="grid.appScope.executeRowOperation(row, grid.appScope.rowOperations[' + rowOperationIndex + '])">{{grid.appScope.rowOperations[' + rowOperationIndex + '].label}}</button>' + '  ';
        else if (operation.showInDropDown) {    /* if operation is to be shown in dropdown - different string needs to be added to the dynamic cell template */
            if (!startDropDown) {                   /* for the first occurence of button in dropdown, this template needs to be placed once to have the carrot sign */
                actionCellTemplate += '<button type="button" class="btn btn-secondary btn-sm" uib-dropdown-toggle aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button> <ul class="dropdown-menu" uib-dropdown-menu role="menu">';
                startDropDown = true;
            }
            actionCellTemplate += '<li role="menuitem"><a ng-show="' + (ngShow !== '' ? ngShow : true) + '" ng-click="grid.appScope.executeRowOperation(row, grid.appScope.rowOperations[' + rowOperationIndex + '])">{{grid.appScope.rowOperations[' + rowOperationIndex + '].label}}</a></li>';    /* Add each dropdown operation as a list item */
        }

        if (operation.bulk) {           /* if row operation is also to be allowed as bulk */
            operation.bulkLabel = operation.bulkLabel || (operation.label + ' Selected');                               /* use default bulkLabel if not given */
            operation.bulkConfirmation = operation.bulkConfirmation === undefined ? true : operation.bulkConfirmation;  /* set bulk confirmation to true if not specified */
            viewObj.bulkOperations.push(operation);                                                                     /* and push rowOperation to bulkOperations array */

            if (isDefined(ngShow)) {        /* in addition, if row operation is to be set conditionally, then attach the conditional string to the operation (will be eval'ed) */
                operation.ngShow = ngShow.replace(new RegExp("entity.", 'g'), "");  /* replace 'entity.' since that is a row specific terminlogy */
                viewObj.ngShows[operation.operationId] = false;                     /* and for bulk operations with ngShow, set ngShows for its operationID to false */
            } else
                viewObj.ngShows[operation.operationId] = true;                      /* for bulk operations without ngShow, set ngShows for its operationID to true */
        }
        rowOperationIndex++;            /* increment rowOperationIndex */
    }

    if (startDropDown) actionCellTemplate += '</ul>';   /* once done looping over row Operations, close the list if we showed some buttons in dropdown */ // '</div>';
    actionCellTemplate += '</div>';                     /* and finally close the div we start with */
    console.log(actionCellTemplate)

    if (actionCellTemplate !== '<div class="btn-group" uib-dropdown dropdown-append-to-body></div>') {  /* if action cell template is not empty, add a column by name of actions and with a user suppplied column label. Suppress exporting of ths column when writing to pdf/excel files */ //if (actionCellTemplate !== '<div class="btn-group"></div>') {
        viewObj.gridOptions.columnDefs.push({ name: "Actions", displayName: viewObj.actionColumnLabel || "Actions", "cellTemplate": actionCellTemplate, "width": "*", "cellClass": "text-center", enableCellEdit: false, pinnedLeft: viewObj.pinnedLeft || false, pinnedRight: viewObj.pinnedRight || false });
        viewObj.gridOptions.exporterSuppressColumns = ['Actions'];
    }

    resolveGridColumnLengths(viewObj, actionCellLength, getParamLabel);

    for (let operation of viewObj.columnOperations || []) {    /* for every columns operation */
        console.log(operation, columnOperationIndex)
        let column = viewObj.gridOptions.columnDefs.find(column => column.name === operation.column);
        console.log(column)
        if (isDefined(column) && !isDefined(column.cellTemplate)) {
            if (operation.type === 'modal') {
                let ngShow = '';    /* ngShow contains dynamically generated conitional evaluation statement (based on the options set in showOn property in stateview) */
                for (let condition of operation.showOn || [])   /* For every condition, append to ngShow string. */
                    ngShow += 'row.entity.' + condition.name + ' ' + condition.condition + ' ' + condition.value + (condition.next ? ' ' + condition.next + ' ' : '');
                column.cellTemplate = '<button ng-show="' + (ngShow !== '' ? ngShow : true) + '" class="btn btn-primary btn-sm" ng-click="grid.appScope.executeColumnOperation(row, grid.appScope.columnOperations[' + columnOperationIndex + '])">{{grid.appScope.columnOperations[' + columnOperationIndex + '].label}}</button>';
                console.log(column)
                columnOperationIndex++;
            }
        }

    }

    /* If grid in not part of a searchview, then execute operation to fill grid data. */
    if (viewObj.panelType !== "SearchView" && viewObj.panelType !== 'SubmitView' && viewObj.operationId !== 'Bulkiterator' && viewObj.panelType !== 'DynamicGrid') {
        let [response, isSuccess] = await httpService.request(viewObj.operationId, httpParams);
        if (viewObj.gridOptions)
            viewObj.gridOptions.data = response.data.rows;
           
        
     
    }

    return [rowOperationIndex, columnOperationIndex];   /* return index so that if there are multiple grids in the viewsObj, then the next grid will have proper indexing available for its rowOperations */
}

export let resolveGridColumnLengths = (viewObj, actionCellLength, getParamLabel) => {
    /* Setting name of each column - if not defined in metadata (as displayName property on columnDefs), then use name of column and process it to set name. Push length of each columnName to an array, and add padding to that length */
    let columnLengths = [];
    for (let column of viewObj.gridOptions.columnDefs) {
        
        column.displayName = column.displayName || getParamLabel(column);
     
        columnLengths.push(column.displayName.length + 15);
    }
    if (viewObj.gridOptions.columnDefs[viewObj.gridOptions.columnDefs.length - 1].name === 'Actions') { /* disregard length of action column if present and recalculate */
        columnLengths.pop();
        columnLengths.push(actionCellLength * 1.5);
    }

    /* Setting width of all columns, proportional to length of column name. Also set width of grid based on number of columns as percentage */
    let totalLength = columnLengths.reduce((sum, value) => sum + value);
    viewObj.gridOptions.columnDefs.forEach(function (column, i) {
        let numberColumns = viewObj.gridOptions.columnDefs.length;
         let width =numberColumns <= 2 ? 50 + (actionCellLength === 0 ? 0 : 6) : numberColumns <= 10 ? 33 + (actionCellLength === 0 ? 0 : 5) : numberColumns <= 15 ? 17 + (actionCellLength === 0 ? 0 : 4) : numberColumns <= 20 ? 15 + (actionCellLength === 0 ? 0 : 3) : numberColumns <= 25 ? 14 + (actionCellLength === 0 ? 0 : 2) : numberColumns <= 30 ? 12 + (actionCellLength === 0 ? 0 : 1) : 10 + (actionCellLength === 0 ? 0 : 1);        let percent = (columnLengths[i] / totalLength * width * numberColumns + 0.5) | 0;
        column.width = percent + "%";
    });
}
/* Generating action cell template via angular ui-bootstrap COuld not get it working with vanialla version. Strings for those were tried, save beloe for record:

Bootstrap v4.0
1. Carrot string:
    actionCellTemplate += '<button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button> <div class="dropdown-menu">';

2. Dropdowns as buttons:
    actionCellTemplate += '<button ng-show="' + (ngShow ? 'row.entity.' + ngShow : true) + '"class="dropdown-item" type="button" ng-click="grid.appScope.' + operation.type + 'Row(row, grid.appScope.rowOperationIds[' + index + '])">{{grid.appScope.rowOperationLabels[' + index + ']}}</button>';
    
Bootstrap v3.3.7
1. Carrot String:
    actionCellTemplate += '<button type="button" class="btn btn-info btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button> <ul class="dropdown-menu">';

2. Dropdown as List Items:
    actionCellTemplate += '<li><a ng-show="' + (ngShow ? 'row.entity.' + ngShow : true) + '" ng-click="grid.appScope.' + operation.type + 'Row(row, grid.appScope.rowOperationIds[' + index + '])">{{grid.appScope.rowOperationLabels[' + index + ']}}</a></li>';

*/