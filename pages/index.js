import React, { useState, useEffect } from 'react';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import 'spectre.css';
import '../sass/index.scss';
 
import { withRouter } from 'next/router';
 
// import Fetch from 'isomorphic-unfetch';


function App(){
  // basic useState hook
  const [test, setTest] = useState('Hello'); // getter, setter = defaultValue

  // effect (apis, asynchronous stuff, etc.)
  useEffect(() => {
    setTimeout(()=> setTest('Goodbye'),5000);
  });

  // initial render 
  return(
    <h1>{test} IESD</h1>
  )
} 

export default withRouter(App);