/** Service to render any component inside a modal. Helper method createModal (viewObj, data) */
export class modalService {
    constructor(metaDataService, $uibModal) {
        this.metaDataService = metaDataService;
        this.$uibModal = $uibModal;
    }

    /** Creates a modal window and display the component depending on panelType defined in the view object given to this function
     * @param {object} viewObj - the view object to be displayed inside the modal. ONLY DONE FOR FORM AS OF YET !!!
     * @param {object} data    - this is basically $stateParams and any data attached to $stateParams. Can be url parameter, row data etc. This is to help resolve the viewObj before being rendered into the modal, so that inherited properties/fields are implicitly filled and not displayed
     */
    async createModal(viewObj, data) {
        /* choose the component to be rendered inside modal based on view object passed */
        let originalData = copyObject(data);
        let originalViewObj = copyObject(viewObj);
        await this.metaDataService.resolve(originalViewObj, originalData);    /* resolve the viewsObj */
        if (Array.isArray(originalViewObj))
            for (let i = originalViewObj.length - 1; i >= 0; i--)
                if (originalViewObj[i].panelType === 'ReadOnlyView' && originalViewObj[i].Params.length === 0)
                    originalViewObj.splice(i, 1);

        let panelType = Array.isArray(originalViewObj) ? originalViewObj[0].panelType : originalViewObj.panelType;
        let component = (panelType.indexOf("List") >= 0 || panelType === 'SubmitView') ? 'gridComponent' : (panelType === "ReadOnlyView" || panelType.toLowerCase().indexOf('detail') >= 0) ? 'detailComponent' : 'formComponent';
        let metaDataService = this.metaDataService;
        return new Promise((resolve, reject) => {           /* return a promise so that if a viewObj needs to to something on dismissal of modal, they get an event */
            this.$uibModal.open({
                backdrop: true,                             /* enable dismissing on clicking outside the modal */
                component: component,
                size: 'lg',                                 /* size is large- potential for passing it from somewhere in metadata ??? !!! */
                resolve: {                                  /* almost works like resolve of ui-router - except that the bindings (in this case viewsObj) is not attached to the scope of the component (i.e. not $scope.viewsObj) but rather on $scope.resolve.viewsObj. Hence need to bind a property called resolve on component. */
                    viewsObj: async function () {
                        // await metaDataService.resolve(originalViewObj, originalData);    /* resolve the viewsObj */
                        return originalViewObj;
                    }
                }
            }).result.then(response => {    /* callback when closed by clicking outside the close button */
                console.log('modal-component closed at: ' + new Date());
                resolve(true);
            }).catch(error => {             /* callback when dismissed on clicking outside the modal */
                console.log('modal-component dismissed at: ' + new Date());
                resolve(false);
            });
        });




        // .result.then(response => { }, () => {
        //     console.log('modal-component dismissed at: ' + new Date());     /* callback when dismissed on clicking outside the modal */
        // });


        //animation: $ctrl.animationsEnabled, {}                            /* POTENTIAL OPTIONS FOR ENABLING ANIMATIONS AND OTHER OPTION !!! */
    }
}
modalService.$inject = ['metaDataService', '$uibModal'];             /* inject these angular dependancies */