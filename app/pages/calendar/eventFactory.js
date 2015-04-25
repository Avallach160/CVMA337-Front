(function() {
  'use strict';

  angular.module('cvma.calendar').factory('eventFactory', eventFactory);

  /* @ngInject */
  function eventFactory($q) {
    return {
      getEvents: getEvents
    };

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
        start: new Date(2015, 3, 18, 13),
        end: new Date(2015, 3, 18, 17),
        title: 'Chapter meeting',
        location: 'Fair Oaks VFW',
        description: 'April chapter meeting. For the smooth road in, follow this path: https://goo.gl/maps/lUwnu'
      },{
        start: new Date(2015, 3, 19, 11),
        end: new Date(2015, 3, 19, 17),
        title: 'Charity Car & Bike Show',
        location: '11476 Sunrise Gold Circle Rancho Cordova, CA',
        description: 'Illuminati is putting on a car and bike show to help raise money for Homes For Our Troops recipient Cristian Valle.'
      },{
        start: new Date(2015, 3, 25, 9),
        end: new Date(2015, 3, 25, 17),
        title: '10th Annual Andy Stevens Memorial Ride',
        location: 'C & E Auburn V-Twin, 12015 Shale Ridge Road, Auburn, CA 95602, United States',
        description: 'http://www.auburnvtwin.com/eventslist.htm?groupId=35962&itemId=226483'
      },{
        start: new Date(2015, 3, 25, 12),
        end: new Date(2015, 3, 25, 16),
        title: 'Dragn thank you party!',
        location: 'Fair Oaks VFW #6158 8990 Kruithof Way (South of Sunset, Off Hazel) Fair Oaks, CA 95628',
        description: 'Steve "Dragn" Wichers is throwing a thank you party for supporting him when he went down. Libations provided (open bar- alcohol, sodas, water, etc...). Light food will be provided (sandwiches, chips, etc...). 4 RV slots with free hookups are included. Pool tables and dart boards are available. Unfortunately no minors can go into the bar, so please plan accordingly. If you cannot make the event, which I know will be tough for some, you are appreciated and you do make a difference to others.'
      },{
        start: new Date(2015, 4, 3, 9),
        end: new Date(2015, 4, 3, 17),
        title: '1st Annual Michael Davis Jr Memorial Ride',
        location: 'C & E Auburn V-Twin, 12015 Shale Ridge Road, Auburn, CA 95602, United States',
        description: 'http://www.auburnvtwin.com/eventslist.htm?groupId=35962&itemId=226484'
      },{
        start: new Date(2015, 4, 3, 10),
        end: new Date(2015, 4, 3, 16),
        title: 'Motorcycle Awareness Rendezvous',
        location: 'Washington Square Park, 10th & E st Marysville',
        description: 'Public invite. Free BBQ, music, games vendors, raffle, 50/50 and free M/C parking.'
      },{
        start: new Date(2015, 4, 15, 17),
        end: new Date(2015, 4, 15, 23),
        title: 'State / Regional Rally',
        location: 'VFW 8990 Kruitof Way Fair Oaks',
        description: '2015 State and regional rally. Meet & greet.'
      },{
        start: new Date(2015, 4, 16, 10),
        end: new Date(2015, 4, 16, 23),
        title: 'State / Regional Rally',
        location: 'VFW 8990 Kruitof Way Fair Oaks',
        description: '2015 State and regional rally. State meeting from 1000 - 1200. Lunch from 1200 - 1300. Regional meeting from 1300 - 1500. Ride from 1700 - 1900. Drinks at VFW bar until whenever.'
      },{
        start: new Date(2015, 4, 17, 10),
        end: new Date(2015, 4, 17, 15),
        title: 'State / Regional Rally',
        location: 'VFW 8990 Kruitof Way Fair Oaks',
        description: '2015 State and regional rally. Ride around the capital for those left in town.'
      },{
        start: new Date(2015, 4, 23, 9),
        end: new Date(2015, 4, 23, 17),
        title: 'Veteran\'s Stand Down Poker Run',
        location: 'Coming soon',
        description: ''
      },{
        start: new Date(2015, 4, 30, 10),
        end: new Date(2015, 4, 30, 14),
        title: 'Veterans Appreciation Motorcycle Show',
        location: 'VFW Post 4095, 4956 Powerline Rd Olivehurst, CA',
        description: 'Registration begins at 0930/ $10 per bike.'
      },{
        start: new Date(2015, 5, 19, 18),
        end: new Date(2015, 5, 19, 22),
        title: 'George "Sandman" Sannadan\'s college graduation',
        location: 'Memorial Auditorium 1515 J St. Sac 95814',
        description: ''
      },{
        start: new Date(2015, 9, 17, 9),
        end: new Date(2015, 9, 17, 17),
        title: 'CVMA 33-7 Poker Run',
        location: 'TBD',
        description: 'Our annual Poker Run. Event details will be forthcoming.'
      }];

      d.resolve(events);

      return d.promise;
    }
  }
})();
