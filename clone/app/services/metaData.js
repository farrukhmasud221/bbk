import { resolveDetail } from './resolve/detail';
import { resolveGrid } from './resolve/grid';
import { resolveForm } from './resolve/form';
import { resolveMenu } from './resolve/menu';
import { resolveDynamic } from './resolve/dynamic';
import { resolveBulk } from './resolve/bulk';


/** Service to resolve viewsObj i.e. metaData. Call .resolve method of service on all viewsObj*/
export class metaDataService {
    constructor(httpService, utilityService, menuService) {  /* KEEP A COPY OF INJECTED SERVICES */
        this.httpService = httpService;                   /* service to execute REST operations */
        this.utilityService = utilityService;                   /* utility service used to set column names for grid */
        this.menuService = menuService;                         /* used for populating menus & managing which menus are active at a given time */
    }

    /** Method that is always called after declaration of viewsObj (metadata) inside resolve of stateviews. Based on the panelType of the viewsObj, calls other methods to resolve the metadata. Mutates orginal object itself. Resolving metadata means things including (non-exhaustive):
        - setting grid widths and putting in row buttons
        - filling in Parameter values for forms that are supposed to be supplied from a grid row or state/url or scope. These fields are then not displayed but values are sent when REST request is made
        - filling in data for readonlyviews.
     * @param {object} viewsObj - an object or array containing the metadata for rendering a component
     * @param {object} stateParams - an object containing $stateParams and other data required to fill some parameters
     * @param {object} state - an object representing the state in which the viewsObject is resolved
    */
    async resolve(viewsObj, stateParams, state, $state) {
        if (isDefined($state))
            console.log(viewsObj.panelType, copyObject($state.current), copyObject($state.get(state.name)))
        let viewsObjArr = Array.isArray(viewsObj) ? viewsObj : [viewsObj];  /* if viewsObj is not an array, treat it as one. */
        let dynamicViewObj = []; let isDynamic = 0;
        let [rowIndex, columnIndex] = [0, 0];                               /* for keeping track of Grid's row & column operations */
        for (let viewObj of viewsObjArr) {                                  /* for each viewObj in array, check panel type and call appropriate method */
            let httpParams = this.resolveParams(viewObj, stateParams);   /* some hidden paramters may be required from state/url for the subsequent REST call - resolve them */
            if (viewObj.panelType.toLowerCase() === "listview" || viewObj.panelType.toLowerCase() === "submitview" || viewObj.panelType.toLowerCase() === 'dynamicgrid') /* if grid, resolve grid */
                [rowIndex, columnIndex] = await resolveGrid(viewObj, httpParams, this.httpService, this.getParamLabel, rowIndex, columnIndex);
            else if (viewObj.panelType.toLowerCase() === "readonlyview" || viewObj.panelType.toLowerCase() === 'formdetail')    /* if readonlyview, resolve detail */
                [dynamicViewObj, isDynamic] = await resolveDetail(viewObj, httpParams, this.httpService, stateParams, this.getParamLabel);
            else if (viewObj.panelType.toLowerCase() === "searchview") {                            /* if searchview, resolve form and grid */
                await resolveForm(viewObj, httpParams, stateParams, this.httpService, this.getParamLabel);
                [rowIndex, columnIndex] = await resolveGrid(viewObj, httpParams, this.httpService, this.getParamLabel, rowIndex, columnIndex);
            } else if (viewObj.panelType.toLowerCase().indexOf("menu") >= 0)                          /* if Menu, resolve menu */
                await resolveMenu(viewObj, stateParams, state, this.httpService, this.menuService, $state);
            else if (viewObj.panelType.toLowerCase() === "dynamic")                                 /* if dynamic, resolve dynamically */
                await resolveDynamic(viewObj, stateParams, state, this.httpService, this.menuService, $state);
            else if (viewObj.panelType.toLowerCase() === "bulk")                                 /* if dynamic, resolve dynamically */
                await resolveBulk(viewObj, this.httpService);
            else                                                                                    /* else, multiple types of from so resolve as form */
                await resolveForm(viewObj, httpParams, stateParams, this.httpService, this.getParamLabel);
        }

        if (isDynamic)
            dynamicViewObj.forEach(obj => viewsObj.push(obj));
        if (isDefined($state))
            console.log(viewsObj.panelType, copyObject($state.current), copyObject($state.get(state.name)))
    }

    /** Fill in the some of the parameters of the operationId associated with this viewObject from paramters in state. These can be directly passed from the state/url or be contained in a data object attached to stateParams. First check for implicit matches where the name of the paramters in stateParams is the same as it own nname. Then look for explicit mappings defined on viewsObj for this operationID and fill those. If both are found, explicit will overide implicit 
     * @param {object} viewObj - object containing metaData of the component to be rendered
     * @param {object} stateParams - an object containing $stateParams and other data required to fill some parameters
    */
    resolveParams(viewObj, stateParams) {
        let httpParams = {};
        for (let parameter of this.httpService.getParameters(viewObj.operationId) || []) {       /* get Parameters from swagger schema for this operationId */
            let value = stateParams[parameter] ? stateParams[parameter] : null;                               /* then look for paramters with that name in stateParams */
            if (isDefined(value))             /* if found in stateParams populate httpParams */
                httpParams[parameter] = value;
        }
        if (isDefined(viewObj.mappings))
            for (let mapping in viewObj.mappings) {    /* then for each mapping, look for param names specified in mapping in stateParams & data */
                let mappingName = viewObj.mappings[mapping];
                let value = stateParams[mappingName] ? stateParams[mappingName] : null;
                if (value !== null)                /* if found in stateParams populate httpParams, overriding any implicit result */
                    httpParams[mapping] = value;
            }
        return httpParams;
    }

    getParamLabel(param) {
        let label = param.label || param.name;
        if (label.toUpperCase().indexOf("V_") == 0 && label.length > 3) {
            label = label[2].toUpperCase() + label.substring(3);
            label = label.trim();
        }
        label = label.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
        return label;
    }
}

/** Some different buttons that have been set as default types for differenct operation types */
export let operationButtonClasses = {
    "edit": "btn btn-primary",
    "delete": "btn btn-danger",
    "action": "btn btn-info",
    "toggle": "btn btn-warning",
    "update": "btn btn-primary",
    "insert": "btn btn-success"
};

export let getParamLabel = param => {
    let label = param.label || param.name;
    if (label.toUpperCase().indexOf("V_") == 0 && label.length > 3) {
        label = label[2].toUpperCase() + label.substring(3);
        label = label.trim();
    }
    label = label.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
    return label;
}

metaDataService.$inject = ['httpService', 'utilityService', 'menuService'];   /* Inject these service dependancies */