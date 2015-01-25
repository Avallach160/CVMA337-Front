(function() {
    'use strict';

    angular.module('cvma').factory('UserService', UserService);

    /* @ngInject */
    function UserService(intcConfigurator, webRequest, $q, localStorageService) {
        var userKey = 'usersToken';
        var service = {
            getAll: getAll,
            register: register,
            login: login
        };
        return service;

        ////////////////

        function getAll() {
        	return webRequest.request(intcConfigurator.config.serviceRoot + 'user');
        };

        function login(email, password){
            
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
                localStorageService.set(userKey, response.token);
                d.resolve(response);
            }, function(errorResponse){
                console.log(response);
                d.reject(errorResponse);
            });

            return d.promise;
        };
    }
})();