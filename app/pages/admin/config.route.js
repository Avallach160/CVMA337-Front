(function () {
  'use strict';

  angular.module('cvma.admin').run(appRun);

  /* @ngInject */
  function appRun(routehelper, UserService) {
    routehelper.configureRoutes(getRoutes(UserService));
  }

  function getRoutes(UserService) {
    return [
      {
        url: '/admin',
        config: {
          templateUrl: 'pages/admin/admin.html',
          controller: 'AdminCtrl',
          controllerAs: 'vm',
          title: 'Administration',
          resolve: {
            authorized: function(){
              return UserService.isOfficer();
            }
          }
        }
      }
    ];
  }
})();
