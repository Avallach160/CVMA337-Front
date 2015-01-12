(function() {
    'use strict';

    angular.module('cvma').factory('UserService', UserService);

    /* @ngInject */
    function UserService(intcConfigurator, webRequest, $q) {
        var service = {
            getAll: getAll,
            register: register
        };
        return service;

        ////////////////

        function getAll() {
        	return webRequest.request(intcConfigurator.config.serviceRoot + 'user');
        };

        function register(email, password, fName, lName, rName, motorcycle, phone){
            var d = $q.defer();
            d.resolve();
            return d.promise;
        }''
    }
})();