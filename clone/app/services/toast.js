/** Service to create toast messages. Helper method createToast (type, title, body, timeout) */  
export class toastService {
    constructor(toaster, $timeout) {
        this.toaster = toaster;
        this.$timeout = $timeout;
    }

    /** creates a toast message with the options given. toaster.pop is called after 1 ms timeout to ensure a digest cycle passes and toast is rendered properly. !!! ADDITIONAL OPTIONAL PROPERTIES LIKE POSITION CAN BE PASSED - IMPLEMENT OR MAKE DEV AWARE OF THEM!!!!!
     * @param {string} type - 'info', 'warning', 'error', 'success', 'wait' - defaults to info
     * @param {string} title - Title of toast message. Default is empty string
     * @param {object} body - Body of toast message
     * @param {number} timeout - How long after the toast message is automatically dismissed - default 3s.  
    */
    createToast(type, title, body, timeout) {
        let toaster = this.toaster;
        this.$timeout(() => toaster.pop({
            type: type || 'info',
            title: title || '',
            body: body,
            timeout: timeout || 3000
        }), 1);
    }
}
toastService.$inject = ['toaster', '$timeout'];     /* inject these angular dependancies */