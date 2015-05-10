(function() {
  'use strict';

  angular
    .module('cvma.photos')
    .run(appRun);

  // appRun.$inject = ['routehelper']

  /* @ngInject */
  function appRun(routehelper, PhotosFactory) {
    routehelper.configureRoutes(getRoutes(PhotosFactory));
  }

  function getRoutes(PhotosFactory) {
    return [
      {
        url: '/photos',
        config: {
          templateUrl: 'pages/photos/photos.html',
          controller: 'PhotosCtrl',
          controllerAs: 'vm',
          showOnNav: true,
          navPosition: 4,
          title: 'Photos',
          resolve: {
            PhotosList: PhotosFactory.loadList
          }
        }
      }
    ];
  }
})();
