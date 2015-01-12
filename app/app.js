(function(){
  'use strict';

  angular.module('cvma', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cvma.router',
    'cvma.main',
    'cvma.appFrame',
    'cvma.mission',
    'cvma.chainOfCommand',
    'cvma.calendar',
    'cvma.photos',
    'cvma.contact',
    'intcConfigurator',
    'cvma.login',
    'LocalStorageModule'
  ]);

  angular.module('cvma').config(routing);

  /* @ngInject */
  function routing($routeProvider, routehelperConfigProvider) {
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }
})();