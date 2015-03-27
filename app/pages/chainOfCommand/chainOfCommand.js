(function() {
    'use strict';

    angular.module('cvma.chainOfCommand').controller('ChainOfCommandCtrl', ChainOfCommandCtrl);

    /* @ngInject */
    function ChainOfCommandCtrl(UserService) {
        /*jshint validthis: true */
        var vm = this;

        init();

        function init() {
            UserService.getOfficers().then(function(response){
                vm.officers = response;
            });
        }
    }
})();