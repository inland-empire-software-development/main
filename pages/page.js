import "../node_modules/@fortawesome/fontawesome-free/js/all";
import "../sass/index.scss";
import React, {useState, useEffect} from 'react';

import reactHtmlParser from "react-html-parser";
import {withRouter} from "next/router";

import Hero from "../src/components/layout/Hero";
import Footer from "../src/components/global/Footer";
import axios from 'axios';

function Post(props) {
  const {router} = props;
  const {name, set} = router.query;
  const [content, setContent] = useState();

  useEffect( () => {
    (async ()=>{
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=${set}&name=${name}`
      );

      setContent(result.data);
    })();
  }, [name, set]);

  console.log(content);
  // initial render
  return (
    <div id="page" className="page">
      <Hero
        event={false}
        video={false}
        background="#"
      />

      <div className="uk-container post-container bg-white">
        <article className="post-content">
          {/* <Breadcrumb path="#"/>*/}

          <h1>title</h1>

          <section className="post-author">
            <p className="post-info">
              category<br/>
              date
            </p>

            <span className="seperator"/>

            <p className="post-author-info">
              <img src="#"/>
              link
            </p>
          </section>

          <section className="post-copy">
            content
          </section>
        </article>
      </div>

      <Footer/>
    </div>

  );
}

export default withRouter(Post);
