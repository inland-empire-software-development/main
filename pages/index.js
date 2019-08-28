/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import Announcements from '../src/components/Announcement';
import BlogList from '../src/components/BlogList';
import Community from '../src/components/Community';
import FloatingBar from '../src/components/FloatingBar';
import Footer from '../src/components/Footer';
import Goals from '../src/components/Goals';
import Hero from '../src/components/Hero';
import Join from '../src/components/Join';
import Leadership from '../src/components/Leadership';
import Mission from '../src/components/Mission';
import Slogan from '../src/components/Slogan';
import Sponsors from '../src/components/Sponsors';
import SponsorShip from '../src/components/Sponsorship';
import SuccessStories from '../src/components/SuccessStories';

import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';

// import Fetch from 'isomorphic-unfetch';
function App() {
  // initial render
  return (
    <div className="grid-container">
      <Announcements />
      <Hero />
      <Slogan />
      <Mission />
      <Goals />
      <Community />
      <Join />
      <Leadership />
      <SuccessStories />
      <Sponsors />
      <SponsorShip/>
      <BlogList />
      <Footer />
      <FloatingBar />
    </div>
  );
}

export default withRouter(App);
