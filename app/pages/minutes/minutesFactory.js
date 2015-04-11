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
      intro: 'CO Justin called the meeting to order @ 1300 hours at The Lions Gate, McClellan, CA.',
      introBullets: [{
        value: 'Pledge of Allegiance was led by CO Justin.'
      }],
      present: [{
        value: 'Commander – Justin'
      },{
        value: 'XO- Virgi'
      },{
        value: 'Sgt at Arms – Ray'
      },{
        value: 'Secretary - John'
      },{
        value: 'Treasurer – Troy'
      },{
        value: 'Road Captain – Virgi'
      },{
        value: 'PR –vacant'
      },{
        value: 'Webmaster – Collin'
      }],
      presentCounts: {
        full: 16,
        aux: 1,
        support: 1,
        guest: 1,
        namesAttached: true
      },
      newMemberIntro: 'Scott, Anthony, Wayne, Gene-(new members) and Andrew (applicant) are present today. Welcome Brothers.',
      newMemberInduction: 'No new members inducted this month.',
      commanderBullets: [{
        value: 'J'
      }],
      committeesBullets: [{
        value: 'Regional/State meeting scheduled for 16-17 May 2015.'
      },{
        value: 'Chairman-Justin has basic events outline in-progress.  Saturday: State chapters- meeting apx 1000-1200; lunch 1200-1300, Regional meeting 1300-1500. Lunch catering: bbq, Ray is working with a bbq company & cost estimates-in progress TBD.'
      },{
        value: 'Initial plan to have meet & greet with water/Gatorade for Friday arrivals similar to the Victorville event.'
      },{
        value: 'Group ride and route, (Poker Run Highway 49 loop).'
      },{
        value: 'Location: VFW Post 6158, Fair Oaks discussed as a location. Cost: $100 for 2d bartender (due to number of people expected for Saturday night).  Motion to approve location and cost by Virgi, 2d by Ray.  13 Yes / O No / 0 Abstain.  Motion Passed.'
      },{
        value: 'The Pathway Home Poker Ride: Virgi volunteered to Co-chair.  Date to be determined. Route will be in the Sacramento region, using a portion known H-49 loop.'
      }],
      oldBusiness: [{
        value: 'October minutes reported; John motioned for minutes to be accepted, 2d by Anthony; Chapter vote to accept meeting minutes as posted; passed: 13 Yes / 0 No / 0 Abstain.'
      },{
        value: 'Guidon: discussion to utilize the same vendor that makes the guidon’s for National.  Preliminary info and cost; guidon is apx $135, streamers are $40 (Nationals attendance).  Virgi offered to front the expense pending the next couple of chapter funds raisers. Motion to approve purchase by John, 2d by Ray.  13 yes / 0 No / 0 / Abstain.  Passed.'
      },{
        value: 'Veterans Day Parade: the float put forward by the chapter received a 2d Place plaque!'
      }],
      newBusiness: [{
        value: 'State calendar (website) shelved for now, it is growing too big and difficult.'
      },{
        value: 'Clean up project: to assist Dave Schmidt and family.  (Recycle metal-money to chapter). Dave & Justin meet with Sims Metals to get info for the metal bin & pick up.  This would assist family with cleaning up Grandfathers auto shop and raise some money for the chapter.  Dates: Feb 21/22 and 28/29 as needed.  Mike motioned to approve chapter assistance, 2d by Troy Keith; passed: 15 yes / 0 no / 0 abstain.'
      },{
        value: '2014 Financial report due, Virgi and Troy will complete the report.'
      },{
        value: 'T-shirt designs for the State & Regional meeting:  2 designs discussed. Mike also recommended that we get a “pre-order” going to minimize the chapters out of pocket expense.'
      },{
        value: 'Motion to place a dollar cap on the “Downed Bike Fund”, motion to cap at $500, any additional money to be held for future incidents.  Motioned by Ray to approve, 2d by Virgi; passed: 12 yes / 0 no / 0 abstain.'
      },{
        value: 'Next meeting to be in 28 February 2015, location Grandpas auto shop.'
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
        value: 'Mike: the Intel Unit at Beale AFB is having an Open House in May.  These are the folks who over watch our troops with the drones.  For those that do not have military I.D’s, Mike is willing to be their sponsor so they may attend.  He will have further details, as Beale has security requirements for all who enter the base.'
      },{
        value: 'Road Captain: please remember no show boating on chapter rides. Safety First.'
      },{
        value: 'Today’s guests have started the paperwork to become members!'
      },{
        value: 'Justin reported that 33-3 had a brother involved in a crash.  He wanted the chapter and friends to know that he is sending a donation from the generous donation he received from chapter and other chapters as a way to pay it forward.'
      },{
        value: 'This chapter has a couple members who work for the VA, they are a resource for our Vets who need help with the VA.  Another resource, our Chapter Members! '
      },{
        value: 'Virgi motioned to adjourn the meeting, Dave Schmidt 2d. Passed: 15 yes / 0 no / o abstain. Justin adjourned the meeting at 1400.'
      }],
      submittedBy: 'John',
      attendees: {
        full: [{
          value: 'Michael '
        },{
          value: 'Justin'
        },{
          value: 'Ray'
        },{
          value: 'Dane '
        },{
          value: 'John'
        },{
          value: 'George '
        },{
          value: 'David '
        },{
          value: 'Virgi'
        },{
          value: 'Troy'
        },{
          value: 'Mike '
        },{
          value: 'Eugene '
        },{
          value: 'Collin'
        },{
          value: 'Scott '
        },{
          value: 'Wayne '
        },{
          value: 'Anthony '
        },{
          value: 'Gene '
        }],
        support: [{
          value: 'Mark '
        }],
        aux: [{
          value: 'Celeste '
        }],
        guest: [{
          value: 'Andrew  (application pending)'
        }]
      }
    },{
      id: 2,
      dateMoment: moment('28 February 2015'),
      intro: 'This month’s meeting/event was a chapter “clean-up” to assist the family of Dave and scrap metal fund raiser. We meet up at Grandpas old repair shop, Del Paso Heights, CA.',
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
        value: 'Commander – Justin'
      },{
        value: 'XO- Virgi'
      },{
        value: 'Sgt at Arms – Ray'
      },{
        value: 'Secretary - John'
      },{
        value: 'Treasurer – Troy'
      },{
        value: 'Road Captain – Virgi'
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
        value: 'Mike: the Intel Unit at Beale AFB is having an Open House in May.  These are the folks who over watch our troops with the drones.  For those that do not have military I.D’s, Mike is willing to be their sponsor so they may attend.  He will have further details, as Beale has security requirements for all who enter the base.'
      },{
        value: 'Road Captain: please remember no show boating on chapter rides. Safety First.'
      },{
        value: 'This chapter has a couple members who work for the VA, they are a resource for our Vets who need help with the VA.  Another resource, our Chapter Members! '
      }],
      submittedBy: 'John',
      attendees: {
        full: [{
          value: 'Michael '
        },{
          value: 'Justin'
        },{
          value: 'Ray'
        },{
          value: 'Dane '
        },{
          value: 'John'
        },{
          value: 'David '
        },{
          value: 'Virgi'
        },{
          value: 'Troy'
        },{
          value: 'Steve '
        },{
          value: 'Mike '
        },{
          value: 'Eugene '
        },{
          value: 'Anthony '
        },{
          value: 'Gene '
        }],
        support: [],
        aux: [{
          value: 'Celeste '
        }],
        guest: [{
          value: 'Jerry'
        }]
      }
    },{
      id: 3,
      dateMoment: moment('28 March 2015'),
      intro: 'CO Justin called the meeting to order @ 1300 hours at The Lions Gate, McClellan, CA.',
      introBullets: [{
        value: 'Pledge of Allegiance was led by CO Justin.'
      }],
      present: [{
        value: 'Commander – Justin'
      },{
        value: 'XO- Virgi'
      },{
        value: 'Sgt at Arms – absent'
      },{
        value: 'Secretary - John'
      },{
        value: 'Treasurer – Troy'
      },{
        value: 'Road Captain – Virgi'
      },{
        value: 'PR –vacant'
      },{
        value: 'Webmaster – Collin'
      }],
      presentCounts: {
        full: 13,
        aux: 0,
        support: 1,
        guest: 0,
        namesAttached: true
      },
      newMemberIntro: 'New members Wayne, Gene and Andrew are present today. In addition, the chapter would like to welcome new members Kody and Jeffrey.  Welcome Brothers!',
      newMemberInduction: 'Two new members inducted this month, Andrew and Gene.  Welcome Gentlemen!',
      commanderBullets: [{
        value: 'Welcomed everyone to this month’s meeting.'
      }],
      committeesBullets: [{
        value: 'Regional/State meeting scheduled for 16-17 May 2015.'
      },{
        value: 'Chairman-Justin has basic events outline in-progress.  Saturday: State chapters- meeting apx 1000-1200; lunch 1200-1300, Regional meeting 1300-1500. '
      },{
        value: 'Lunch catering: bbq, Ray will introduce the chapter officers to Jeremiah and Tony of Buffalo Boys BBQ on Sunday; Justin is working with them for cost estimates (we will be paying for the meat, they may be donating their time) status: in progress. (Note: we are not charging for the meal but are going to put out a “donation” jar and plan to suggest a tip jar on the caterers/cooks stand).  '
      },{
        value: 'Friday, planning to have meet & greet with water/Gatorade (drinks at VFW) for arrivals similar to the Victorville event.'
      },{
        value: 'Group ride after the meetings Saturday (midafternoon apx). Route: Poker Run route - Highway 49 loop.'
      },{
        value: 'Location: VFW Post 6158, Fair Oaks. Cost: $100 for 2d bartender (due to number of people expected for Saturday night).  '
      },{
        value: 'T-shirt designs for the State & Regional meeting:  Justin & Ray made a couple of designs, both state and regional.  Justin is looking to place a pre-order, in order to minimize our out of pocket expenses.'
      },{
        value: 'Discussion on “pre-order” purchase- 50 or 60 initial.  Motion to order 50 by John Austin, 2d by Wayne Barnes.  13 yes / 0 no / 0 abstain.'
      },{
        value: 'The Pathway Home Poker Ride: Virgi/Co-chair.  Date: October 17th.  Route will be in the Sacramento region, using a portion known Hi-way 49 loop.'
      }],
      oldBusiness: [{
        value: 'January and February copies of the minutes reported; Virgi motioned for minutes to be accepted, 2d by Collin; Chapter vote to accept meeting minutes as posted; passed: 13 Yes / 0 No / 0 Abstain.'
      },{
        value: 'Guidon: Virgi has ordered the Flag and National streamer. Cost $151.60.  (Being made as we speak!)'
      },{
        value: '2014 Financial report was sent to the State Rep per Virgi.'
      },{
        value: 'Posting of minutes to website, Collin will post Jan & Feb’s minutes.  (The intent is once the website is squared away, Collin will advise the officers how they can post additional information such as the minutes!)'
      },{
        value: 'CO asked any member interested in being part of or helping “restart” the “contact” committee (outreach to members we have not seen in a while) let him know;  he will distribute names based on area. '
      }],
      newBusiness: [{
        value: 'Ask members, (for those that can) to pay chapter dues in April.  Those that could-did.'
      },{
        value: 'John, secretary, asked for input regarding a chapter review of the National by-law proposals to determine if the chapter has a preference how we would like our “delegates” to vote.  John will bring copies of the National proposals to the next meeting for review. '
      },{
        value: 'John asked the CO to add him to the delegates list for Nationals.'
      },{
        value: 'Suggestion to send flowers to Mercedes at the event of a new born!! (Troy and Mercedes welcome a new baby!!) Motion by Virgi, 2d by Geno.  13 yes / 0 no / 0 abstain.'
      },{
        value: 'Next meeting to be in 18 April 2015 at the Fair Oaks VFW Post 6158.'
      },{
        value: 'Regional Rep “Tonto” has announced he plans to resign in September.'
      }],
      xo: [{
        value: 'No report this month.'
      }],
      secretary: [{
        value: 'January & February minutes were passed around for review. '
      },{
        value:'January and February copies of the minutes reported; Virgi motioned for minutes to be accepted, 2d by Collin; Chapter vote to accept meeting minutes as posted; passed: 13 yes / 0 no / 0 abstain'
      }],
      treasurer: [{
        value: 'No report this month.'
      }],
      saa: [{
        value: 'No report this month.'
      }],
      webmaster: [{
        value: 'Server is having some issues, work continues to update our chapter website.'
      },{
        value: 'Asked the secretary to forward Jan & Feb minutes for posting. '
      },{
        value: 'If you have chapter or event photos, please forward them to me (Collin).'
      }],
      ridesAndEvents: [{
        value: 'Collin will post rides and events to the chapter website & calendar.'
      },{
        value: 'Highlighted are the following:'
      },{
        value: '16 & 17 May 2015: State & Regional Meeting, VFW Post 6158, 33-7 hosting.'
      },{
        value: 'The Pathway Home Poker Run – Saturday 17th October!'
      }],
      goodOfTheOrder: [{
        value: 'Mike: the Intel Unit at Beale AFB is having an Open House in May.  These are the folks who over watch our troops with the drones.  For those that do not have military I.D’s, Mike is willing to be their sponsor so they may attend.  He will have further details, as Beale has security requirements for all who enter the base.  This event may be cancelled, check web calendar.'
      },{
        value: 'Road Captain: please remember no show boating on chapter rides. Safety First. Remember, the public sees our National Patch.'
      },{
        value: '50/50 this month: Virgi won the draw and donated her “50” to the chapter.  Dane, Geno or Mike-who won the CVMA bumper sticker? Chapter won $57.50 twice!'
      },{
        value: 'This chapter has a couple members who work for the VA, they are a resource for our Vets who need help with the VA.  Another resource, our Chapter Members!  '
      },{
        value: 'Virgi motioned to adjourn the meeting, Collin & Rich 2d. Passed: 13 yes / 0 no / o abstain. CO Justin adjourned the meeting at 1400.'
      },{
        value: 'FYI-Please note that it is the secretaries and webmasters intent to be able to post chapter minutes to the website and that last names will be deleted.'
      }],
      submittedBy: 'John',
      attendees: {
        full: [{
          value: 'Justin'
        },{
          value: 'Dane '
        },{
          value: 'John'
        },{
          value: 'George'
        },{
          value: 'Virgi'
        },{
          value: 'Rich'
        },{
          value: 'Mike'
        },{
          value: 'Eugene'
        },{
          value: 'Collin'
        },{
          value: 'Patrick'
        },{
          value: 'Wayne'
        },{
          value: 'Gene'
        },{
          value: 'Andrew'
        }],
        support: [{
          value: 'Ryan'
        }],
        aux: [],
        guest: []
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

      var mapped = _.map(minutes, function(m){
        v = {};
        v.date = formatDate(m.dateMoment);
        v.id = m.id;
        return v;
      });

      d.resolve(_.sortByOrder(mapped, ['date'], [false]));

      return d.promise;
    }

    function formatDate(date){
      return date.format('DD MMMM YYYY');
    }
  }
})();

