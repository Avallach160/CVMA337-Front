(function() {
    'use strict';

    angular
        .module('cvma.mission')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/mission',
                config: {
                    templateUrl: 'pages/mission/mission.html',
                    controller: 'MissionCtrl',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();