import { operationButtonClasses } from '../services/metaData';
export const detailComponent = {
    bindings: {
        viewsObj: "<",
        resolve: "<",
        close: '&',
        dismiss: '&'
    },
    controller: ["$scope", "$state", '$stateParams', 'utilityService', 'httpService', 'metaDataService', 'modalService', '$timeout', function ($scope, $state, $stateParams, utilityService, httpService, metaDataService, modalService, $timeout) {

        $scope.utilityService = utilityService;
        let vm = this;

        /* ON CONTROLLER INITIAZLIZTION, CHECK FOR UPDATEABLE READ ONLY VIEWS AND PUSH THEM TO THE VIEWSOBJ */
        vm.$onInit = () => {
            //console.log(copyObject($stateParams), copyObject($state.current.data));
            vm.viewsObj = vm.resolve ? vm.resolve.viewsObj : vm.viewsObj;
            vm.operationButtonClasses = operationButtonClasses;
            console.log(vm.viewsObj)
            if (isNotDefined(vm.viewsObj.panelType) || vm.viewsObj.panelType === 'ReadOnlyView') {
                let position = 0;
                vm.viewsObj.forEach((viewObj, key) => {
                    if (Array.isArray(viewObj.updatePanel))
                        if (viewObj.updatePanel.length > 0) {
                            position = position + key + 1;
                            for (let updateableReadOnlyView of viewObj.updatePanel) {
                                viewObj[updateableReadOnlyView].parentData = viewObj.data;
                                for (let mapping in viewObj.mappings)
                                    viewObj[updateableReadOnlyView].parentData[mapping] = $stateParams[viewObj.mappings[mapping]];
                                vm.viewsObj.splice(position++, 0, viewObj[updateableReadOnlyView]);
                            }
                        }
                });
            } else if (vm.viewsObj.panelType.indexOf("List") >= 0) {

            } else {

            }
        }
        /**/
        vm.rightClick = param => {
            console.log("DETAIL:",param);
        };
        let executeDetailOperation = vm.executeDetailOperation = async (viewObj, detailOperation) => {
            let data = Object.assign({}, copyObject(viewObj.detailData), copyObject($stateParams));    /* concat row data and state params */
            console.log(data, copyObject($stateParams), copyObject(viewObj.detailData))
            if (detailOperation.type === 'update') {
                modalService.createModal(detailOperation.viewsObj, data);
            } else if ((detailOperation.confirmation && confirm(detailOperation.type === 'action' ? "Apply action?" : detailOperation.type[0].toUpperCase() + detailOperation.type.substring(1) + " record?")) || !detailOperation.confirmation) {
                let [response, isSuccess] = await httpService.buildAndSendRequest(detailOperation.operationId, detailOperation.mappings, $stateParams);
                if (isSuccess) {
                    $stateParams.reload = !$stateParams.reload;
                    $state.go($state.current.name, $stateParams);
                }
            }
        }

        /* ON PRESSING OF UPDATE BUTTON, OPEN A NEW MODAL */
        vm.updateData = async (viewObj) => {
            for (let param in viewObj.parentData)                   /* attach all parent data to stateParams */
                $stateParams[param] = viewObj.parentData[param];
            let instance = await modalService.createModal(viewObj, $stateParams);
            // if (isDefined(instance))                                /* if modal is closed without submitting, reset all data */
            //     for (let param of viewObj.Params)
            //         param.value = viewObj.parentData[param.name];
        }
        /**/

        vm.viewObject = (viewObj, param) => {
            modalService.createModal([{ panelType: "ReadOnlyView", Params: [{ ctype: 'dynamic', name: param.name }], data: { [param.name]: JSON.stringify(param.value) }, heading: param.label || param.name }], {});

            // modalService.createModal([{ panelType: (Array.isArray(param.value) ? "ListView" : "ReadOnlyView"), Params: [{ ctype: 'dynamic', name: param.name }], data: { [param.name]: JSON.stringify(param.value) }, heading: param.label || param.name }], {})

            // let params = [];
            // let data = {};
            // Object.keys(param.value).forEach(key => {
            //     params.push({ ctype: 'dynamic', name: key });
            //     data[key] = param.value[key];
            // });
            // modalService.createModal([{ panelType: "ReadOnlyView", Params: params, data: data, heading: param.label || param.name }], {})
        }


        vm.submit = async viewObj => {
            let [response, isSuccess] = await httpService.request(viewObj.operationId, viewObj.requestParams, viewObj.toastKey);    /* execute REST request */
            let result = isSuccess ? "success" : "failure";                                                                         /* key for success/failure */
            if (isDefined(viewObj.nextState) && isDefined(viewObj.nextState[result])) {                                             /* if next state defined */
                let stateParams = {};
                if (isDefined(viewObj.nextState[result].params))                                                    /* if next state needs state params, then populate them */
                    for (let param in viewObj.nextState[result].params)
                        stateParams[param] = response.data[viewObj.nextState[result].params[param]];

                /* !!! IF WE WANT TO SEND BY URL, UNCOMMENT THIS AND HAVE URL DEFINED IN YOUR STATEVIEW. BUT NEED TO CHECK HOW TO SEND MULTIPLE STATE PARAMS WITHTHIS METHOD (MULTIPLE ARE SENT WITH STATE.GO!) */
                // let url = viewObj.nextState[result].url;
                // for (let param in viewObj.nextState[result].params) 
                //     url = url.replace(':' + param, response.data[viewObj.nextState[result].params[param]]);

                console.log("STATE PARAMS SUBMITTED TO NEXT STATE", stateParams, response);
                $timeout(() => { $state.go(viewObj.nextState[result].state, stateParams); /*window.location.href = HASH + url; */ }, 0);      /* go to next state -> wrapped in $timeout b/c otherwise state is only transitioned to once, other times it get rejected. E.g. if not wrapped in $timeout, and create subscribers, for the 1st created subscriber it would take us to dashboard but for any subsequent ones it wont! */
            }
            if (isSuccess) {        /* if REST wast success and there was no next state, reload parent state and close modal, else remain here */
                /* This is a work around to reload:true reloading all parent states. Having a state param defined for the state you want to reload and flipping it is enough to cause the state to be reloaded (and only that state) when yo go directly to it. */
                $stateParams.reload = !$stateParams.reload;
                $state.go($state.current.name, $stateParams);
                //vm.close();
            }
        }
    }],
    templateUrl: 'app/templates/detail.html'
}