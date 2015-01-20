(function() {
    'use strict';

    angular.module('cvma.login').controller('RegisterCtrl', RegisterCtrl);

    /* @ngInject */
    function RegisterCtrl(UserService, localStorageService) {
        /*jshint validthis: true */
        var vm = this;

        vm.checkPwMatch = checkPwMatch;
        vm.pwMatchError = false;
        vm.register = register;

        init();

        function init() {
        };

        function checkPwMatch(){
            vm.pwMatchError = vm.password !== vm.passwordConfirmation;
        };

        function register(){
            UserService.register(vm.email, vm.password, vm.passwordConfirmation, vm.firstName, vm.lastName, vm.roadName, vm.motorcycle, vm.phoneNumber).then(function(response){
                
            }, function(errorResponse){
                
            });
        };
    }
})();