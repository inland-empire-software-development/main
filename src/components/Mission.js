/**
 * Mission component
 * @return {Mission}
 */
function Mission() {
  return (
    <div id="mission" className="grid-container">
      <div>

        {/* left section */}
        <div id="mission-left"
          className="
            pre-2 column-9 post-1
            tablet-column-12 tablet-pre-0
            phone-column-6 phone-pre-0">

          {/* mission title */}
          <p className="mission-title">
            OUR MISSION
          </p>

          {/* mission description */}
          <p className="mission-desc tablet-hide">
            Part of our mission is to expose the local developer
            community to the process of contributing to free and
            open source software (FOSS), regardless of their
            development experience. We provide our members with a
            friendly workspace to work, learn and connect with other
            developers and industry professionals. By leveraging open
            source software, our members can develop their skills in
            various technologies while rubbing elbows with working
            industry professionals. Industry professionals that
            volunteer to speak in our meetups help build stronger
            communities by sharing their experience in the industry
            and with the technology they use every day; they give
            back to their communities.
          </p>

          {/* mission description split for mobile devices*/}
          <p className="mission-desc tablet-show">
            Part of our mission is to expose the local developer
            community to the process of contributing to free and
            open source software (FOSS), regardless of their
            development experience. We provide our members with a
            friendly workspace to work, learn and connect with other
            developers and industry professionals.
          </p>

          <p className="mission-desc tablet-show">
            By leveraging open
            source software, our members can develop their skills in
            various technologies while rubbing elbows with working
            industry professionals. Industry professionals that
            volunteer to speak in our meetups help build stronger
            communities by sharing their experience in the industry
            and with the technology they use every day; they give
            back to their communities.
          </p>

        </div>

        {/* right section */}
        <div id="mission-right" className="column-12 tablet-column-24">

          {/* mission image */}
          <div>
            <div className="mission-image"></div>
          </div>

          {/* mission image cutout */}
          <div className="mission-cutout">
            <img
              src="../../static/images/mobile/ie-cutout.png"
              alt="IE cutout overlay"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Mission;
