(function() {
    'use strict';

    angular.module('autoFocus').directive('autoFocus', autoFocus);

    /* @ngInject */
    function autoFocus ($timeout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
        	$timeout(function(){
                element[0].focus();
            }, 0);
        }
    }
})();