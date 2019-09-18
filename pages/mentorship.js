import Footer from '../src/components/Footer';
import FloatingBar from "../src/components/FloatingBar";
import Announcements from "../src/components/Announcement";
import PageTitle from "../src/components/PageTitle";
import Card from "../src/components/Card";

import mentorshipParallax from
  "../static/images/mentorship/mentorship-amber-parallax.jpg";
import mentorshipImage from
  "../static/images/mentorship/peer-to-peer-mentorship.jpg";

import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';

function App() {
  // initial render
  return (
    <div className="grid-container mentorship">
      <Announcements />
      <PageTitle title="Mentorship" />

      <div className="grid-container content leader-3">
        <div className="column-20 pre-2 padding-leader-2 padding-trailer-2">
          <div className="column-10">
            <p>
              Our mentorship program focuses on the education and empowerment of
              community members interested in technology and entrepreneurship.
              The goal of the program is to identify and solve the obstacles
              keeping mentees from achieving their professional goals.
              As a result, the program is customized to each participant
              and their goals.
            </p>
          </div>
          <div className="column-10">
            <img className="mentorship-intro-image" src={mentorshipImage} />
          </div>
        </div>
      </div>

      <div className="grid-container mentorship-parallax-amber"
        style={{backgroundImage: `url(${mentorshipParallax})`}}>
        <div className="parallax-overlay-black" />
      </div>

      <div className="grid-container content leader-3">
        <div className="column-20 pre-2 padding-leader-2 padding-trailer-2">
          <div className="column-10">
            <img className="mentorship-intro-image" src={mentorshipImage} />
          </div>
          <div className="column-10">
            <h2>How it Works</h2>
            <p>
              Our mentorship program focuses on the education and empowerment of
              community members interested in technology and entrepreneurship.
              The goal of the program is to identify and solve the obstacles
              keeping mentees from achieving their professional goals.
              As a result, the program is customized to each participant
              and their goals.
            </p>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="grid-container content">
        {/* peer to peer mentorship cards*/}
        <div className="column-20 pre-2 padding-leader-2 padding-trailer-2">
          <div className="column-5">
            <h2 className="text-darker-gray leader-3 font-size-5">
              A peer-to-peer mentorship program
            </h2>
          </div>

          <div className="column-14 pre-1">
            <div className="block-group block-group-3-up trailer-2 leader-2">
              <Card color="green" title="Traditional Mentorship" description="test" content="test" link="#" linkLabel="learn more"/>
              <Card color="blue" title="Online Remote Mentorship" description="test" content="test" link="#" linkLabel="learn more"/>
              <Card color="yellow" title="Peer Learning Partnership" description="test" content="test" link="#" linkLabel="learn more"/>
            </div>
          </div>
        </div>
      </div>


      <Footer />
      <FloatingBar />
    </div>
  );
}

export default withRouter(App);
