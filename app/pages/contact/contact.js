(function() {
    'use strict';

    angular.module('cvma.contact').controller('ContactCtrl', ContactCtrl);

    /* @ngInject */
    function ContactCtrl(contactFactory) {
        /*jshint validthis: true */
        var vm = this;
        vm.message = {};
        vm.sendMessage = sendMessage;

        init();

        function init() {
        }

        function sendMessage(){
            var subject = vm.message.name + " has sent a message to the chapter.";
            var body = "Name: " + vm.message.name + ". Email: " + vm.message.email + ".";
            if (vm.message.phone)
                body += " Phone: " + vm.message.phone + ".";
            if (vm.message.bike)
                body += " Bike: " + vm.message.bike + ".";
            body += " Message: " + vm.message.body;
            contactFactory.send('', subject, body);
        }
    }
})();