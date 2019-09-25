/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';
import Hero from "../src/components/Hero";

// import Fetch from 'isomorphic-unfetch';
function App() {
  // initial render
  return (
    <div className="home">
      <Hero />
    </div>
  );
}

export default withRouter(App);
