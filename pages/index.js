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
import About from '../src/components/About';

function Home() {
  // initial render

  return (
    <div className="home">
      <Announcement/>
      <Hero/>
      <Blog/>
      <Story/>
      <Community/>
      <Slogan/>
      <Operations/>
      <CallToAction
        background="../../static/images/join-section-background.jpg"
        button={<Button
          label="Join the Community"
          width={0}
          link="https://www.meetup.com/iesd-meetup/"
        />}
      />
      <Speakers/>
      <About/>
      <Mission/>
      <div className="container-full uk-hidden@m">
        <img src="../static/images/hack-day-spencer-tyrice-rebecca.jpg"/>
      </div>
      <Goals/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default withRouter(Home);
