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
          href: '/#/'
        },{
          title: 'Mission Statement',
          href: '/#/mission'
        },{
          title: 'Chain of Command',
          href: '/#/coc'
        },{
          title: 'Calendar',
          href: '/#/calendar'
        },{
          title: 'Photos',
          href: '/#/photos'
        },{
          title: 'Contact Us',
          href: '/#/contact'
        },{
          title: 'CVMA National Site',
          href: 'http://www.combatvet.org'
        }]
      }
    };

    init();

    function init() {
      
    };
  };
})();