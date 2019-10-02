/**
 * Mission component
 * @return {Mission}
 */
function Mission() {
  return (
    <div id="mission" className="uk-container">
      <div className="uk-column-1-2@m">
        {/* left section */}
        <div id="mission-left">
          {/* mission title */}
          <p className="heading">
            Our Mission
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
        <div id="mission-right">

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
    </div>

  );
}

export default Mission;