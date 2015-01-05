(function() {
    'use strict';

    angular
        .module('cvma.chainOfCommand')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/coc',
                config: {
                    templateUrl: 'pages/chainOfCommand/chainOfCommand.html',
                    controller: 'ChainOfCommandCtrl',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();