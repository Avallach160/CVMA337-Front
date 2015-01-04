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
    'cvma.appFrame',
    'cvma.mission',
    'cvma.chainOfCommand',
    'cvma.calendar',
    'cvma.photos',
    'cvma.contact'
  ]);

  angular.module('cvma').config(routing);
  function routing($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/mission', {
        templateUrl: 'pages/mission/mission.html',
        controller: 'MissionCtrl',
        controllerAs: 'vm'
      })
      .when('/coc', {
        templateUrl: 'pages/chainOfCommand/chainOfCommand.html',
        controller: 'ChainOfCommandCtrl',
        controllerAs: 'vm'
      })
      .when('/calendar', {
        templateUrl: 'pages/calendar/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'vm'
      })
      .when('/photos', {
        templateUrl: 'pages/photos/photos.html',
        controller: 'PhotosCtrl',
        controllerAs: 'vm'
      })
      .when('/contact', {
        templateUrl: 'pages/contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();