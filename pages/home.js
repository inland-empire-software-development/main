/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';
import Hero from "../src/components/layout/Hero";
import Slogan from "../src/components/layout/Slogan";
import Mission from "../src/components/layout/Mission";
import Goals from "../src/components/layout/Goals";
import Community from "../src/components/layout/Community";

// import Fetch from 'isomorphic-unfetch';
function App() {
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
    </div>
  );
}

export default withRouter(App);
