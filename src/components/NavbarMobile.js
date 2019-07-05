import {useState, useEffect} from 'react';

function NavbarMobile() {
  // State to manage if menu is open
  const [menuStyle, setMenuStyle] = useState({
    menuOpen: false,
    menuElemContainer: {
      left: "100%",
    },
  });

  // State to manage if about dropdown is open
  const [aboutStyle, setAboutStyle] = useState({
    aboutOpen: false,
    aboutElem: {
      height: "50px",
    },
  });

  // State to manage if leadership dropdown is open
  const [leadershipStyle, setLeadershipStyle] = useState({
    leadershipOpen: false,
    leadershipElem: {
      height: "50px",
    },
  });

  // State to manage if sponsorship is open
  const [sponsorsStyle, setSponsorsStyle] = useState({
    sponsorsOpen: false,
    sponsorsElem: {
      height: "50px",
    },
  });

  // Function to check if menu is open
  // and then open/close menu
  const handleHamburgerClick = () => {
    if (menuStyle.menuOpen) {
      setMenuStyle({
        menuOpen: false,
        menuElemContainer: {
          left: "100%",
        },
      });
    } else {
      setMenuStyle({
        menuOpen: true,
        menuElemContainer: {
          left: "0%",
        },
      });
    }
  };

  // open/close about dropdown
  const handleAboutClick = () => {
    if (aboutStyle.aboutOpen) {
      setAboutStyle({
        aboutOpen: false,
        aboutElem: {
          height: "50px",
        },
      });
    } else {
      setAboutStyle({
        aboutOpen: true,
        aboutElem: {
          height: "125px",
        },
      });
    }
  };

  // open/close leadership dropdown
  const handleLeadershipClick = () => {
    if (leadershipStyle.leadershipOpen) {
      setLeadershipStyle({
        leadershipOpen: false,
        leadershipElem: {
          height: "50px",
        },
      });
    } else {
      setLeadershipStyle({
        leadershipOpen: true,
        leadershipElem: {
          height: "125px",
        },
      });
    }
  };

  // open/close sponsors dropdown
  const handleSponsorsClick = () => {
    if (sponsorsStyle.sponsorsOpen) {
      setSponsorsStyle({
        sponsorsOpen: false,
        sponsorsElem: {
          height: "50px",
        },
      });
    } else {
      setSponsorsStyle({
        sponsorsOpen: true,
        sponsorsElem: {
          height: "125px",
        },
      });
    }
  };

  // Register event listener for hamburger icon
  useEffect(() => {
    const navMobileBtn = document.getElementById('navbar-mobile-button');
    navMobileBtn.addEventListener('click', handleHamburgerClick);
    return (() => {
      navMobileBtn.removeEventListener('click', handleHamburgerClick);
    });
  });

  // Register event listener for about item
  useEffect(() => {
    const mobileAbout = document.getElementById("mobile-about");
    mobileAbout.addEventListener("click", handleAboutClick);
    return (() => {
      mobileAbout.removeEventListener("click", handleAboutClick);
    });
  });

  // Register event listener for leadership item
  useEffect(() => {
    const mobileLeadership = document.getElementById("mobile-leadership");
    mobileLeadership.addEventListener("click", handleLeadershipClick);
    return (() => {
      mobileLeadership.removeEventListener("click", handleLeadershipClick);
    });
  });

  // Register event listener for sponsors item
  useEffect(() => {
    const mobileSponsors = document.getElementById("mobile-sponsors");
    mobileSponsors.addEventListener("click", handleSponsorsClick);
    return (() => {
      mobileSponsors.removeEventListener("click", handleSponsorsClick);
    });
  });

  // Register event listener for all nav items
  useEffect(() => {
    const navbarItems = document.getElementsByClassName("navbar-mobile-button");
    for (let i = 0; i < navbarItems.length; i++) {
      navbarItems[i].addEventListener("click", handleHamburgerClick);
    }

    return (() => {
      for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].removeEventListener("click", handleHamburgerClick);
      }
    });
  });

  return (
    <div className="navbar-mobile">

      {/* Navbar Hamburger Icon */}
      <div id="navbar-mobile-button">
        <div className="navbar-hamburger-container">
          <div className="navbar-hamburger-long"></div>
          <div className="navbar-hamburger-short"></div>
          <div className="navbar-hamburger-long"></div>
        </div>
      </div>

      {/* Navbar Menu */}
      <div
        className="navbar-mobile-menu-container"
        style={menuStyle.menuElemContainer}>

        <div className="navbar-mobile-menu">
          <div
            className="dropdown-mobile"
            style={aboutStyle.aboutElem}>

            <a
              href="#about" id="mobile-about"
              className="navbar-mobile-item">
                ABOUT
            </a>
            <div className="dropdown-mobile-content">
              <a
                href="#mission"
                className="navbar-mobile-button">
                MISSION
              </a>
              <a
                href="#goals"
                className="navbar-mobile-button">
                GOALS & VALUES
              </a>
              <a
                href="#community"
                className="navbar-mobile-button">
                COMMUNITY
              </a>
            </div>
          </div>
          <a
            href="#"
            className="navbar-mobile-item navbar-mobile-button">
            EVENTS
          </a>
          <div
            className="dropdown-mobile"
            style={leadershipStyle.leadershipElem}>

            <a
              href="#about" id="mobile-leadership"
              className="navbar-mobile-item">
              LEADERSHIP
            </a>

            <div className="dropdown-mobile-content">

              <a
                href="#mission"
                className="navbar-mobile-button">
                ORGANIZERS
              </a>
              <a
                href="#goals"
                className="navbar-mobile-button">
                PAST SPEAKERS
              </a>
              <a
                href="#community"
                className="navbar-mobile-button">
                SUCCESS STORIES
              </a>
            </div>
          </div>

          <div
            className="dropdown-mobile"
            style={sponsorsStyle.sponsorsElem}>

            <a
              href="#about"
              id="mobile-sponsors"
              className="navbar-mobile-item">
              SPONSORS
            </a>

            <div className="dropdown-mobile-content">

              <a
                href="#mission"
                className="navbar-mobile-button">
                OUR SPONSORS
              </a>
              <a
                href="#goals"
                className="navbar-mobile-button">
                SPONSOR PACKET
              </a>
              <a
                href="#community"
                className="navbar-mobile-button">
                APPLY TO SPEAK
              </a>

            </div>

          </div>
          <a
            href="#"
            className="navbar-mobile-item navbar-mobile-button">
            BLOG
          </a>

          <a
            href="#"
            className="navbar-mobile-item navbar-mobile-button">
            JOIN
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
