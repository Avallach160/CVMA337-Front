(function() {
    'use strict';

    angular
        .module('cvma.contact')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/contact',
                config: {
                    templateUrl: 'pages/contact/contact.html',
                    controller: 'ContactCtrl',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();