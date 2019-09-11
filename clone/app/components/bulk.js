import { resolveGridColumnLengths } from '../services/resolve/grid';
export const bulkComponent = {
    bindings: {
        viewsObj: "<",
        resolve: "<",
        close: '&',
        dismiss: '&'
    },
    controller: ["$scope", "$state", "$filter", "httpService", "$stateParams", 'metaDataService', 'toastService', '$timeout', 'utilityService', '$interval', 'modalService', function ($scope, $state, $filter, httpService, $stateParams, metaDataService, toastService, $timeout, utilityService, $interval, modalService) {
        let vm = this;

        vm.$onInit = () => {
            vm.viewsObj = vm.resolve ? vm.resolve.viewsObj : vm.viewsObj;
            // vm.viewsObj.fileParam = {};
            vm.showFileBrowser = false;
            vm.showMetaData = false;
            vm.showSubmitButton = false;
            vm.selectedAPI = {};
            vm.parsedMetaData = {};
            vm.parsedMetaDataArray = [];
            vm.userInputMetaData = [];
            console.log(httpService.getOperation('FileImport'))
        }

        vm.onSelectionChangeEvent = param => {
            vm.parsedMetaData = {};
            vm.viewsObj.fileParam.value = null;
            // $timeout(() => {
            vm.showMetaData = false;
            vm.showFileBrowser = false;
            vm.showSubmitButton = false;
            vm.selectedAPI = {};
            // }, 0);
            if (isDefined(param.value)) {
                // vm.showMetaData = true;
                vm.showFileBrowser = true;
                vm.selectedAPI = param.options.find(option => option.value === param.value);
                JSON.parse(vm.selectedAPI.metaData).forEach(meta => {
                    Object.keys(meta).forEach(key => {
                        if (key !== 'allowOverwrite' && key !== 'defaultValue') {
                            vm.parsedMetaData[meta[key]] = { param: key, allowOverwrite: meta.allowOverwrite };
                            if (meta.defaultValue)
                                vm.parsedMetaData[meta[key]].defaultValue = meta.defaultValue;
                        }
                    });

                });
                vm.parsedMetaDataArray = [];
                vm.userInputMetaData = [];
                Object.keys(vm.parsedMetaData).forEach(meta => {
                    if (vm.parsedMetaData[meta].allowOverwrite || isDefined(vm.parsedMetaData[meta].defaultValue))
                        vm.parsedMetaDataArray.push({ name: vm.parsedMetaData[meta].param, label: vm.parsedMetaData[meta].allowOverwrite ? meta : '', value: vm.parsedMetaData[meta].defaultValue ? vm.parsedMetaData[meta].defaultValue : '' });
                });

                vm.parsedMetaDataArray.forEach(meta => {
                    if (isDefined(meta.label))
                        vm.userInputMetaData.push(meta);
                });
                // console.log(vm.parsedMetaData)
                // console.log(vm.parsedMetaDataArray)
                //console.log(JSON.parse(param.options.find(option => option.value === param.value).metaData));
            }
            // else {
            //     // vm.viewsObj.fileParam = {};
            //     $timeout(() => {
            //         vm.showMetaData = false;
            //         vm.showFileBrowser = false;
            //         vm.showSubmitButton = false;
            //     }, 0);
            // }
        }

        vm.processFile = async param => {
            console.log(param)
            /*show toast on wrong file type and hides the hidden section if shown. param.value is the file and if no file is selected it is null. For the file inpput, it is also necessary to check if file was actually selected as opposed to no file being selected so this check is necessary */
            if (param.value === null && document.getElementById(param.name).files.item(0) !== null) {
                toastService.createToast('error', 'Error', 'Invalid File Type');
                $timeout(() => {
                    vm.showMetaData = false;
                    vm.showSubmitButton = false;
                }, 0);
                // $timeout(() => vm.viewsObj.showHidden[section.id][param.name] = null, 0);
            } else if (param.value !== null) {                              /* show hidden section if file is selected and is of valid type*/
                /* parse file - sending File and its extension */
                let [isSuccess, errorMessage, headers] = await utilityService.getCSVHeaders(param.value, param.value.name.substring(param.value.name.lastIndexOf('.')))
                if (isSuccess) {                                            /* if fileParsing was successful */
                    console.log(headers);
                    let metaDataHeaders = Object.keys(vm.parsedMetaData);
                    console.log(Object.keys(vm.parsedMetaData))
                    if (headers.length !== metaDataHeaders.length)
                        toastService.createToast('error', 'Error', 'Mismatch in column headers. Expected ' + metaDataHeaders.length + ', got ' + headers.length, 10000);
                    else {
                        let trimmedHeaders = [];
                        let trimmedMetaDataHeaders = [];
                        headers.forEach(header => { trimmedHeaders.push(header.trim()) });
                        metaDataHeaders.forEach(header => { trimmedMetaDataHeaders.push(header.trim()) });
                        if (trimmedHeaders.every(header => metaDataHeaders.includes(header)) && metaDataHeaders.every(header => headers.includes(header))) {
                            $timeout(() => {
                                vm.showMetaData = true;
                                vm.showSubmitButton = true;
                            }, 0);

                        } else
                            toastService.createToast('error', 'Error', 'Column Mismatch in File Headers and Expected Headers. Got ' + headers.reduce((acc, val) => acc + '"' + val + '"' + ', ', '').slice(0, -2) + ', expected ' + trimmedHeaders.reduce((acc, val) => acc + '"' + val + '"' + ', ', '').slice(0, -2) + '. Please check file!', 10000);
                    }
                } else              /* file Parsing unsuccesfull - file has error need to upload file again */
                    toastService.createToast('error', 'Error', errorMessage);
            } else {                                                        /* hide hidden section as no file was selected*/
                // $timeout(() => vm.viewsObj.showHidden[section.id][param.name] = null, 0);
                // vm.showResult = false;
                $timeout(() => {
                    vm.showMetaData = false;
                    vm.showSubmitButton = false;
                }, 0);
            }
        }

        vm.submitFile = async () => {
            // console.log(vm.parsedMetaData, vm.parsedMetaDataArray, vm.userInputMetaData);
            let metaData = copyObject(vm.parsedMetaData);
            vm.parsedMetaDataArray.forEach(meta => {
                for (let param in vm.parsedMetaData)
                    if (vm.parsedMetaData[param].param === meta.name && isDefined(meta.value)) {
                        metaData[param].defaultValue = meta.value;
                        break;
                    }
            });
            console.log(vm.parsedMetaData, metaData)
            let [response, isSuccess] = await httpService.request('FileImport', { file: vm.viewsObj.fileParam.value, targetAPI: vm.selectedAPI.api, metaData: JSON.stringify(metaData), templateID: vm.selectedAPI.templateID, apiID: vm.selectedAPI.apiID });

            if (response && response.data && response.data.v_ProvisioningBatchID)
                $timeout(() => {
                    $stateParams['BatchID'] = response.data.v_ProvisioningBatchID
                    $state.go('top.gui.fileOperationsBatchResultsDashboard.gui.failed.gui', { BatchID: response.data.v_ProvisioningBatchID });
                }, 0);
        }

    }],
    templateUrl: 'app/templates/bulk.html'
}