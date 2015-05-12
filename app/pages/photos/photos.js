(function() {
  'use strict';

  angular.module('cvma.photos').controller('PhotosCtrl', PhotosCtrl);

  /* @ngInject */
  function PhotosCtrl(PhotosFactory, intcConfigurator) {
    /*jshint validthis: true */
    var vm = this;
    vm.nextPage = nextPage;
    vm.loadingImages = false;
    vm.imageIndex = 0;
    vm.images = [];
    vm.firstLoad = true;

    init();

    function init() {
    }

    function checkMax(){
      return vm.imageIndex > PhotosFactory.getImageList().length;
    }

    function nextPage(){
      vm.loadingImages = true;
      if (checkMax()){
        return;
      }
      for(var i = 0; i < (vm.firstLoad ? 24 : 8); i++){
        if (checkMax()){
          return;
        }
        var img = PhotosFactory.getImageList()[vm.imageIndex++];
        if (img === undefined){
          return;
        }
        vm.images.push({name: img, url: intcConfigurator.config.serviceRoot + 'public/images/' + img});
      }
      vm.loadingImages = false;
      vm.firstLoad = false;
    }
  }
})();
