/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import Hero from '../src/components/Hero';
import Goals from '../src/components/Goals';
import Slogan from '../src/components/Slogan';
import Join from '../src/components/Join';
import Footer from '../src/components/Footer';
import Mission from '../src/components/Mission';
<<<<<<< HEAD
import Leadership from '../src/components/leadership/Leadership';
||||||| merged common ancestors
import Leadership from '../src/components/leadership/leadership';
=======
import Leadership from '../src/components/Leadership';
import FloatingBar from '../src/components/floatingBar';
import Sponsors from '../src/components/Sponsors';

>>>>>>> 7226d3e46dab6ff1040791e4daf394af5ca52875
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
    <div className="grid-container">
      <Hero />
      <Slogan />
      <Mission />
      <Goals />
      <Leadership />
      <Join />
      <Sponsors />
      <Footer />
      <FloatingBar />
    </div>
  );
}

export default withRouter(App);
