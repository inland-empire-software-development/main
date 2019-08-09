/**
 * Footer component
 * @return {Footer}
 */
function Footer() {
  // initial render
  return (
    <footer className="grid-container">
      {/* top section */}
      <div className="column-24 leader-3 phone-column-3 phone-leader-0">
        <div className="column-4 pre-2 phone-column-6 tablet-column-12">

          <div className="phone-show">
            <p className="footer-purpose leader-2 phone-trailer-2">
              We help developers grow, network and contribute to a
              greater purpose.
            </p>
          </div>

          {/* footer logo */}
          <div>
            <img
              className="footer-logo"
              src="../../static/logos/iesd-logo-white.svg"
            />
          </div>

          {/* slogan */}
          <p className="footer-slogan leader-2">
            community<br/>
            and developer excellence
          </p>

          {/* copyright */}
          <p className="footer-copyright leader-1">
            © 2019 Inland Empire Software<br/>
            Development, Inc. IESD.<br/>
            All rights reserved.
          </p>

        </div>

        {/* purpose */}
        <div className="column-14 pre-2 phone-hide">
          <p className="footer-purpose leader-2">
            We help developers grow, network and contribute to a
            greater purpose.
          </p>
        </div>

      </div>

      {/* bottom section */}
      <div className="column-24 leader-2 phone-leader-1 phone-column-6
      tablet-column-12 footer-navigate">

        {/* navigate */}
        <div className="column-6 pre-2 tablet-column-6 phone-leader-1">
          <p>Navigate</p>

          <ul>
            <li><a href="#">Join</a></li>
            <li><a href="#">Speak</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Organizers</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* connect and legal */}
        <div className="column-6 first-column phone-leader-2">
          <div>
            <p>Connect</p>

            <p>
              <a href="mailto:community@ie-sd.com">Send Email</a>
            </p>

            <p>
              <a href="tel:18004370267">+1 800 437 0267</a>
            </p>
          </div>

          <div>
            <ul className="leader-3 footer-legal">
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* visit us */}
        <div className="column-6 first-column pre-1 phone-leader-2">
          <p>Visit Us</p>
          <p>
            3499 Tenth St. <br/>
            Riverside, CA 92501
          </p>

          <div className="mapouter leader-1">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=3499%20Tenth%20St%20Riverside%2C%20CA&t=&z=17&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
