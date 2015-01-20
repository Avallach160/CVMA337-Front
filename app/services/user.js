(function() {
    'use strict';

    angular.module('cvma').factory('UserService', UserService);

    /* @ngInject */
    function UserService(intcConfigurator, webRequest, $q, localStorageService) {
        var service = {
            getAll: getAll,
            register: register
        };
        return service;

        ////////////////

        function getAll() {
        	return webRequest.request(intcConfigurator.config.serviceRoot + 'user');
        };

        function register(email, password, confirmPassword, fName, lName, rName, motorcycle, phone){
            var d = $q.defer();
            var user = {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                firstName: fName,
                lastName: lName,
                roadName: rName,
                motorcycle: motorcycle,
                phoneNumber: phone
            };
            webRequest.request(intcConfigurator.config.serviceRoot + 'auth/register', 'POST', user).then(function(response){
                console.log(response);
                d.resolve(response);
            }, function(errorResponse){
                console.log(response);
                d.reject(errorResponse);
            });

            return d.promise;
        };
    }
})();