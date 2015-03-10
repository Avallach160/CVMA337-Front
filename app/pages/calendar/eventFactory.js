(function() {
	'use strict';

	angular.module('cvma.calendar').factory('eventFactory', eventFactory);

	/* @ngInject */
	function eventFactory($q) {
		var service = {
			getEvents: getEvents
		};
		return service;

        ////////////////

        function getEvents() {
        	var d = $q.defer();

        	var events = [{
        		start: new Date(2015, 2, 12, 19),
        		end: new Date(2015, 2, 12, 21),
        		title: 'Officer\'s meeting',
        		location: 'Virgi\'s house',
        		description: 'March officer meeting.'
        	},{
        		start: new Date(2015, 2, 14, 10),
        		end: new Date(2015, 2, 14, 17),
        		title: 'Alex\'s house key ceremony',
        		location: 'Chevron at 2700 Del Paso Rd Sacramento, CA 95834. KSU 1000',
        		description: 'After much work by members of CVMA and the community at large, Alex is getting the keys to his new house.'
        	},{
        		start: new Date(2015, 2, 26, 9),
        		end: new Date(2015, 2, 26, 17),
        		title: 'Wardogs birthday!',
        		location: '',
        		description: 'Happy birthday Justin!'
        	},{
        		start: new Date(2015, 2, 28, 13),
        		end: new Date(2015, 2, 28, 17),
        		title: 'Chapter meeting',
        		location: 'Lions Gate Hotel 3410 Westover St, McClellan Park, CA 95652',
        		description: 'March chapter meeting.'
        	},{
        		start: new Date(2015, 2, 29, 13),
        		end: new Date(2015, 2, 29, 17),
        		title: 'California Vietnam Veteran Memorial',
        		location: 'Vietnam Veterans Memorial, Capitol Park, State Capitol, Sacramento CA',
        		description: 'There is no time for this posted yet but if we find out more details this event will be posted. For further information, check out the event posting on their website at http://cavbf.org/index.php/cvvm'
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

        	d.resolve(events);

        	return d.promise;
        }
    }
})();