import {useState, useEffect} from 'react';

// components
import NavbarHamburgerIcon from './NavbarHamburgerIcon';
import NavbarMobileMenu from './NavbarMobileMenu';

// images
import iesdNavLogo from '../../assets/iesd-initials-white.svg';

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

      <img className="navbar-mobile-logo" src={iesdNavLogo} />

      {/* Navbar Hamburger Icon */}
      <NavbarHamburgerIcon handleClick={handleMenuClick}/>

      {/* Navbar Menu */}
      <NavbarMobileMenu menuStyle={menuStyle}/>

    </div>
  );
}

export default NavbarMobile;
