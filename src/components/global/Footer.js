/**
 * Footer component
 * @return {Footer}
 */
function Footer() {
  return (
    <footer className="container-full bg-black">
      <div className="uk-container">
        {/* top section */}
        <div className="">
          {/* footer logo */}
          <div>
            <img
              className="footer-logo"
              src="../../static/logos/iesd-initials-white.svg"
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
              <li><a href="https://www.meetup.com/iesd-meetup/">Join</a></li>
              {/* <li><a href="#">Speak</a></li> */}
              <li><a className="uk-link-text" href="https://www.meetup.com/iesd-meetup/events/">Events</a></li>
              <li><a className="uk-link-text" href="#sponsors">Sponsors</a></li>
              <li><a className="uk-link-text" href="#operations">Operations</a></li>
              <li><a className="uk-link-text" href="#speakers">Speakers</a></li>
              <li><a className="uk-link-text" href="https://github.com/inland-empire-software-development/">Contribute</a></li>
              <li><a className="uk-link-text" href="#community">Community</a></li>
            </ul>
          </div>

          {/* connect and legal */}
          <div className="footer-column">
            <div>
              <p className="heading">Connect</p>

              <p>
                <a className="uk-link-text" href="mailto:community@iesd.com">Send Email</a>
              </p>

              <p>
                <a className="uk-link-text" href="tel:18004370267">+1 800 437 0267</a>
              </p>
            </div>

            <div>
              <ul className="footer-legal">
                <li><a className="uk-link-text" href="#">Terms and Conditions</a></li>
                <li><a className="uk-link-text" href="#">Code of Conduct</a></li>
                <li><a className="uk-link-text" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* visit us */}
          <div className="footer-column">
            <p className="heading">Visit Us</p>
            <p className="white">
              3499 Tenth St. <br/>
              Riverside, CA 92501
            </p>

            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=3499%20Tenth%20St%20Riverside%2C%20CA&t=&z=17&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </div>


        {/* copyright */}
        <p className="footer-copyright">
            © 2019 Inland Empire Software Development, Inc.<br/>
            All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
