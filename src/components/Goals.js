import axios from "axios";
import {useEffect, useState} from "react";
import reactHtmlParser from "react-html-parser";

/**
 * Goals component
 * @return {Goals}
 */
function Goals() {
  const [goal, setGoal] = useState();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect(() => {
    (async () => {
      const result = await axios( `https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=goal`);
      setGoal(result.data[0]);
    })();
  }, []);

  return (
    <div id="goals" className="container-full callToAction" style={{backgroundImage: 'url("/static/images/desktop/goals-bg.jpg")'}}>
      <div className="uk-overlay-primary uk-position-cover"></div>
      <div className="uk-container goals-desc">
        <p className="heading white uk-margin-large-top">Our Goal</p>
        <p className="body-content uk-margin-large-bottom white uk-margin-small-top">
          {goal && reactHtmlParser(goal.value)}
        </p>
      </div>
    </div>
  );
}

export default Goals;
