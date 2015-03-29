(function() {
    'use strict';

    angular
        .module('cvma.minutes')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/minutes',
                config: {
                    templateUrl: 'pages/minutes/minutes.html',
                    controller: 'MinutesCtrl',
                    controllerAs: 'vm',
                    showOnNav: true,
                    navPosition: 4,
                    title: 'Meeting Minutes'
                }
            },{
                url: '/minutes/:id',
                config: {
                    templateUrl: 'pages/minutes/meetingDetails.html',
                    controller: 'MeetingDetailsCtrl',
                    controllerAs: 'vm',
                    showOnNav: false,
                    navPosition: 4,
                    title: 'Meeting Minutes'
                }
            }
        ];
    }
})();