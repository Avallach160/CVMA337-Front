(function () {
  'use strict';

  angular.module('cvma.admin').controller('AdminCtrl', AdminCtrl);

  /* @ngInject */
  function AdminCtrl(UserService, $modal) {
    /*jshunt validthis: true */
    var vm = this;
    vm.delete = deleteUser;
    vm.approve = approveUser;

    init();

    function init() {
      UserService.getRanks().then(function (response) {
        vm.ranks = response;
      }, function (errorResponse) {

      });

      loadUsers();
    }

    function approveUser(user){
      UserService.approveUser(user).then(function (response) {
        loadUsers();
      }, function (errorResponse) {

      });
    }

    function deleteUser(user){
      deleteConfirmation(user).then(function (response) {
        UserService.deleteUser(user).then(function (response) {
          loadUsers();
        }, function (errorResponse) {

        });
      }, function (errorResponse) {

      });
    }

    function deleteConfirmation(user){
      var modalInstance = $modal.open({
        templateUrl: '/pages/admin/deleteConfirmation.html',
        controller: ['$scope', '$modalInstance', 'user', function ($scope, $modalInstance, user) {
          $scope.confirmDelete = function () {
            $modalInstance.close(user);
          };

          $scope.doNotDelete = function () {
            $modalInstance.dismiss('cancel');
          };
        }],
        resolve: {
          user: function () {
            return user;
          }
        }
      });

      return modalInstance.result;
    }

    function loadUsers(){
      UserService.getAll().then(function (response) {
        vm.users = response;
      }, function (errorResponse) {

      });
    }
  }
})();
