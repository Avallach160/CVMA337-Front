(function() {
    'use strict';

    angular.module('cvma.login').controller('RegisterCtrl', RegisterCtrl);

    /* @ngInject */
    function RegisterCtrl(UserService) {
        /*jshint validthis: true */
        var vm = this;

        vm.register = register;

        init();

        function init() {
        };

        function register(){
            UserService.register(vm.email, vm.password, vm.firstName, vm.lastName, vm.roadName, vm.motorcycle, vm.phoneNumber).then(function(response){
                
            }, function(errorResponse){
                
            });
        };
    }
})();