(function() {
    'use strict';

    angular
        .module('cvma.main')
        .controller('MainCtrl', MainCtrl);

    /* @ngInject */
    function MainCtrl(UserService, localStorageService) {
        /*jshint validthis: true */
        var vm = this;

        init();

        function init() {
            console.log(localStorageService.get('usersToken'));
        	UserService.getAll().then(function(response){
                vm.users = response;   
            }, function(errorResponse){
                
            });
        }
    }
})();