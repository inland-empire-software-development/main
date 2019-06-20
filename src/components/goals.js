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

          {/* goals information*/}
          <div className="goals-info">

            {/* goals heading*/}
            <p className="goals-heading">
              OUR GOALS
            </p>

            {/* goals description*/}
            <div className="goals-desc">

              <p>
                Inland Empire Software Development (IESD) is an independent
                community organization dedicated to bringing community
                members together to network, educate and share knowledge
                - all with the goal of increasing the technology presence
                in the Inland Empire. <br/><br/>
                IESD is spearheaded by an organizing group that is
                passionate about increasing technology awareness by
                increasing industry professional involvement
                with the community, exposing developers to new technologies
                and creating partnerships with community entities that
                benefit the community.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Goals;
