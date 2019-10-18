/**
 * Mission component
 * @return {Mission}
 */
function Mission() {
  return (
    <div id="mission" className="grid-container">
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
        <p className="mission-desc">
         Our mission at IESD is two-fold. First, we want to help
         increase the tech footprint of the Inland Empire by aiding
         businesses and/or startups in employing local Inland Empire
         developers. Second, by helping developers learn, network and
         find employment locally, we decrease brain drain and increase
         the tech presence in the Inland Empire. By supporting local
         startups and keeping tech jobs filled by local talent, we also
         help open up more business opportunities in other sectors of the
         workforce.
        </p>

      </div>

      {/* right section */}
      <div id="mission-right" className="column-12 tablet-column-24">

        {/* mission image */}
        <div className="mission-image"/>

        {/* mission image cutout */}
        <div className="mission-cutout">
          <img
            src="../../static/images/desktop/ie-white-cutout.png"
            alt="IE cutout overlay"
          />
        </div>

      </div>
    </div>
  );
};

export default Mission;
