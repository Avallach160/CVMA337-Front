(function() {
	'use strict';

	angular
	.module('cvma.login')
	.directive('login', login);

	/* @ngInject */
	function login (localStorageService, $rootScope, UserService, $window, $modal) {
		var directive = {
			templateUrl: '/components/login/login.html',
			link: link,
			restrict: 'E'
		};
		return directive;

		function link(scope, element, attrs) {
			scope.user = {};
			init();

			function init(){
				populateCurrentUser();
			}

			window.onbeforeunload = function(){
				if (!localStorageService.get('stay')){
					UserService.forgetCurrent();
				}
			}

			function login(){
				if (scope.user.username != undefined && scope.user.password != undefined){
					UserService.login(scope.user.username, scope.user.password).then(function(response){
						localStorageService.set('stay', scope.user.staySignedIn);
						populateCurrentUser();
					}, function(errorResponse){

					});
				}
			}

			scope.logout = function(){
				scope.user = {};
				scope.loggedIn = false;
				UserService.forgetCurrent();
			}

			function populateCurrentUser(){
				var current = UserService.getCurrent();
				if (current !== null){
					scope.user = current.user;
					scope.loggedIn = true;
				}
			}

			
			scope.openSignIn = function () {
				signIn().then(function(response){
					login();			
				}, function(errorResponse){

				});
			}

			scope.user = {};
			function signIn(){
				var modalInstance = $modal.open({
					templateUrl: '/components/login/loginTemplate.html',
					controller: ['$scope', '$modalInstance', 'user', function ($scope, $modalInstance, user){
						$scope.swapToNewUser = function(){
							user = {};
							$scope.newUser = !$scope.newUser;
						}

						$scope.login = function(){
							$modalInstance.close(user);
						}

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
		};
	}
})();