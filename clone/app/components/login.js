export const loginComponent = {
    bindings: {
        username: '<',
        password: '<',
    },
    controller: ["httpService", "$state", "$window", "$location", function (httpService, $state, $window, $location) {
        let vm = this;
        vm.$onInit = () => {
            // if ($state.params.nextState.state === null)
            //     $window.location.reload()
        }
        vm.formSubmit = async function () {
            let loginSuccess = await httpService.login(vm.username, vm.password);
            if (loginSuccess) {
                console.log("LOGIN FORM SUBMIT", copyObject($state.params));
                if ($state.params.url)
                    window.location.href = HASH + $state.params.url;
                else
                    $state.go($state.params.nextState.state);
            } else {
                vm.username = ""; vm.password = "";
                vm.warning = "Incorrect username or password"
            }
        }
    }],
    templateUrl: 'app/templates/login.html'
}