import {useEffect, useState} from 'react';
import axios from 'axios';
import reactHtmlParser from 'react-html-parser';

function Announcement() {
  const [message, setMessage] = useState();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect( () => {
    (async ()=>{
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=organization&name=announcement`,
      );
      setMessage(result.data[0]);
    })();
  }, []);

  return (
    <div id="announcement" className="container-full bg-yellow black">
      <section className="uk-container">
        {message && reactHtmlParser(message.value)}
      </section>
    </div>
  );
}

export default Announcement;
