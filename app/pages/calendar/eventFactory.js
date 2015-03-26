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
        		start: new Date(2015, 2, 29, 12),
        		end: new Date(2015, 2, 29, 17),
        		title: 'California Vietnam Veteran Memorial',
        		location: 'Vietnam Veterans Memorial, Capitol Park, State Capitol, Sacramento CA',
        		description: 'We will be meeting up at the south-west corner of McKinley Park, on the corner of Alhambra Blvd and H st in Sacramento at NOON (1200hrs).  We\'ll ride out of McKinley KSU at 1220 and roll on over to Capitol Park as a pack, enjoy the ceremony, then disperse from there.'
        	},{
        		start: new Date(2015, 3, 1, 8, 30),
        		end: new Date(2015, 3, 1, 17),
        		title: 'Help Scott "Big Rig" Scott move to his new house',
        		location: '7230 Kallie Kay Ln Sac 95823',
        		description: 'old house is meet up spot; 7230 Kallie Kay Ln Sac 95823. new house address is 13445 Baywood Way Lathrop 95330'
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
        	},{
        		start: new Date(2015, 4, 15, 17),
        		end: new Date(2015, 4, 15, 23),
        		title: 'State / Regional Rally',
        		location: 'VFW 8990 Kruitof Way Fair Oaks',
        		description: '2015 State and regional rally.'
        	},{
        		start: new Date(2015, 4, 16, 10),
        		end: new Date(2015, 4, 16, 15),
        		title: 'State / Regional Rally',
        		location: 'VFW 8990 Kruitof Way Fair Oaks',
        		description: '2015 State and regional rally.'
        	}];

        	d.resolve(events);

        	return d.promise;
        }
    }
})();