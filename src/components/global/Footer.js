import {withRouter} from "next/router";
import Link from "next/link";
import {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * Footer component
 * @param {any} props
 * @return {Footer}
 */
function Footer(props) {
  const [details, setDetails] = useState();
  const date = new Date();

  /**
   * Pull data using axios from the IESD API
   * Get data by set and name for pages.
   * TODO: Switch to GraphQL once support is added to plugin for Options
   */
  useEffect( () => {
    (async ()=>{
      const result = await axios(
          `https://api.iesd.com/wp-json/iesd/api/settings?set=organization`,
      );
      setDetails(result.data[0]);
    })();
  }, []);

  return (
    <footer className="container-full bg-black">
      <div className="uk-container uk-margin-medium-top">
        {/* copyright */}
        <div>
          <img
            className="footer-logo uk-align-center"
            src="/static/logos/iesd-initials-white.svg"
          />
        </div>
        <p className="uk-text-center uk-margin-remove">
          {details && details.address.value}
        </p>
        <p className="uk-text-center uk-margin-remove">
          <a href={`tel:${details ? details.phone.value : ""}`}>Give us a Call</a> | <a href={details ? "mailto:" + details.email.value : ""}>Send us a Message</a>
        </p>
        <p className="uk-text-center uk-margin-remove">
          <Link href="/page?name=conduct&set=legal">
            <a className="uk-link-text red">Code of Conduct</a>
          </Link>|<Link href="/page?name=tos&set=legal">
            <a className="uk-link-text red">Terms and Conditions</a>
          </Link>|<Link href="/page?name=privacy_policy&set=legal">
            <a className="uk-link-text red">Privacy Policy</a>
          </Link>
        </p>
        <p className="uk-text-center uk-margin-remove">
            © {date.getFullYear()} Inland Empire Software Development, Inc.<br/>
            All rights reserved.<br/>
        </p>

      </div>

      <a href="#hero" uk-totop="true"/>
    </footer>
  );
}

export default withRouter(Footer);
