(function() {
    'use strict';

    angular.module('cvma.calendar').controller('CalendarCtrl', CalendarCtrl);

    /* @ngInject */
    function CalendarCtrl($modal) {
        /*jshint validthis: true */
        var vm = this;
        vm.eventBeingViewed = {};

        vm.events = [{
            start: new Date(2015, 2, 29, 9),
            end: new Date(2015, 2, 29, 17),
            title: 'California Vietnam Veteran Memorial',
            location: 'Vietnam Veterans Memorial, Capitol Park, State Capitol, Sacramento CA',
            description: 'There is no time for this posted yet but if we find out more details this event will be posted. For further information, check out the event posting on their website at http://cavbf.org/index.php/cvvm'
        },{
            start: new Date(2015, 2, 26, 9),
            end: new Date(2015, 2, 26, 17),
            title: 'Wardogs birthday!',
            location: '',
            description: 'Happy birthday Justin!'
        },{
            start: new Date(2015, 3, 25, 9),
            end: new Date(2015, 3, 25, 17),
            title: '10th Annual Andy Stevens Memorial Ride',
            location: 'C & E Auburn V-Twin, 12015 Shale Ridge Road, Auburn, CA 95602, United States',
            description: 'http://www.auburnvtwin.com/eventslist.htm?groupId=35962&itemId=226483'
        },{
            start: new Date(2015, 4, 3, 9),
            end: new Date(2015, 4, 3, 17),
            title: '1st Annual Michael Davis Jr Memorial Ride',
            location: 'C & E Auburn V-Twin, 12015 Shale Ridge Road, Auburn, CA 95602, United States',
            description: 'http://www.auburnvtwin.com/eventslist.htm?groupId=35962&itemId=226484'
        }];

        vm.eventSources = [vm.events];

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