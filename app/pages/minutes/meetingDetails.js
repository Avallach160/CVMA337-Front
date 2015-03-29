(function() {
    'use strict';

    angular
        .module('cvma.minutes')
        .controller('MeetingDetailsCtrl', MeetingDetailsCtrl);

    /* @ngInject */
    function MeetingDetailsCtrl(minutesFactory, $routeParams) {
        /*jshint validthis: true */
        var vm = this;

        init();

        function init() {
        	minutesFactory.getDetails($routeParams.id).then(function(response){
        		vm.minutes = response;
        	})
        }
    }
})();