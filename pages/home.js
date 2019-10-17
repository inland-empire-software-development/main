import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';

import Hero from "../src/components/layout/Hero";
import Slogan from "../src/components/layout/Slogan";
import Mission from "../src/components/layout/Mission";
import Goals from "../src/components/layout/Goals";
import Community from "../src/components/layout/Community";
import CallToAction from "../src/components/global/CallToAction";
import Button from "../src/components/global/Button";
import Operations from "../src/components/layout/Operations";
import Speakers from "../src/components/layout/Speakers";
import Story from "../src/components/layout/Story";
import Sponsors from '../src/components/layout/Sponsors';
import Footer from "../src/components/global/Footer";
import Blog from "../src/components/layout/Blog";

function Home() {
  // initial render
  return (
    <div className="home">
      <Hero />
      <Slogan />
      <Mission />

      <div className="container-full uk-hidden@m">
        <img src="../static/images/hack-day-spencer-tyrice-rebecca.jpg" />
      </div>

      <Goals />

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

      <Story />

      <Sponsors />

      <Blog />
      <Footer />
    </div>
  );
}

export default withRouter(Home);
