/**
 * Goals component
 * @return {Goals}
 */
function Goals() {
  return (
    <div id="goals" className="uk-container">

      <div className="uk-column-1-2@m">
        {/* left side*/}
        <div id="goals-left">
          <img
            className="goals-image"
            src="../../static/images/desktop/goals-section-gradient.jpg"
          />
        </div>

        {/* right side*/}
        <div id="goals-right">

          {/* goals heading*/}
          <p className="heading uk-text-right">
            Our Goals
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
