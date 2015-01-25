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
    'autoFocus',
    'cvma.config',
    'toaster'
  ]);
})();