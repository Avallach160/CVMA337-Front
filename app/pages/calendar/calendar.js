(function() {
    'use strict';

    angular.module('cvma.calendar').controller('CalendarCtrl', CalendarCtrl);

    /* @ngInject */
    function CalendarCtrl($modal) {
        /*jshint validthis: true */
        var vm = this;
        vm.eventBeingViewed = {};
        
        // vm.eventSources = [{
        //     url: 'https://www.google.com/calendar/feeds/cvma33.7%40gmail.com/public/basic',
        //     googleCalendarApiKey: 'AIzaSyDag2HuSfRGAC_Pf9FbQJn_wi-ZRcLExlY',
        //     dataType : 'jsonp',
        //     className: 'gcal-event',           // an option!
        //     // currentTimezone: 'America/Chicago' // an option!
        // }];

        vm.events = [{
            start: new Date(2015, 2, 29, 9),
            end: new Date(2015, 2, 29, 17),
            title: 'California Vietnam Veteran Memorial',
            location: 'Vietnam Veterans Memorial, Capitol Park, State Capitol, Sacramento CA',
            description: 'There is no time for this posted yet but if we find out more details this event will be posted. For further information, check out the event posting on their website at http://cavbf.org/index.php/cvvm'
        }];

        vm.eventSources = [vm.events];

        // From: 3/29/2015, 12:00:00 AM To: 12/31/1969, 4:00:00 PM

        // Meet Up: Vietnam Veterans Memorial, Capitol Park, State Capitol, Sacramento CA

        // There is no time for this posted yet but if we find out more details this event will be posted. For further information, check out the event posting on their website at http://cavbf.org/index.php/cvvm

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
                    console.log(event);
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