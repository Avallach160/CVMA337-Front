(function(){
  'use strict';

  angular.module('cvma', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.calendar',
    'ui.bootstrap',
    'cvma.router',
    'cvma.main',
    'cvma.appFrame',
    'cvma.mission',
    'cvma.chainOfCommand',
    'cvma.calendar',
    'cvma.photos',
    'cvma.contact',
    'cvma.minutes',
    'intcConfigurator',
    // 'cvma.login',
    // 'cvma.register',
    'autoFocus',
    'cvma.config',
    'toaster'
  ]);
})();
