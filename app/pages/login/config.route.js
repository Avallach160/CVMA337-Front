(function() {
    'use strict';

    angular
        .module('cvma.login')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/login',
                config: {
                    templateUrl: 'pages/login/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm',
                    showOnNav: true,
                    navPosition: 6,
                    title: 'Sign In'
                }
            },
            {
                url: '/register',
                config: {
                    templateUrl: 'pages/login/register.html',
                    controller: 'RegisterCtrl',
                    controllerAs: 'vm',
                    showOnNav: false
                }
            }
        ];
    }
})();