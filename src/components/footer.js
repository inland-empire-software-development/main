// eslint-disable-next-line no-unused-vars
import React from 'react';

function Footer() {
  // initial render
  return (
    <footer className="full-width">
      <div className="grid-container">
        <div className="column-24 leader-3">
          <div className="column-6">

            <div>
              <img
                className="footer-logo"
                src="../../static/logos/iesd-logo-white.svg"
              />
            </div>

            <p className="footer-slogan leader-2">
              community<br/>
              and developer excellence
            </p>

            <p className="footer-copyright">
              © 2019 Inland Empire Software Development, Inc. IESD.<br/>
              All rights reserved.
            </p>

          </div>
          <div className="column-16 pre-2">
            <p className="footer-purpose leader-2">
              We help developers grow, network and contribute to a
              greater purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="column-24 leader-3 footer-navigate">
          <div className="column-6">
            <p>Navigate</p>
            <p>
              <ul>
                <li><a href="#">Join</a></li>
                <li><a href="#">Speak</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Sponsors</a></li>
                <li><a href="#">Organizers</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </p>
          </div>

          <div className="column-16 pre-2">
            <div className="column-5">
              <p>Connect</p>

              <p>
                <a href="mailto:community@ie-sd.com">community@ie-sd.com</a>
              </p>

              <p>
                <a href="tel:18004370267">+1 800 437 0267</a>
              </p>
            </div>

            <div className="column-5">
              <p>Visit Us</p>
              <p>
                3499 Tenth St. <br/>
                Riverside, CA 923501
              </p>
            </div>

            <div className="column-6">z</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
