(function() {
    'use strict';

    angular
        .module('cvma.main')
        .controller('MainCtrl', MainCtrl);

    /* @ngInject */
    function MainCtrl(UserService) {
        /*jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        	UserService.getAll().then(function(response){
                vm.users = response;   
            }, function(errorResponse){
                
            });
        }
    }
})();