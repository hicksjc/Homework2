

var MODEL = (function(){
var _homeContent = `<section class="home">
<div class="home__intro-img">
    <h2 class="home__title">Putting Life's Pieces Back Together</h2>
    <p class="home__para">Transforming Lives Afflicted By Drug And Alcohol Addiction. Helping<br> Individuals Develop A Design For Living Complete And Fulfilled Life.</p>
    <button class="home__button">Get Started</button>
</div>
<div class="home__twoSections">
    <div class="home__Admission">
        <h2 class="home__title-Admission">Admission</h2>
        <p class="home__para-Admission">Admission is voluntary and through referrals. The individual must be willing to commit to a long-term program of recovery and seek full-time employment</p>
        <button class="home__button-Admission">Apply Today</button>
    </div>
    <div class="home__Program">
        <h2 class="home__title-Program">Program</h2>
        <p class="home__para-Program">Our staple is highly structured 12-18 month transitional, residential facility for men 18 years or older that promotes personal responsibility and accountability for those seeking sustained abstinence from mind altering substances.</p>
        <button class="home__button-Program">Our Programs</button>
    </div>
</div>

        <div class="home__midSection-Text">
            <h2 class="home__midSection-title">Learning to Live Life
            </h2>
            <h1 class="home__midSection-title">Welcome To The Shepherd's House</h1>
            <p class="home__midSection-para">At the Shepherd's House we endeavor to assist residents to gain living skills that empower them to take responsibility for their lives. We strive to create an atmosphere that is conducive to recovery and to establish a life-changing fellowship that will ultimately lead to a successful re-entry into the community.</p>
            <p class="home__midSection-para">We believe the needs of individuals in recovery are best met through a healthy reliance on a peer support group, twelve-step programs and the concept of caring and sharing. In doing so we create a framework for a life that can be lived substance free and produce productive members of society.</p>
        </div>
    
</section>`

var _ourStoryContent = `<section class="our-story">
<div class="our-story__columns">
    <div class="our-story__mission">
        <h2 class="our-story__title">MISSION</h2>
        <p class="our-story__para">Provide structured environment enabling clients to develop Community, Financial and Employment skills necessary to lead a fulfilled life, <strong>Sober.</strong></p>
    </div>
    <div class="our-story__vision">
        <h2 class="our-story__title">VISION</h2>
        <p class="our-story__para">To be the best long-term Resodential Recovery Program in the United States equipping men/women to live the life they were intended to live, <strong>Sober.</strong></p>
    </div>
    <div class="our-story__values">
        <h2 class="our-story__title">VALUES</h2>
        <p class="our-story__para">Utilize 12 Step Programs, Individual Therapy, Community Living, Groups, Employment and other daily tasks to learn to live life Sober while putting life’s pieces back together</p>
    </div>
</div>
<div class="our-story__midsection">
    <p class="our-story__para">The Shepherds House was an idea born in 1984 by Fred Hood, a parishioner at Good Shepherd Episcopal Church in Lexington, KY.  Fred’s son, John, was at Charter Ridge for treatment and it was strongly suggested he attend a halfway house for long-term care and programming.  There were no suitable programs in the Central Kentucky region.   Fred, and many others at good Shepherd and in the community, were advocates for developing a world class recovery housing environment in Lexington. </p>
    <p class="our-story__para">In September 1985 the project was recommended to the vestry at Good Shepherd Episcopal Church.  The request of the church was they provide 10% of the initial capital costs, which were anticipated to be ~$250,000.  In addition, they were requested to annually provide 10% of the expected annual operating costs, which were estimated to be $100,000.  On November 24, 1985 the church agreed, and raised, the requested amounts ($25,000 for initial capital costs and at least $10,000 per year in annual operating costs).  The Shepherds House was born, and it would welcome its first client nearly four years later in July 1989.</p>
</div>
</section>`;

var _ProgramsContent = `<section class="programs">
<h2 class="programs__title">Learning to Live Life</h2>
<p class="programs__para">(Men Only)</p>
<div class="programs__columns">
    <div class="programs__columns-left">
        <h1 class="programs__columns-title">
            Program Overview
        </h1>
        <p class="programs__columns-sub-title"><strong>12-18 Month Residential Program</strong></p>
        <p class="programs__columns-sub-title"><strong>Weekly Program Services</strong></p>
        <ul class="programs__columns-list">
            <li class="programs__item">Target Case Management/Peer-Suppert</li>
            <li class="programs__item">House Manager</li>
            <li class="programs__item">Group Therapy</li>
            <li class="programs__item">Individual Therapy w/ Licensed Therapist</li>
            <li class="programs__item">EMDR, Recreational, Cognitive Therapy</li>
        </ul>
        <p class="programs__columns-sub-title"><strong>12-Step AA/NA Program</strong></p>
        <ul class="programs__columns-list">
            <li class="programs__item">90 Meetings First 90 Days</li>
            <li class="programs__item">5 Meetings/Week Remainter Program</li>
        </ul>
        <p class="programs__columns-sub-title"><strong>Employment</strong></p>
        <ul class="programs__columns-list">
            <li class="programs__item">Required to Work ~30 Hours Per Week</li>
            <li class="programs__item">Job Search & Vocational Assistance Provided</li>
        </ul>
        <p class="programs__columns-sub-title"><strong>Rent</strong></p>
        <ul class="programs__columns-list">
            <li class="programs__item">Includes Room, Board & Full Programming.</li>
            <li class="programs__item">$250 Intake Fee For All New Cliens</li>
        </ul>
    </div>
    <div id="programs__columns-right">
       <h1 class="programs__columns-title">
           General Requirements
       </h1>
       <p class="programs__columns-sub-title"><strong>Preference Given to Individuals Coming From:</strong></p>
       <ul class="programs__columns-list">
           <li class="programs__item">28-30 Day Residential Treatment Program</li>
           <li class="programs__item">State Certified Program While Incarcerated</li>
       </ul>
       <p class="programs__columns-sub-title"><strong>25-30 Hours of Required Programming Weekly</strong></p>
       <p class="programs__columns-sub-title"><strong>Complete Weekly Assigned Chores in House</strong></p>
       <p class="programs__columns-sub-title"><strong>Actively Work Recovery Program</strong></p>
       <p class="programs__columns-sub-title"><strong>Follow ALL Rules in Shepherds House Program</strong></p>
       <ul class="programs__columns-list">
           <li class="programs__item">Manual Provided Upon Admission</li>
           <li class="programs__item">Consequences for non-compliance</li>
       </ul>
    </div>
    <p class="programs__columns-sub-title"><strong>Program Core - Integrity, Accountability & Courage</strong></p>
    <p class="programs__columns-sub-title"><strong>Integrity & Honesty Focused Program</strong></p>
    <p class="programs__columns-sub-title"><strong>Random Drug/Alcohol Screenings</strong></p>
    <p class="programs__columns-sub-title"><strong>No Car First 30 Days</strong></p>
    <p class="programs__columns-sub-title"><strong>No Phone/Computer Until Reaching Phase 3</strong></p>
</div>
</section>`;

var _admissionsContent = `<section class="admission">
<p class="admission__para">Admission is voluntary and through referrals. The individual must be willing to commit to a long-term program of recovery and seek full-time employment. For additional intake and admission criteria, please contact Sean Schomp at the Shepherd's House +1 (859) 252-1939 Monday through Friday between the hours of 9 am and 4 pm.</p>
<div class="admission__simple-info">
    <div class="admission__info-column">
        <input class="admission__text-box" type="text" name="FN" maxlength="255" placeholder="Firstname">
        <input class="admission__text-box" type="text" name="MN" maxlength="255" placeholder="Middlename">
        <input class="admission__text-box" type="text" name="LN" maxlength="255" placeholder="Lastname">
    </div>
    <div class="admission__info-column">
        <input class="admission__text-box" type="text" name="SSN" maxlength="255" placeholder="SSN">
        <input class="admission__text-box" type="text" name="DOB" maxlength="255" placeholder="__/__/____">
        <input class="admission__text-box" type="text" name="phone" maxlength="255" placeholder="(___)___-____">
    </div>
</div>
<h1 class="admission__title">Present Location</h1>
<div class="admission__address-info">
        <input id="admission__text-box_address" type="text" name="address" maxlength="255" placeholder="Address">
</div>
<div class="admission__info-column">
        <input class="admission__text-box" type="text" name="city" maxlength="255" placeholder="City">
        <input class="admission__text-box" type="text" name="state" maxlength="255" placeholder="State">
        <input class="admission__text-box" type="text" name="zip" maxlength="255" placeholder="Zipcode">
</div>
</section>`;

var _getMyVariable = function(buttonID, callback){
    let newName = "_" + buttonID + "Content";

    $("#appContent").html(eval(newName));

    if (callback){
        callback(newName);
    }
};

return{
    getMyVariable: _getMyVariable
}

})();

