(function(){
  'use strict';

  angular.module('cvma.appFrame').controller('AppFrameCtrl', AppFrameCtrl);
 
  /* @ngInject */
  function AppFrameCtrl() {
    var vm = this;

    vm.intcAppFrame = {
      theme: 'semiStyle',
      header: {
        title: 'Combat Veterans Motorcycle Association Chapter 33-7',
        shortTitle: 'CVMA 33-7'
      },
      mobileNavAnimation: 'slide',
      nav: {
        items: [{
          title: 'Home',
          href: '/'
        },{
          title: 'Mission Statement',
          href: '/'
        },{
          title: 'Chain of Command',
          href: '/'
        },{
          title: 'Calendar',
          href: '/'
        },{
          title: 'Photos',
          href: '/'
        },{
          title: 'Contact Us',
          href: '/'
        }]
      }
    };

    init();

    function init() {
      
    };
  };
})();