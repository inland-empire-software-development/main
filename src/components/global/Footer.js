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
      <div className="uk-container">
        {/* top section */}
        <div className="">
          {/* footer logo */}
          <div>
            <img
              className="footer-logo"
              src="/static/logos/iesd-initials-white.svg"
            />
          </div>

          {/* slogan */}
          <p className="footer-slogan">
              community and <br/>developer excellence
          </p>
        </div>

        {/* bottom section */}
        <div className="footer-navigate uk-column-1-3@m uk-column-1-2@s">

          {/* navigate */}
          <div className="footer-column">
            <p className="heading">Navigate</p>

            <ul>
              <li>
                <a className="uk-link-text"
                  href="https://www.meetup.com/iesd-meetup/">
                  Join
                </a>
              </li>

              <li>
                <a className="uk-link-text" href="https://www.meetup.com/iesd-meetup/events/">Events</a>
              </li>

              <li>
                <Link href="/#sponsors">
                  <a className="uk-link-text">Sponsors</a>
                </Link>
              </li>

              <li>
                <Link href="/#operations">
                  <a className="uk-link-text">Operations</a>
                </Link>
              </li>

              <li>
                <Link href="/#speakers">
                  <a className="uk-link-text">Speakers</a>
                </Link>
              </li>

              <li>
                <a className="uk-link-text" href="https://github.com/inland-empire-software-development/">Contribute</a>
              </li>

              <li>
                <Link href="/#community">
                  <a className="uk-link-text">Community</a>
                </Link>
              </li>

              <li>
                <Link href="/mentorship">
                  <a className="uk-link-text">Mentorship</a>
                </Link>
              </li>

              <li>
                <Link href="/volunteer">
                  <a className="uk-link-text">Volunteer</a>
                </Link>
              </li>

            </ul>
          </div>

          {/* connect and legal */}
          <div className="footer-column">
            <div>
              <p className="heading">Connect</p>

              <p>
                <a className="uk-link-text"
                  href={details ? "mailto:" + details.email.value : ""}>
                  Send Email
                </a>
              </p>

              <p>
                <a className="uk-link-text" href="tel:18004370267">
                    +{details ? details.phone.value : ""}
                </a>
              </p>
            </div>

            <div>
              <ul className="footer-legal">
                <li>
                  <Link href="/page?name=conduct&set=legal">
                    <a className="uk-link-text">Code of Conduct</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page?name=tos&set=legal">
                    <a className="uk-link-text">Terms and Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page?name=privacy_policy&set=legal">
                    <a className="uk-link-text">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* visit us */}
          <div className="footer-column">
            <p className="heading">Visit Us</p>
            <p className="white">
              {details ? details.address.value : ""}
            </p>

            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src={details ? details.map.value : ""}
                />
              </div>
            </div>
          </div>
        </div>


        {/* copyright */}
        <p className="footer-copyright">
            © {date.getFullYear()} Inland Empire Software Development, Inc.<br/>
            All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default withRouter(Footer);
