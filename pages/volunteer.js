import Jobs from "../src/components/Jobs";
import Announcements from "../src/components/global/Announcement";
import Nav from "../src/components/global/Nav";
import PageTitle from "../src/components/PageTitle";
import Footer from "../src/components/global/Footer";
import CallToAction from "../src/components/global/CallToAction";
import Button from "../src/components/global/Button";

function Volunteer() {
  return (
    <div className="volunteer">
      <Announcements/>

      <div className="uk-container" style={{height: "0"}}>
        <Nav />
      </div>

      <PageTitle
        title="Volunteer"
        url="../../static/images/headers/page-header.jpg"/>

      <div className="uk-container uk-margin-large-top uk-margin-large-bottom">
        <div className="uk-column-1-2@m">
          <div>
            <p className="body-content">
              The following are currently open positions for the nonprofit organization, <strong>Inland Empire Software Development, Inc</strong> (IESD).
              Although these are volunteer positions for a nonprofit organization, we do provide letters of recommendation and references.
              If you know anyone outside of IESD who may be interested, share this list with them. Our community can always use an extra hand.
            </p>
            <p className="body-content uk-margin-remove">Benefits include:</p>
            <ul className="uk-margin-remove">
              <li>Get experience working on a large team</li>
              <li>Making a difference in your community</li>
              <li>Interacting with industry professionals</li>
              <li>Getting experience in a position you are interested in</li>
            </ul>
          </div>
          <div>
            <figure>
              <img className="volunteer-intro-image right uk-align-center" src="/static/images/community/volunteer-page.jpg"/>
            </figure>
          </div>
        </div>
      </div>

      <div className="bg-yellow">
        <Jobs/>
      </div>

      <CallToAction
        background="../../static/images/join-section-background.jpg"
        button={<Button
          label="Make a Difference"
          width={0}
          link="/forms/volunteer"
        />}
      />

      <Footer/>
    </div>
  );
}

export default Volunteer;
