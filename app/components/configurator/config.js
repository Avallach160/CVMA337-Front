(function() {
    'use strict';

    angular.module('intcConfigurator').config(config);

    function config(intcConfiguratorProvider){
	  	intcConfiguratorProvider.register({
  			HOST: 'localhost:9000',
  			serviceRoot: 'http://localhost:1337/'
  		});
    };
})();