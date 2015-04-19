(function () {
  'use strict';

  angular.module('cvma.admin').controller('AdminCtrl', AdminCtrl);

  /* @ngInject */
  function AdminCtrl(UserService) {
    /*jshunt validthis: true */
    var vm = this;

    init();

    function init() {
      UserService.getAll().then(function (response) {
        vm.users = response;
        console.log(vm.users);
      }, function (errorResponse) {

      });
    }
  }
})();
