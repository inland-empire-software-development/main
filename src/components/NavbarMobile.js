import {useState, useEffect} from 'react';

// components
import NavbarHamburgerIcon from './NavbarHamburgerIcon';
import NavbarMobileDropdownItem from './NavbarMobileDropdownItem';

function NavbarMobile() {
  // State to manage if menu is open
  const [menuStyle, setMenuStyle] = useState({
    menuOpen: false,
    menuElemContainer: {
      left: "100%",
    },
  });

  // Function to check if menu is open
  // and then open/close menu
  const handleMenuClick = () => {
    if (menuStyle.menuOpen) {
      setMenuStyle({
        menuOpen: false,
        menuElemContainer: {
          left: "100%",
        },
      });
      // Enable scrolling when menu is closed
      document.body.style.overflow = "visible";
      document.documentElement.style.overflow = "visible";
    } else {
      setMenuStyle({
        menuOpen: true,
        menuElemContainer: {
          left: "0%",
        },
      });
      // Disable scrolling when menu is open
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  };

  // Register event listener for all nav items
  // Makes it so when mobile nav items are clicked
  // screen scrolls & menu closes
  useEffect(() => {
    const navbarItems = document.getElementsByClassName("navbar-mobile-button");
    for (let i = 0; i < navbarItems.length; i++) {
      navbarItems[i].addEventListener(
          "click",
          handleMenuClick,
          {passive: true}
      );
    }

    return (() => {
      for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].removeEventListener(
            "click",
            handleMenuClick,
            {passive: true}
        );
      }
    });
  }, [menuStyle]);

  // non-passive event listener to prevent
  // scrolling on iOS devices since since
  // CSS overflow doesn't work on mobile iOS
  useEffect(() => {
    document.getElementById("navbar-mobile-menu-container")
        .addEventListener(
            "touchmove",
            (e) => e.preventDefault(),
            {passive: false}
        );
    return (() => {
      document.getElementById("navbar-mobile-menu-container")
          .removeEventListener(
              "touchmove",
              (e) => e.preventDefault(),
              {passive: false}
          );
    });
  }, [menuStyle]);

  return (
    <div className="navbar-mobile">

      {/* Navbar Hamburger Icon */}
      <NavbarHamburgerIcon handleClick={handleMenuClick}/>

      {/* Navbar Menu */}
      <div
        id="navbar-mobile-menu-container"
        style={menuStyle.menuElemContainer}>

        <div className="navbar-mobile-menu">

          {/* ABOUT, mission, goals&values, community */}
          <NavbarMobileDropdownItem
            mainItem={"ABOUT"}
            subItemList={[
              {
                href: "#mission",
                text: "MISSION",
              },
              {
                href: "#goals",
                text: "GOALS & VALUES",
              },
              {
                href: "#community",
                text: "COMMUNITY",
              },
            ]}
          />

          <a
            href="#"
            className="navbar-mobile-item navbar-mobile-button">
            EVENTS
          </a>

          {/* LEADERSHIP, organizers, past speakers, success stories */}
          <NavbarMobileDropdownItem
            mainItem={"LEADERSHIP"}
            subItemList={[
              {
                href: "#organizers",
                text: "ORGANIZERS",
              },
              {
                href: "#past-speakers",
                text: "PAST SPEAKERS",
              },
              {
                href: "#success-stories",
                text: "SUCCESS STORIES",
              },
            ]}
          />

          {/* SPONSORS, our sponsors, sponsor packet, apply to speak */}
          <NavbarMobileDropdownItem
            mainItem={"SPONSORS"}
            subItemList={[
              {
                href: "#our-sponsors",
                text: "OUR SPONSORS",
              },
              {
                href: "#sponsor-packet",
                text: "SPONSOR PACKET",
              },
              {
                href: "#apply-to-speak",
                text: "APPLY TO SPEAK",
              },
            ]}
          />

          <a
            href="#"
            className="navbar-mobile-item navbar-mobile-button">
            BLOG
          </a>

          <a
            href="#join"
            className="navbar-mobile-item navbar-mobile-button">
            JOIN
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
