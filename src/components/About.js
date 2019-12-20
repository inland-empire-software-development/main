import axios from "axios";
import {useEffect, useState} from 'react';
import reactHtmlParser from 'react-html-parser';

/**
 * About component
 * @return {About}
 */
function About() {
  const [about, setAbout] = useState();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect( () => {
    (async ()=>{
      const result = await axios(`https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=about`);
      setAbout(result.data[0]);
    })();
  }, []);

  return (
    <div id="about" className="bg-black">
      <div className="uk-container">
        {/* left section */}
        <p className="heading white uk-position-relative uk-position-z-index uk-margin-remove-bottom uk-margin-large-top">
          About Us
        </p>
        <p className="body-content white uk-position-relative uk-position-z-index uk-margin-small-top uk-margin-large-bottom">
          {about && reactHtmlParser(about.value)}
        </p>

      </div>
    </div>

  );
}

export default About;
