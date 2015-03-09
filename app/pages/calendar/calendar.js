(function() {
    'use strict';

    angular.module('cvma.calendar').controller('CalendarCtrl', CalendarCtrl);

    /* @ngInject */
    function CalendarCtrl($modal, eventFactory) {
        /*jshint validthis: true */
        var vm = this;
        vm.eventBeingViewed = {};

        vm.eventSources = [];

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
            eventFactory.getEvents().then(function(response){
                vm.eventSources.push(response);    
            });            
        }

        function openEventDetails() {
            var modalInstance = $modal.open({
                templateUrl: '/pages/calendar/eventTemplate.html',
                controller: ['$scope', '$modalInstance', 'eventBeingViewed', '$sce', function ($scope, $modalInstance, eventBeingViewed, $sce){
                    var startMoment = moment(eventBeingViewed.start);
                    var endMoment = moment(eventBeingViewed.end);

                    var format = 'MM/DD/YYYY HH:mm';

                    $scope.event = eventBeingViewed;
                    $scope.start = startMoment.format(format);                    
                    $scope.end = endMoment.format(format);
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