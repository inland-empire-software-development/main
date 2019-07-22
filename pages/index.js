/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Goals from '../src/components/Goals';
import Slogan from '../src/components/Slogan';
import Join from '../src/components/Join';
import Footer from '../src/components/Footer';
import Mission from '../src/components/Mission';

import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';

// import Fetch from 'isomorphic-unfetch';
function App() {
  // basic useState hook
  // const [test, setTest] = useState('Hello'); // getter, setter = defaultValue

  // effect (apis, asynchronous stuff, etc.)
  // useEffect(() => {
  //   setTimeout(()=> setTest('Goodbye'), 5000);
  // });

  // initial render
  return (
    <div>
      <Navbar />
      <Hero />
      <Slogan />
      <Mission />
      <Goals />
      <Join />
      <Footer />
    </div>
  );
}

export default withRouter(App);
