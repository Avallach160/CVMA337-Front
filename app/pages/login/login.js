(function() {
    'use strict';

    angular.module('cvma.login').controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.loginClick = loginClick;

        init();

        function init() {
        }

        function loginClick(){
            
        };
    }
})();