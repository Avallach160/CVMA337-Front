(function() {
    'use strict';

    angular
        .module('cvma.minutes')
        .controller('MinutesCtrl', MinutesCtrl);

    /* @ngInject */
    function MinutesCtrl(minutesFactory) {
        /*jshint validthis: true */
        var vm = this;

        init();

        function init() {
        	minutesFactory.getMinutesMetaData().then(function(response){
        		vm.minuteMonths = response;
        	})
        }
    }
})();