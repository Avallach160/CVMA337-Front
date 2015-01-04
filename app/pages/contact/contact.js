(function() {
    'use strict';

    angular.module('cvma.contact').controller('ContactCtrl', ContactCtrl);

    /* @ngInject */
    function ContactCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.message = {};
        vm.sendMessage = sendMessage;

        init();

        function init() {
        }

        function sendMessage(){
            
        }
    }
})();