import axios from "axios";
import {useEffect, useState} from 'react';
import reactHtmlParser from 'react-html-parser';

/**
 * Mission component
 * @return {Mission}
 */
function Mission() {
  const [mission, setMission] = useState();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect( () => {
    (async ()=>{
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=mission`,
      );
      setMission(result.data[0]);
    })();
  }, []);

  return (
    <div id="mission">
      <div className="uk-container">
        <div className="uk-column-1-2">
          {/* right section */}
          <div id="mission-image">

            {/* mission image */}
            <div className="mission-image"/>

            {/* mission image cutout */}
            <div className="mission-cutout">
              <img
                src="/static/images/desktop/ie-white-cutout.png"
                alt="IE cutout overlay"
              />
            </div>

          </div>

          {/* left section */}
          <div id="mission-right">
            <div className="uk-margin-medium-top">
              {/* mission title */}
              <p className="heading">
              Our Mission
              </p>

              {/* mission description */}
              <main className="body-content">
                {mission && reactHtmlParser(mission.value)}
              </main>
            </div>

          </div>

        </div>
      </div>
    </div>

  );
}

export default Mission;
