(function () {
  'use strict';

  angular.module('cvma.admin').controller('AdminCtrl', AdminCtrl);

  /* @ngInject */
  function AdminCtrl(UserService) {
    /*jshunt validthis: true */
    var vm = this;

    init();

    function init() {
      UserService.getRanks().then(function (response) {
        vm.ranks = response;
      }, function (errorResponse) {

      });


      UserService.getAll().then(function (response) {
        vm.users = response;
      }, function (errorResponse) {

      });
    }
  }
})();
