(function() {
    'use strict';

    angular.module('cvma.contact').controller('ContactCtrl', ContactCtrl);

    /* @ngInject */
    function ContactCtrl(contactFactory) {
        /*jshint validthis: true */
        var vm = this;
        vm.message = {};
        vm.sendMessage = sendMessage;
        vm.sending = false;

        init();

        function init() {
        }

        function sendMessage(){
            var subject = vm.message.name + " has sent a message to the chapter.";
            var body = "Name: " + vm.message.name + ".<br />Email: " + vm.message.email + ".";
            if (vm.message.phone)
                body += "<br />Phone: " + vm.message.phone + ".";
            if (vm.message.bike)
                body += "<br />Bike: " + vm.message.bike + ".";
            body += "<br />Message: " + vm.message.body;

            vm.sending = true;
            contactFactory.send('jnr.mccarty@yahoo.com;virgi@surewest.net;cvma33.7@gmail.com;', subject, body).then(function(response){
                vm.sending = false;
            }, function(errorResponse){
                vm.sending = false;
            });
        }
    }
})();