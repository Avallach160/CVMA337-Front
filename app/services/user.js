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

        function getOfficers(){
            var o = [{ 
                position: 'State Representative',
                name: 'John "Wolfhound" Coon',
                email: 'johncoon.d127@gmail.com'
            },{ 
                position: 'Commander',
                name: 'Justin "Wardog" McCarty',
                email: 'jnr.mccarty@yahoo.com'
            },{ 
                position: 'Executive Officer',
                name: 'Virgi "Trouble" Bondi',
                email: 'virgi@surewest.net'
            },{ 
                position: 'Sergeant At Arms',
                name: 'Ray "Banjo" Pursley',
                email: 'raymondpursley@yahoo.com'
            },{ 
                position: 'Secretary',
                name: 'John Austin',
                email: 'jncaustin@frontiernet.net'
            },{ 
                position: 'Treasurer',
                name: 'Troy "Dutch" Keath',
                email: 'troykeath@att.net'
            },{ 
                position: 'Public Relations',
                name: 'Justin "Wardog" McCarty',
                email: 'jnr.mccarty@yahoo.com'
            },{ 
                position: 'Road Captain',
                name: 'Virgi "Trouble" Bondi',
                email: 'virgi@surewest.net'
            },{ 
                position: 'Webmaster',
                name: 'Collin "Chaps" Baird ',
                email: 'cvma33.7@gmail.com'
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