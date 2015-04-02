(function() {
    'use strict';

    angular.module('cvma.contact').factory('contactFactory', contactFactory);

    /* @ngInject */
    function contactFactory(webRequest, intcConfigurator, toaster) {
        var service = {
            send: send
        };
        return service;

        ////////////////

        function send(to, subject, body) {
        	webRequest(intcConfigurator + serviceRoot + 'mail', 'POST', { to: to, subject: subject, body: body}).then(function(response){
        		toaster.pop('success', '', 'Email sent. A chapter representative will get back to you soon.');
        	}, function(errorResponse){
        		toaster.pop('error', '', 'Error sending the email.');
        	});
        }
    }
})();