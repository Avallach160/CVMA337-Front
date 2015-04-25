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
      getOfficers: getOfficers,
      isOfficer: isOfficer,
      getRanks: getRanks,
      deleteUser: deleteUser,
      updateUser: updateUser,
      approveUser: approveUser
    };
    return service;

    ////////////////
    function approveUser(user){
      user.isApproved = true;
      return updateUser(user);
    }

    function deleteUser(user){
      return webRequest.request(intcConfigurator.config.serviceRoot + 'user/' + user.id, 'DELETE', null, null).then(function (response) {
        toaster.pop('success', '', 'User deleted');
      }, function (errorResponse) {
        toaster.pop('error', '', 'Error deleting user');
      });
    }

    function forgetCurrent(){
      localStorageService.remove(userKey);
    }

    function getAll() {
      return webRequest.request(intcConfigurator.config.serviceRoot + 'user').then(function (response) {
        _.forEach(response, function(r){
          r.name = r.firstName;
          if (r.roadName !== undefined){
            r.name += ' "' + r.roadName + '" ';
          }
          r.name += r.lastName;
        });
        return response;
      }, function (errorResponse) {

      });
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

    function getRanks(){
      return webRequest.request(intcConfigurator.config.serviceRoot + 'rank', 'GET', null, null, true).then(function (response) {
        var ranks = [{value: '<- Pending Approval ->', id: 0}];
        _.forEach(response, function(rank){
          ranks.push({value: rank.value, id: rank.id});
        });
        return ranks;
      }, function (errorResponse) {
        return errorResponse;
      });
    }

    function isOfficer(){
      var d = $q.defer();

      if (getCurrent() !== null) {
        getOfficers().then(function (response) {
          if (_.some(response, {email: getCurrent().user.email})){
            d.resolve(true);
          } else {
            d.reject(false);
          }
        }, function (errorResponse) {
          d.reject(errorResponse);
        });
      } else {
        d.reject(false);
      }

      return d.promise;
    }

    function login(email, password){
      var data = {
        email: email,
        password: password
      };

      var d = $q.defer();

      webRequest.request(intcConfigurator.config.serviceRoot + 'auth/authenticate', 'POST', data).then(function(response){
        console.log(response);
        localStorageService.set(userKey, response);
        d.resolve(response.user);
      }, function(errorResponse){
        if (errorResponse.err === 'pending approval'){
          toaster.pop('warning', '', 'This account is still pending approval.');
        } else {
          toaster.pop('error', '', 'An error has occurred attempting to contact the login servers.');
        }
        d.reject(errorResponse);
      });

      return d.promise;
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

        toaster.pop('success', '', 'Thank you for registering. You will be notified when your account is approved.');
        d.resolve(response);
      }, function(errorResponse){
        toaster.pop('error', '', 'We apologize for the inconvenience but it appears something has gone wrong with the registration process. The admins have been notified.');
        d.reject(errorResponse);
      });

      return d.promise;
    }

    function updateUser(user){
      return webRequest.request(intcConfigurator.config.serviceRoot + 'user/' + user.id, 'PUT', user, null).then(function (response) {
        toaster.pop('success', '', 'User updated.');
      }, function (errorResponse) {
        toaster.pop('error', '', 'Error updating the user.');
      });
    }
  }
})();
