import {useState, useEffect} from 'react';

import reactHtmlParser from "react-html-parser";
import {withRouter} from "next/router";

import Hero from "../src/components/Hero";
import Footer from "../src/components/global/Footer";
import axios from 'axios';
import Announcement from '../src/components/global/Announcement';

function Post(props) {
  const {router} = props;
  const {name, set} = router.query;
  const [content, setContent] = useState();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect( () => {
    (async ()=>{
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=${set}&name=${name}`,
      );

      setContent(result.data[0]);
    })();
  }, [name, set]);

  // initial render
  return (
    <div id="page" className="page">
      <Announcement />
      <Hero
        event={false}
        video={false}
        background="/static/images/headers/page-header.jpg"
      />

      <div className="uk-container post-container bg-white">
        <h1>{content && content.label}</h1>
        <section className="page-content">
          {content && reactHtmlParser(content.value)}
        </section>
      </div>

      <Footer/>
    </div>

  );
}

export default withRouter(Post);
