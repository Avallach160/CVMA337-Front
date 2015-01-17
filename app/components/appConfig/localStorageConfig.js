(function() {
	'use strict';

	angular.module('cvma.config').config(localStorage);

	/* @ngInject */
	function localStorage(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('cvmaApp');		
	}
})();