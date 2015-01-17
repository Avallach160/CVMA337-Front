(function() {
    'use strict';
    
	angular.module('cvma.config').config(routing);

	/* @ngInject */
	function routing($routeProvider, routehelperConfigProvider) {
		routehelperConfigProvider.config.$routeProvider = $routeProvider;
		$routeProvider
			.otherwise({
				redirectTo: '/'
			});
		}
	}
)();