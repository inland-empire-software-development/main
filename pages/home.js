/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';
import Nav from "../src/components/Nav";

// import Fetch from 'isomorphic-unfetch';
function App() {
  // initial render
  return (
    <div className="home">
      <section id="hero" >
        <div className="video-overlay" />
        <video autoPlay muted loop id="myVideo">
          <source
            src="../../static/video/main/hero-main.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container-full">
          <div className="uk-container">

            {/* nav start*/}
            <Nav />
            {/* nav end*/}

          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(App);
