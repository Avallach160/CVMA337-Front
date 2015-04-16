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
            forgetCurrent: forgetCurrent,
            getOfficers: getOfficers
        };
        return service;

        ////////////////

        function getAll() {
        	return webRequest.request(intcConfigurator.config.serviceRoot + 'user');
        }

        function getCurrent(){
            return localStorageService.get(userKey);
        }

      function getOfficers() {
        var o = [{
                   position: 'State Representative',
                   fname:    'John',
                   lname:    'Coon',
                   nickname: '"Wolfhound"',
                   email:    'johncoon.d127@gmail.com'
                 }, {
                   position: 'Commander',
                   fname:    'Justin',
                   lname:    'McCarty',
                   nickname: '"Wardog"',
                   email:    'jnr.mccarty@yahoo.com',
                   imgname:  'justin_mccarty'
                 }, {
                   position: 'Executive Officer',
                   fname:    'Virgi',
                   lname:    'Bondi',
                   nickname: '"Trouble"',
                   email:    'virgi@surewest.net',
                   imgname:  'virgi_bondi'
                 }, {
                   position: 'Sergeant At Arms',
                   fname:    'Ray',
                   lname:    'Pursley',
                   nickname: '"Banjo"',
                   email:    'raymondpursley@yahoo.com',
                   imgname:  'ray_pursley'
                 }, {
                   position: 'Secretary',
                   fname:    'John ',
                   lname:    'Austin',
                   nickname: '',
                   email:    'jncaustin@frontiernet.net',
                   imgname:  'john_austin'
                 }, {
                   position: 'Treasurer',
                   fname:    'Troy',
                   lname:    'Keath',
                   nickname: '"Dutch"',
                   email:    'troykeath@att.net',
                   imgname:  'troy_keath'
                 }, {
                   position: 'Public Relations',
                   fname:    'Justin',
                   lname:    'McCarty',
                   nickname: '"Wardog"',
                   email:    'jnr.mccarty@yahoo.com'
                 }, {
                   position: 'Road Captain',
                   fname:    'Virgi',
                   lname:    'Bondi',
                   nickname: '"Trouble"',
                   email:    'virgi@surewest.net'
                 }, {
                   position: 'Webmaster',
                   fname:    'Collin',
                   lname:    'Baird',
                   nickname: '"Chaps"',
                   email:    'cvma33.7@gmail.com'
                 }];
            var d = $q.defer();
            d.resolve(o);
            return d.promise;
            // return getAll().then(function(response){

            // }, function(errorResponse){
            //     toaster.pop('error', '', 'Something went wrong loading the officers.');
            // });
        }

        function forgetCurrent(){
            localStorageService.remove(userKey);
        }

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
        }

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
        }
    }
})();
