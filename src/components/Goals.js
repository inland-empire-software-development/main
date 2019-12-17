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
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=goal`,
      );
      setGoal(result.data[0]);
    })();
  }, []);

  return (
    <div id="goals" className="uk-container">

      <div className="uk-column-1-2@m">
        {/* left side*/}
        <div id="goals-left">
          <img
            className="goals-image"
            src="/static/images/desktop/goals-section-gradient.jpg"
          />
        </div>

        {/* right side*/}
        <div id="goals-right">

          {/* goals heading*/}
          <p className="heading uk-text-right">
            Our Goals
          </p>

          {/* goals description*/}

          <main className="goals-desc uk-text-right body-content">
            {goal && reactHtmlParser(goal.value)}
          </main>

        </div>

      </div>
    </div>
  );
}

export default Goals;
