import '../sass/index.scss';

import {withRouter} from 'next/router';

import Hero from "../src/components/Hero";
import Slogan from "../src/components/Slogan";
import Mission from "../src/components/Mission";
import Goals from "../src/components/Goals";
import Community from "../src/components/Community";
import CallToAction from "../src/components/global/CallToAction";
import Button from "../src/components/global/Button";
import Operations from "../src/components/Operations";
import Speakers from "../src/components/Speakers";
import Story from "../src/components/Story";
import Sponsors from '../src/components/Sponsors';
import Footer from "../src/components/global/Footer";
import Blog from "../src/components/Blog";
import Announcement from '../src/components/global/Announcement';

function Home() {
  // initial render

  return (
    <div className="home">
      <Announcement />
      <Hero />
      <Blog />
      <Story />

      <Community />

      <CallToAction
        background="../../static/images/join-section-background.jpg"
        button={<Button
          label="Join the Community"
          width={0}
          link="https://www.meetup.com/iesd-meetup/"
        />}
      />

      <Operations />
      <Speakers/>

      <Slogan/>
      <Mission />

      <div className="container-full uk-hidden@m">
        <img src="../static/images/hack-day-spencer-tyrice-rebecca.jpg" />
      </div>

      <Goals />
      <Sponsors />

      <div className="container-full callToAction"
           style={{backgroundImage: 'url("../../static/images/join-section-background.jpg")'}}>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-container uk-padding-large goals-desc">
          <p className="heading white">Our Goals</p>
          <p className="body-content white">
            IESD is a 501(c)3 non-profit organization, dedicated to increasing awareness of technology and open source software in the Inland Empire. Our goal is to do this by bringing community members together to network, learn, gain experience and share knowledge.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Home);
