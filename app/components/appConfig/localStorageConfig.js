(function() {
	'use strict';

	angular.module('cvma.config').config(localStorage);

	/* @ngInject */
	function localStorage(localStorageServiceProvider, $httpProvider) {
		localStorageServiceProvider.setPrefix('cvmaApp');
		$httpProvider.interceptors.push('AuthInterceptor');
	}
})();