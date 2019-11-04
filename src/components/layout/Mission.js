import axios from "axios";
import {useEffect, useState} from 'react';
import reactHtmlParser from 'react-html-parser';
/**
 * Mission component
 * @return {Mission}
 */
function Mission() {
  const [details, setDetails] = useState();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect( () => {
    (async ()=>{
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=mission`
      );
      setDetails(result.data[0]);
    })();
  }, []);

  console.log(details);

  return (
    <div id="mission" className="uk-container">
      <div className="uk-column-1-2@m">
        {/* left section */}
        <div id="mission-left">
          {/* mission title */}
          <p className="heading">
            Our Mission
          </p>

          {/* mission description */}
          <main className="mission-desc">
            {details && reactHtmlParser(details.value)}
          </main>

        </div>

        {/* right section */}
        <div id="mission-right">

          {/* mission image */}
          <div className="mission-image"/>

          {/* mission image cutout */}
          <div className="mission-cutout">
            <img
              src="../../static/images/desktop/ie-white-cutout.png"
              alt="IE cutout overlay"
            />
          </div>

        </div>
      </div>
    </div>

  );
}

export default Mission;
