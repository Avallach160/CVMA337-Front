(function() {
    'use strict';

    angular
        .module('cvma.minutes')
        .factory('minutesFactory', minutesFactory);

    /* @ngInject */
    function minutesFactory($q) {
    	var minutes = [{
    		id: 1,
    		dateMoment: moment('24 January 2015'),
            intro: 'CO Justin McCarty called the meeting to order @ 1300 hours at The Lions Gate, McClellan, CA.',
            introBullets: [{
                value: 'Pledge of Allegiance was led by CO Justin McCarty.'
            }],
            present: [{
                value: 'Commander – Justin McCarty'
            },{
                value: 'XO- Virgi Bondi'
            },{
                value: 'Sgt at Arms – Ray Pursley'
            },{
                value: 'Secretary - John Austin'
            },{
                value: 'Treasurer – Troy Keath'
            },{
                value: 'Road Captain – Virgi Bondi'
            },{
                value: 'PR –vacant'
            },{
                value: 'Webmaster – Collin Baird'
            }],
            presentCounts: {
                full: 16,
                aux: 1,
                support: 1,
                guest: 1,
                namesAttached: true
            },
            newMemberIntro: 'Scott Scott, Anthony Indrieri, Wayne Barnes, Gene Hawley-(new members) and Andrew Perogas (applicant) are present today. Welcome Brothers.',
            newMemberInduction: 'No new members inducted this month.',
            commanderBullets: [{
                value: 'J'
            }],
            committeesBullets: [{
                value: 'Regional/State meeting scheduled for 16-17 May 2015.'
            },{
                value: 'Chairman-Justin McCarty has basic events outline in-progress.  Saturday: State chapters- meeting apx 1000-1200; lunch 1200-1300, Regional meeting 1300-1500. Lunch catering: bbq, Ray is working with a bbq company & cost estimates-in progress TBD.'
            },{
                value: 'Initial plan to have meet & greet with water/Gatorade for Friday arrivals similar to the Victorville event.'
            },{
                value: 'Group ride and route, (Poker Run Highway 49 loop).'
            },{
                value: 'Location: VFW Post 6158, Fair Oaks discussed as a location. Cost: $100 for 2d bartender (due to number of people expected for Saturday night).  Motion to approve location and cost by Virgi Bondi, 2d by Ray Pursley.  13 Yes / O No / 0 Abstain.  Motion Passed.'
            },{
                value: 'The Pathway Home Poker Ride: Virgi Bondi volunteered to Co-chair.  Date to be determined. Route will be in the Sacramento region, using a portion known H-49 loop.'
            }],
            oldBusiness: [{
                value: 'October minutes reported; John Austin motioned for minutes to be accepted, 2d by Anthony Indrieri; Chapter vote to accept meeting minutes as posted; passed: 13 Yes / 0 No / 0 Abstain.'
            },{
                value: 'Guidon: discussion to utilize the same vendor that makes the guidon’s for National.  Preliminary info and cost; guidon is apx $135, streamers are $40 (Nationals attendance).  Virgi offered to front the expense pending the next couple of chapter funds raisers. Motion to approve purchase by John Austin, 2d by Ray Pursley.  13 yes / 0 No / 0 / Abstain.  Passed.'
            },{
                value: 'Veterans Day Parade: the float put forward by the chapter received a 2d Place plaque!'
            }],
            newBusiness: [{
                value: 'State calendar (website) shelved for now, it is growing too big and difficult.'
            },{
                value: 'Clean up project: to assist Dave Schmidt and family.  (Recycle metal-money to chapter). Dave & Justin meet with Sims Metals to get info for the metal bin & pick up.  This would assist Schmidt family with cleaning up Grandfathers auto shop and raise some money for the chapter.  Dates: Feb 21/22 and 28/29 as needed.  Mike Bowser motioned to approve chapter assistance, 2d by Troy Keith; passed: 15 yes / 0 no / 0 abstain.'
            },{
                value: '2014 Financial report due, Virgi and Troy will complete the report.'
            },{
                value: 'T-shirt designs for the State & Regional meeting:  2 designs discussed. Mike Bowser also recommended that we get a “pre-order” going to minimize the chapters out of pocket expense.'
            },{
                value: 'Motion to place a dollar cap on the “Downed Bike Fund”, motion to cap at $500, any additional money to be held for future incidents.  Motioned by Ray Pursley to approve, 2d by Virgi Bondi; passed: 12 yes / 0 no / 0 abstain.'
            },{
                value: 'Next meeting to be in 28 February 2015, location Grandpa Schmidt’s auto shop.'
            }],
            xo: [],
            secretary: [{
                value: 'October’s minutes were passed around for review prior to vote to approve.'
            }],
            treasurer: [{
                value: 'Tax exempt paperwork completed!'
            },{
                value: 'We currently have $568 (remaining after vote for Mays event)'
            }],
            saa: [],
            webmaster: [{
                value: 'Working on links so Officers can post directly to our website, for example the minutes or events.'
            },{
                value: 'A new web account has to be opened, please keep some pictures available for the updated site as the pic’s from the current site we might not be able to save.'
            }],
            ridesAndEvents: [{
                value: 'Collin will post rides and events to the chapter website & calendar.'
            },{
                value: 'Highlighted are the following:'
            },{
                value: '16 & 17 May 2015: State & Regional Meeting, VFW Post 6158, 33-7 hosting.'
            },{
                value: '21/22 February: Cleanup Project, Grandpa Schmidt’s auto shop, Del Paso Heights and 28/29 as needed. Chapter fund raiser and assistance to the family.'
            },{
                value: 'The Pathway Home Poker Run: Date to be determined.'
            }],
            goodOfTheOrder: [{
                value: 'Mike Bowser: the Intel Unit at Beale AFB is having an Open House in May.  These are the folks who over watch our troops with the drones.  For those that do not have military I.D’s, Mike is willing to be their sponsor so they may attend.  He will have further details, as Beale has security requirements for all who enter the base.'
            },{
                value: 'Road Captain: please remember no show boating on chapter rides. Safety First.'
            },{
                value: 'Today’s guests have started the paperwork to become members!'
            },{
                value: 'Justin McCarty reported that 33-3 had a brother involved in a crash.  He wanted the chapter and friends to know that he is sending a donation from the generous donation he received from chapter and other chapters as a way to pay it forward.'
            },{
                value: 'This chapter has a couple members who work for the VA, they are a resource for our Vets who need help with the VA.  Another resource, our Chapter Members! '
            },{
                value: 'Virgi Bondi motioned to adjourn the meeting, Dave Schmidt 2d. Passed: 15 yes / 0 no / o abstain. Justin McCarty adjourned the meeting at 1400.'
            }],
            submittedBy: 'John Austin',
            attendees: {
                full: [{
                    value: 'Michael Bowser'
                },{
                    value: 'Justin McCarty'
                },{
                    value: 'Ray Pursley'
                },{
                    value: 'Dane Tassara'
                },{
                    value: 'John Austin'
                },{
                    value: 'George Sannadan'
                },{
                    value: 'David Schmidt'
                },{
                    value: 'Virgi Bondi'
                },{
                    value: 'Troy Keath'
                },{
                    value: 'Mike Lafolley'
                },{
                    value: 'Eugene Thull'
                },{
                    value: 'Collin Baird'
                },{
                    value: 'Scott Scott'
                },{
                    value: 'Wayne Barnes'
                },{
                    value: 'Anthony Indreiri'
                },{
                    value: 'Gene Hawley'
                }],
                support: [{
                    value: 'Mark Sconce'
                }],
                aux: [{
                    value: 'Celeste Schmidt'
                }],
                guest: [{
                    value: 'Andrew Perogas (application pending)'
                }]
            }
    	},{
    		id: 2,
    		dateMoment: moment('28 February 2015'),
            intro: 'This month’s meeting/event was a chapter “clean-up” to assist the family of Dave Schmidt and scrap metal fund raiser. We meet up at Grandpas old repair shop, Del Paso Heights, CA.',
            introBullets: [{
                value: '21st and 28th designated clean up days.'
            },{
                value: 'Majority of clean up accomplished first day- until we ran out of trash bin space!'
            },{
                value: 'Great turn out both days by members!'
            },{
                value: 'Lunch supplied by Dave & family.'
            },{
                value: 'LOTS of scrap metal was getting loaded in the recycling bin!!'
            }],
            present: [{
                value: 'Commander – Justin McCarty'
            },{
                value: 'XO- Virgi Bondi'
            },{
                value: 'Sgt at Arms – Ray Pursley'
            },{
                value: 'Secretary - John Austin'
            },{
                value: 'Treasurer – Troy Keath'
            },{
                value: 'Road Captain – Virgi Bondi'
            },{
                value: 'PR –vacant'
            },{
                value: 'Webmaster – absent'
            }],
            presentCounts: {
                full: 11,
                aux: 1,
                support: 0,
                guest: 1,
                namesAttached: true
            },
            newMemberIntro: '',
            newMemberInduction: '',
            commanderBullets: [{
                value: 'February’s focus will be to complete the clean-up project, there are no Officer’s reports.'
            }],
            committeesBullets: [{
                value: 'No committee business this month. '
            }],
            oldBusiness: [{
                value: 'No old business this month.'
            }],
            newBusiness: [{
                value: 'No new business this month.'
            },{
                value: 'Next meeting to be on 28 March 2015.'
            }],
            xo: [],
            secretary: [],
            treasurer: [],
            saa: [],
            webmaster: [],
            ridesAndEvents: [{
                value: 'Collin will post rides and events to the chapter website & calendar.'
            },{
                value: 'Highlighted are the following:'
            },{
                value: '16 & 17 May 2015: State & Regional Meeting, VFW Post 6158, 33-7 hosting.'
            },{
                value: '21/22 February: Cleanup Project, Grandpa Schmidt’s auto shop, Del Paso Heights and 28/29 as needed. Chapter fund raiser and assistance to the family.'
            },{
                value: 'The Pathway Home Poker Run: Date to be determined.'
            }],
            goodOfTheOrder: [{
                value: 'Mike Bowser: the Intel Unit at Beale AFB is having an Open House in May.  These are the folks who over watch our troops with the drones.  For those that do not have military I.D’s, Mike is willing to be their sponsor so they may attend.  He will have further details, as Beale has security requirements for all who enter the base.'
            },{
                value: 'Road Captain: please remember no show boating on chapter rides. Safety First.'
            },{
                value: 'This chapter has a couple members who work for the VA, they are a resource for our Vets who need help with the VA.  Another resource, our Chapter Members! '
            }],
            submittedBy: 'John Austin',
            attendees: {
                full: [{
                    value: 'Michael Bowser'
                },{
                    value: 'Justin McCarty'
                },{
                    value: 'Ray Pursley'
                },{
                    value: 'Dane Tassara'
                },{
                    value: 'John Austin'
                },{
                    value: 'David Schmidt'
                },{
                    value: 'Virgi Bondi'
                },{
                    value: 'Troy Keath'
                },{
                    value: 'Steve Wichers'
                },{
                    value: 'Mike Lafolley'
                },{
                    value: 'Eugene Thull'
                },{
                    value: 'Anthony Indreiri'
                },{
                    value: 'Gene Hawley'
                }],
                support: [],
                aux: [{
                    value: 'Celeste Schmidt'
                }],
                guest: [{
                    value: 'Jerry'
                }]
            }
    	}];

        var service = {
        	getDetails: getDetails,
            getMinutesMetaData: getMinutesMetaData
        };
        return service;

        ////////////////

        function getDetails(id){
        	var d = $q.defer();

            var minute = _.find(minutes, {'id': Number(id)});
            minute.date = formatDate(minute.dateMoment);
        	d.resolve(minute);

        	return d.promise;
        }

        function getMinutesMetaData() {
        	var d = $q.defer();
            var v = {};

        	d.resolve(_.map(minutes, function(m){
                v = {};
                v.date = formatDate(m.dateMoment);
                v.id = m.id;
                return v;
            }));

        	return d.promise;
        }

        function formatDate(date){
            return date.format('DD MMMM YYYY');
        }
    }
})();