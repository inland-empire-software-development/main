import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';

import {withRouter} from 'next/router';

import Hero from "../src/components/layout/Hero";
import Footer from "../src/components/global/Footer";

function Post() {
  // initial render
  return (
    <div className="post">
      <Hero />

      <Footer />
    </div>
  );
}

export default withRouter(Post);
