(function() {
    'use strict';

    angular
        .module('cvma.calendar')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/calendar',
                config: {
                    templateUrl: 'pages/calendar/calendar.html',
                    controller: 'CalendarCtrl',
                    controllerAs: 'vm',
                    showOnNav: true,
                    navPosition: 3,
                    title: 'Calendar'
                }
            }
        ];
    }
})();