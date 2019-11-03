import "../node_modules/@fortawesome/fontawesome-free/js/all";
import "../sass/index.scss";
import {useState, useEffect} from 'react';

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
      console.log(result);
    })();
  }, [name, set]);

  // initial render
  return (
    <div id="page" className="page">
      <Hero
        event={false}
        video={false}
        background="../../static/images/headers/page-header.jpg"
      />

      <div className="uk-container post-container bg-white">
        <h1>Title</h1>
        <section className="page-content">
          {content && reactHtmlParser(content[name])}
        </section>
      </div>

      <Footer/>
    </div>

  );
}

export default withRouter(Post);
