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
import MemberList from "../src/components/MemberList";

import Staff from "../src/data/Staff";
import Operations from "../src/components/layout/Operations";
import Speakers from "../src/components/layout/Speakers";

function App() {
  const operations = [
    {
      name: 'Lloan Alas',
      title: 'Executive Director',
      image: '../static/images/desktop/lloanalas.jpg',
    },
    {
      name: 'Tony Nguyen',
      title: 'Chief Financial Officer',
      image: '../static/images/desktop/tonynguyen.jpg',
    },
    {
      name: 'Felipe Fernandez',
      title: 'Secretary',
      image: '../static/images/desktop/felipefernandez.jpg',
    },
    {
      name: 'Luis Velazquez',
      title: 'Lead React Developer',
      image: '../static/images/desktop/luisvelazquez.jpg',
    },
    {
      name: 'Jen Latchman',
      title: 'Digital Marketing',
      image: '../static/images/desktop/jenlatchman.jpg',
    },
    {
      name: 'Jonathan Nguyen',
      title: 'Application Developer',
      image: '../static/images/desktop/jonathannguyen.jpg',
    },
    {
      name: 'Kelly Lam',
      title: 'Internal Relations Director',
      image: '../static/images/desktop/kellylam.jpg',
    },
    {
      name: 'Amy Ambard',
      title: 'Front End Developer',
      image: '../static/images/desktop/amyambard.jpg',
    },
    {
      name: 'Amber Macbain',
      title: 'Front End Developer',
      image: '../static/images/desktop/ambermacbain.jpg',
    },
  ];
  const speakers = [
    {
      name: 'Vast Lee',
      title: 'What Employers Want',
      image: '../static/images/desktop/vastlee.jpg',
    },
    {
      name: 'Tim Jenkins',
      title: 'From Dev to Co-Founder',
      image: '',
    },
    {
      name: 'Spencer Trumbore',
      title: 'Node.js & Wolfram Alpha API',
      image: '../static/images/desktop/spencer.jpg',
    },
    {
      name: 'Ixshel Escamilla',
      title: 'Introduction to Angular',
      image: '',
    },
    {
      name: 'Rey Santiago',
      title: 'Designers and Developers',
      image: '',
    },
    {
      name: 'Felipe Fernandez',
      title: 'Arrow Functions',
      image: '../static/images/desktop/felipefernandez.jpg',
    },
    {
      name: 'Csaba Balough',
      title: 'Javascript Closures',
      image: '',
    },
    {
      name: 'Nicholas Twohig',
      title: 'Project Management & Agile',
      image: '',
    },
    {
      name: 'Anisha Joshipura',
      title: 'Flexbox',
      image: '',
    },
    {
      name: 'Tony Nguyen',
      title: 'Exploring Jest',
      image: '../static/images/desktop/tonynguyen.jpg',
    },
    {
      name: 'Lloan Alas',
      title: 'Eloquent Javascript Series',
      image: '../static/images/desktop/lloanalas.jpg',
    },
  ];

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
    </div>
  );
}

export default withRouter(App);
