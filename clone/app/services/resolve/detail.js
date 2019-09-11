import { resolveDynamic } from './dynamic';
import {resolveGridColumnLengths} from './grid';
/** A method to resolve detail component
 * @param {object} viewObj - metadata for the current view object
 * @param {object} httpParams - params & their values potentially required to execute REST operation for the detail Component
 * @param {object} httpService - service to execute REST operations
*/
export let resolveDetail = async (viewObj, httpParams, httpService, $stateParams) => {
    if (viewObj.panelType === 'ReadOnlyView') {

        let [response, isSuccess] = isDefined(viewObj.operationId) ? await httpService.request(viewObj.operationId, httpParams) : [viewObj, true];

        viewObj.detailData = response.data;

        for (let mapping in viewObj.mappings)
            if (isDefined($stateParams[viewObj.mappings[mapping]]))
                viewObj.detailData[mapping] = $stateParams[viewObj.mappings[mapping]];

        if (Array.isArray(viewObj.detailOperations)) {    /* if row operations are defined, rearrange the array so that operations shown in dropdown are pushed to the end */
            if (viewObj.showAllOperationsInDropDown)
                viewObj.detailOperations.forEach(operation => operation.showInDropDown = true);
            else
                viewObj.detailOperations.sort((a, b) => (a.showInDropDown || false) === (b.showInDropDown || false) ? 0 : b.showInDropDown ? -1 : 1);
            viewObj.hasDropDown = !viewObj.detailOperations.every(operation => !operation.showInDropDown);
            if (viewObj.hasDropDown)
                viewObj.dropDownIndex = viewObj.detailOperations.map(operation => operation.showInDropDown).indexOf(true);
            console.log(viewObj.hasDropDown)
        }

        for (let operation of viewObj.detailOperations || []) {
            operation.label = operation.label || (operation.type[0].toUpperCase() + operation.type.substring(1) + ' ' + operation.operationId);
            if (operation.type === 'update')
                for (let param of operation.viewsObj.Params)
                    param.value = viewObj.detailData[param.name];
            else
                operation.confirmation = operation.confirmation === undefined ? true : operation.confirmation;
        }
        /* If updateableReadOnlyView update panels defined for this readonlyview, then fill each parameter of those panels from the result of REST call */
        if (Array.isArray(viewObj.updatePanel))
            if (viewObj.updatePanel.length > 0)
                for (let updateableReadOnlyView of viewObj.updatePanel)
                    for (let param of viewObj[updateableReadOnlyView].Params)
                        param.value = viewObj.detailData[param.name];
        /* */

        let dynamicAVPs = {}; let dynamicViewObj = [];
        /* If readonlyview has Params defined, then fill those params with values from the result of REST call */
        let params = []
        for (let param of viewObj.Params || []) {
            if (param.ctype !== 'dynamic') {
                param.value = viewObj.detailData[param.name];
                params.push(param)
            } else {
                dynamicViewObj.push({ panelType: '', heading: param.label || param.name, name: param.name });
                dynamicAVPs[param.name] = viewObj.detailData[param.name];
            }

        }
        if (viewObj.Params) viewObj.Params = params;
        console.log(dynamicAVPs)
        dynamicAVPs = await resolveDynamic(dynamicAVPs, {}, {}, {});
        dynamicAVPs.detail.forEach(detail => {
            //console.log(detail)
            let panel = dynamicViewObj.find(obj => obj.name === detail.name);
            panel.panelType = 'ReadOnlyView';
            panel.Params = [];
            if (isDefined(detail.value))
                Object.keys(detail.value).forEach(key => {
                    console.log(key, detail.value[key])
                    if (!isDefined(detail.value[key]) || typeof detail.value[key] !== 'object' || (Array.isArray(detail.value[key]) && detail.value[key].every(element => typeof element !== 'object')))
                        panel.Params.push({ name: key, value: detail.value[key], direction: 'out', ctype: 'label' });
                    else
                        panel.Params.push({ name: key, value: detail.value[key], direction: 'out', ctype: 'object' });
                    delete (panel.name);
                });
            else {
                panel.Params.push({ name: detail.name, value: detail.value, direction: 'out', ctype: 'label' });
                delete (panel.name);
            }
        });

        dynamicAVPs.grid.forEach(grid => {
            let panel = dynamicViewObj.find(obj => obj.name === grid.name);
            panel.panelType = 'ListView';
            panel.heading = grid.name;
            panel.gridOptions = {
                enableSorting: true,
                paginationPageSizes: [10, 20, 50, 100],
                paginationPageSize: 10,
                data: null,
                enableGridMenu: true,
                enableRowHeaderSelection: false,
                enableRowSelection: false,
                enableScrollbars: true,
                enableFiltering: true,
                columnDefs: []
            }
            if (grid.value.length) {
                Object.keys(grid.value[0]).forEach(column => {
                    panel.gridOptions.columnDefs.push({ name: column, displayName: column, cellClass: "text-center", headerCellClass: "text-center", enableCellEdit: false, width: '*' });
                });
                panel.gridOptions.data = grid.value;
                resolveGridColumnLengths(panel, 0);
            }
        });
        console.log(dynamicViewObj)

        /* ELSE - use case is that only updateableReadOnlyView panels need to be displayed - just save the data from REST on a data property on the viewObj (since some values from the REST call may be implicityly required by the updateablereadonlyviews */
        viewObj.data = viewObj.detailData;//[];
        return [dynamicViewObj, dynamicViewObj.length];
        //viewObj = [viewObj].concat(dynamicViewObj);
        //console.log(viewObj)
        // Object.keys(viewObj.detailData).forEach(key => {
        //     viewObj.data.push({ name: key, value: viewObj.detailData[key] })
        // });


        // viewObj = [viewObj];
        // let position = 0;
        // //vm.viewsObj.forEach((viewObj, key) => {
        // if (Array.isArray(viewObj[0].updatePanel))
        //     if (viewObj[0].updatePanel.length > 0) {
        //         // position = position + key + 1;
        //         console.log('detaill')
        //         position = position + 1;
        //         for (let updateableReadOnlyView of viewObj[0].updatePanel) {
        //             viewObj[0][updateableReadOnlyView].parentData = isDefined(viewObj[0].Params) ? viewObj[0].Params : viewObj[0].data;
        //             // for (let mapping in viewObj[0].mappings[viewObj[0].operationId])
        //             //     viewObj[0][updateableReadOnlyView].parentData.push({ name: mapping, value: $stateParams[viewObj[0].mappings[viewObj[0].operationId][mapping]] })
        //             viewObj.splice(position++, 0, viewObj[0][updateableReadOnlyView]);
        //         }
        //     }
        // console.log(viewObj)
        //})
    } else {
        // console.log("RESOLVE DEATIL: resolving ", viewObj.panelType);
        // viewObj.heading = "Confirm " + viewObj.heading;
        // let sections = viewObj.sections ? viewObj.sections : [viewObj];
        // console.log(sections)
        // let newViewObj = [];
        // sections.forEach(section => { newViewObj.push(section); });
        // viewObj = JSON.parse(JSON.stringify(newViewObj));
        // console.log(viewObj)
        return [[], 0];
    }
}