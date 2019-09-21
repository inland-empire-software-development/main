import Footer from '../src/components/Footer';
import FloatingBar from "../src/components/FloatingBar";
import Announcements from "../src/components/Announcement";
import PageTitle from "../src/components/PageTitle";
import Card from "../src/components/Card";

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
            <h1 className="heading">What is a Mentorship</h1>
            <p>
              Our peer-to-peer mentorship program focuses on the skill
              development and empowerment of community members. The program
              provides successful applicants access to a mentor whose skills
              align with their desired future role and a mentored project to
              help them gain experience. Our goal is to provide members a faster and
              clearer path to skill competency.

              {/* Applicants must*/}
              {/* be interested in entrepreneurship and technology. The goal of the*/}
              {/* program is to provide community members a faster and more personal*/}
              {/* way to build their skills. As a result, the program is customized*/}
              {/* to each participant, their goals and their mentor.*/}
            </p>
          </div>
          <div className="column-10">
            <img className="mentorship-intro-image right"
              src="../static/images/mentorship/peer-to-peer-mentorship.jpg"
            />
          </div>
        </div>
      </div>

      <div className="grid-container mentorship-parallax-amber"
        style={{backgroundImage:
            `url("../static/images/mentorship/mentorship-amber-parallax.jpg")`,
        }}>
        <div className="parallax-overlay-black" />
        <h1 className="pre-2 white">
          “A mentor is someone who allows you to see the hope inside yourself.”
          — Oprah Winfrey
        </h1>
      </div>

      <div className="grid-container content leader-3">
        <div className="column-20 pre-2 padding-leader-2 padding-trailer-2">

          <div className="column-10">
            <img className="mentorship-intro-image left"
              src="../static/images/mentorship/mentorship-parker.jpg" />
          </div>


          <div className="column-10">
            <h1 className="heading">Benefits of a Mentorship</h1>
            <p>
              The advantages of the mentorship program extend to all involved in
              the program, including our organization. As a mentee, you develop
              skill competency faster, learn to manage professional
              relationships, expand your network contacts, improve your
              communication skills, gain confidence in your skills and gain
              development experience.
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
