/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Goals from '../src/components/goals';
import Slogan from '../src/components/slogan';
import Leadership from '../src/components/leadership/leadership';
import Footer from '../src/components/footer';
import Mission from '../src/components/mission';
||||||| merged common ancestors
import React, {useState, useEffect} from 'react';
import Goals from '../src/components/goals';
import Slogan from '../src/components/slogan';
import Footer from '../src/components/footer';
import Mission from '../src/components/mission';
=======
import React, {useState, useEffect} from 'react';
import Goals from '../src/components/Goals';
import Slogan from '../src/components/Slogan';
import Footer from '../src/components/Footer';
import Mission from '../src/components/Mission';
>>>>>>> fe327bc6704c2414443edcd7f0737945c7fb6a20
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import { withRouter } from 'next/router';

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
      <Slogan />
      <Mission />
      <Goals />
      <Leadership />
      <Footer />
    </div>
  );
}

export default withRouter(App);
