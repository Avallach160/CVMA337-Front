(function () {
  'use strict';

  angular.module('cvma.photos').factory('PhotosFactory', PhotosFactory);

  /* @ngInject */
  function PhotosFactory(webRequest, intcConfigurator, toaster) {
    var imageListing = [];

    var service = {
      getImage: getImage,
      getImageList: getImageList,
      loadList: loadList
    };
    return service;

    ////////////////
    function getImage(index){
      //return webRequest.request(intcConfigurator.config.serviceRoot + 'public/images/' + imageName).then(function (response) {
      //  return response;
      //}, function (errorResponse) {
      //  toaster.pop('error', '', 'Error retrieving the image ' + imageName + '.');
      //  return errorResponse;
      //});
    }

    function getImageList(){
      return imageListing;
    }

    function loadList() {
      return webRequest.request(intcConfigurator.config.serviceRoot + 'public/images').then(function (response) {
        imageListing = response;
        return response;
      }, function (errorResponse) {
        toaster.pop('error', '', 'Error retrieving the image list.');
        return errorResponse;
      });
    }
  }
})();
