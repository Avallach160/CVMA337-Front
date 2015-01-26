(function() {
    'use strict';

    angular
        .module('cvma.login')
        .directive('login', login);

    /* @ngInject */
    function login (localStorageService, $rootScope, UserService, $window) {
        // Usage:
        //
        // Creates:
        //
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
        	};

        	window.onbeforeunload = function(){
        		if (!localStorageService.get('stay')){
        			UserService.forgetCurrent();
        		}
        	};

        	scope.login = function(){
        		if (scope.user.username != undefined && scope.user.password != undefined){
        			UserService.login(scope.user.username, scope.user.password).then(function(response){
        				localStorageService.set('stay', scope.user.staySignedIn);
        				populateCurrentUser();
        			}, function(errorResponse){

        			});
        		}
        	};

        	scope.logout = function(){
        		scope.user = {};
        		scope.loggedIn = false;
        		UserService.forgetCurrent();
        	};

        	function populateCurrentUser(){
        		var current = UserService.getCurrent();
        		if (current !== null){
        			scope.user = current.user;
        			scope.loggedIn = true;
        		}
    		}
        };
    }
})();