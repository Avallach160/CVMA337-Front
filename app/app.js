(function(){
  'use strict';

  angular.module('cvma', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'cvma.main',
      'cvma.appFrame'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'pages/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();