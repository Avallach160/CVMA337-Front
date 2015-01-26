(function() {
    'use strict';

    angular
        .module('cvma.register')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/register',
                config: {
                    templateUrl: 'pages/register/register.html',
                    controller: 'RegisterCtrl',
                    controllerAs: 'vm',
                    showOnNav: false
                }
            }
        ];
    }
})();