(function() {
  'use strict';

  angular
    .module('cvma.main')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl(UserService) {
    /*jshint validthis: true */
    var vm = this;

    init();

    function init() {

    }
  }
})();
