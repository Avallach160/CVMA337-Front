(function() {
    'use strict';

    angular.module('cvma').factory('UserService', UserService);

    /* @ngInject */
    function UserService(intcConfigurator, webRequest, $q, localStorageService, toaster) {
        var userKey = 'usersToken';
        var service = {
            getAll: getAll,
            register: register,
            login: login,
            getCurrent: getCurrent,
            forgetCurrent: forgetCurrent
        };
        return service;

        ////////////////

        function getAll() {
        	return webRequest.request(intcConfigurator.config.serviceRoot + 'rank');
        };

        function getCurrent(){
            return localStorageService.get(userKey);
        };

        function forgetCurrent(){
            localStorageService.remove(userKey);
        };

        function login(email, password){
            var data = {
                email: email,
                password: password
            };
            return webRequest.request(intcConfigurator.config.serviceRoot + 'auth/authenticate', 'POST', data).then(function(response){
                localStorageService.set(userKey, response);
            }, function(errorResponse){
                toaster.pop('error', '', errorResponse);
            });
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
                //new user so clear the token
                localStorageService.remove(userKey);
                //store token
                localStorageService.set(userKey, response);
                d.resolve(response);
            }, function(errorResponse){
                console.log(response);
                d.reject(errorResponse);
            });

            return d.promise;
        };
    }
})();