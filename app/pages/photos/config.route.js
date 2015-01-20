(function() {
    'use strict';

    angular
        .module('cvma.photos')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/photos',
                config: {
                    templateUrl: 'pages/photos/photos.html',
                    controller: 'PhotosCtrl',
                    controllerAs: 'vm',
                    showOnNav: true,
                    navPosition: 4,
                    title: 'Photos'
                }
            }
        ];
    }
})();