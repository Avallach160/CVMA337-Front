(function() {
  'use strict';

  angular.module('cvma.config').factory('AuthInterceptor', AuthInterceptor);

  angular.module('cvma.config').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  }]);

  /* @ngInject */
  function AuthInterceptor(localStorageService, $q, $location) {
    var key = 'usersToken';
    var service = {
      request: request,
      responseError: responseError
    };
    return service;

    function request(config) {

      var token;
      if (localStorageService.get(key)) {
        token = localStorageService.get(key).token;
      }

      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }

    function responseError(response) {
      if (response.status === 401 || response.status === 403) {
        localStorageService.remove(key);
        $location.path('/login');
      }
      return $q.reject(response);
    }
  }
})();
