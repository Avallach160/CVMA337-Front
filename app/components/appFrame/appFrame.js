(function(){
  'use strict';

  /* @ngInject */
  function AppFrameCtrl($route) {
    var vm = this;

    vm.intcAppFrame = {
      theme: 'semiStyle',
      header: {
        title: 'Combat Veterans Motorcycle Association Chapter 33-7',
        shortTitle: 'CVMA 33-7'
      },
      mobileNavAnimation: 'slide',
      nav: {
        items: []
      }
    };

    function init() {
      _.forEach(_.sortBy(_.where($route.routes, {showOnNav: true}), 'navPosition'), function(r){
        vm.intcAppFrame.nav.items.push({title: r.title, href: '/#' + r.originalPath});
      });
      vm.intcAppFrame.nav.items.push({title: 'CVMA National Site', href: 'http://www.combatvet.org', target: "_blank"});
    }

    init();
  }

  angular.module('cvma.appFrame').controller('AppFrameCtrl', AppFrameCtrl);
})();
