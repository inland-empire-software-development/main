/**
 * Goals component
 * @return {Goals}
 */
function Goals() {
  return (
    <div className="grid-container goals-container">

      <div id="goals" className="column-24">
        {/* left side*/}
        <div id="goals-left" className="column-12">
          <img
            className="goals-image"
            src="../../static/images/desktop/goals-section-gradient.jpg"
          />
        </div>

        {/* right side*/}
        <div id="goals-right" className="column-10 post-2
        tablet-column-12 phone-post-0">

          {/* goals heading*/}
          <p className="goals-heading">
            OUR GOALS
          </p>

          {/* goals description*/}

          <p className="goals-desc">
            <strong>IESD</strong> is a 501(c)3 non-profit
          organization, dedicated to increasing awareness of technology and
          open source software in the Inland Empire. Our goal is to do this by
          bringing community members together to network, learn, gain
          experience and share knowledge.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Goals;
