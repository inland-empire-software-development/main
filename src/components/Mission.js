import axios from "axios";
import { useEffect, useState } from "react";
import reactHtmlParser from "react-html-parser";

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
  useEffect(() => {
    (async () => {
      const result = await axios(
         `https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=mission`
      );
      setMission(result.data[0]);
    })();
  }, []);

  return (
    <div id="mission" className="bg-black" style={{backgroundImage: 'url("/static/images/desktop/missionbgbxl.jpg")'}}>
      <div className="uk-container">
        <p className="heading uk-position-relative uk-position-z-index uk-margin-remove-bottom uk-margin-large-top">
          Our Mission
        </p>
        <hr className="iesdHr"></hr>
        <p id="missionText" className="body-content uk-position-relative uk-position-z-index uk-margin-small-top uk-margin-large-bottom">
          Building Communities around Technology
          {/* need to update mission statement in wordpress will use static text for now */}
          {/* {mission && reactHtmlParser(mission.value)} */}
        </p>
      </div>
    </div>
  );
}

export default Mission;
