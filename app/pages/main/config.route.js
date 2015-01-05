(function() {
    'use strict';

    angular
        .module('cvma.main')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'pages/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();