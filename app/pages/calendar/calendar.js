(function() {
	'use strict';

	angular.module('cvma.calendar').controller('CalendarCtrl', CalendarCtrl);

	/* @ngInject */
	function CalendarCtrl($modal) {
		/*jshint validthis: true */
		var vm = this;
        vm.eventBeingViewed = {};
	
        vm.eventSources = [{
			url: 'https://www.google.com/calendar/feeds/cvma33.7%40gmail.com/public/basic',
			googleCalendarApiKey: 'AIzaSyDag2HuSfRGAC_Pf9FbQJn_wi-ZRcLExlY',
			dataType : 'jsonp',
            className: 'gcal-event',           // an option!
            // currentTimezone: 'America/Chicago' // an option!
        }];

		vm.uiConfig = {
			calendar:{
				height: 450,
				editable: false,
				header:{
					left: 'title',
					center: '',
					right: 'today prev,next'
				},
				eventClick: function( event, jsEvent, view){
                    vm.eventBeingViewed = event;
                    openEventDetails();
				}			
            }
		};

		init();

		function init() {
		}

        function openEventDetails() {
            var modalInstance = $modal.open({
                templateUrl: '/pages/calendar/eventTemplate.html',
                controller: ['$scope', '$modalInstance', 'eventBeingViewed', '$sce', function ($scope, $modalInstance, eventBeingViewed, $sce){
                    $scope.event = eventBeingViewed;
                    $scope.event.start = new Date(eventBeingViewed.start).toLocaleString();
                    $scope.event.end = new Date(eventBeingViewed.end).toLocaleString();
                    $scope.description = $sce.trustAsHtml(eventBeingViewed.description);
                }],
                resolve: {
                    eventBeingViewed: function () {
                        return vm.eventBeingViewed;
                    }
                }
            });

            return modalInstance.result;
        }

        function signIn(){
            
        }    
    }
})();