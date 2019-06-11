import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import 'spectre.css';
import '../themes/default/main';
 
import { withRouter } from 'next/router';
 
// import Fetch from 'isomorphic-unfetch';
// import Error from './error';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    // API calls here
  }
  
  render() {
    return (<h1>Hello IESD</h1>)
  }

}

export default withRouter(App);