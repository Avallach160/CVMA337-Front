(function() {
	'use strict';

	angular.module('cvma.login').directive('login', login);

	/* @ngInject */
	function login (localStorageService, UserService, $modal, $location) {
		var directive = {
			templateUrl: '/components/login/login.html',
			link: link,
			restrict: 'E'
		};
		return directive;

		function link(scope, element, attrs) {
      scope.openSignIn = openSignIn;
      scope.logout = logout;
			scope.user = {};

			init();

			function init(){
        var current = UserService.getCurrent();
        if (current !== null){
          scope.user = current.user;
          scope.loggedIn = true;
        }
			}

      function createAccount(){
        var modalInstance = $modal.open({
          templateUrl: '/components/login/registerTemplate.html',
          controller: ['$scope', '$modalInstance', 'user', function ($scope, $modalInstance, user){
            $scope.register = function(){
              $modalInstance.close(user);
            }

            $scope.checkPwMatch = function (){
              user.pwMatchError = user.password !== user.passwordConfirmation;
            };

            $scope.cancel = function(){
              $modalInstance.dismiss('cancel');
            }
          }],
          resolve: {
            user: function () {
              return scope.user;
            }
          }
        });

        return modalInstance.result;
      }

			function login(staySignedIn){
				if (scope.user.username != undefined && scope.user.password != undefined){
					UserService.login(scope.user.username, scope.user.password).then(function(response){
            scope.loggedIn = true;
            scope.user = response;
						localStorageService.set('stay', staySignedIn);
					}, function(errorResponse){

					});
				}
			}

			function logout(){
				scope.user = {};
				scope.loggedIn = false;
				UserService.forgetCurrent();
        $location.path('/');
			}

      function openSignIn() {
        signIn().then(function(response){
          if (response === 'create'){
            scope.user = {};
            createAccount().then(function (response) {
              UserService.register(response.email, response.password, response.passwordConfirmation, response.firstName, response.lastName, response.roadName, response.motorcycle, response.phoneNumber).then(function(response){

              }, function(errorResponse){

              });
            }, function (errorResponse) {

            });
          } else {
            login(response.staySignedIn);
          }
        }, function(errorResponse){

        });
      }

			function signIn() {
        var modalInstance = $modal.open({
          templateUrl: '/components/login/loginTemplate.html',
          controller: ['$scope', '$modalInstance', 'user', function ($scope, $modalInstance, user) {
            $scope.swapToNewUser = function () {
              user = {};
              $modalInstance.close('create');
            }

            $scope.login = function () {
              $modalInstance.close(user);
            }

            $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
            }
          }],
          resolve: {
            user: function () {
              return scope.user;
            }
          }
        });

        return modalInstance.result;
      }

      window.onbeforeunload = function(){
        if (!localStorageService.get('stay')){
          UserService.forgetCurrent();
        }
      }
		};
	}
})();
