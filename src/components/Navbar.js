import {useState, useEffect} from 'react';

// components
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

// utils
import {isMobile} from '../utils/isMobile';

function Navbar() {
  const [navbar, setNavBar] = useState(null);
  const [width, setWidth] = useState(null);

  // Uses the util function isMobile to
  // check if screen width is below 860px
  // Displays appropriate navbar for screen width

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (isMobile()) {
      setNavBar(<NavbarMobile />);
    } else {
      setNavBar(<NavbarDesktop />);
    }

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, [width]);

  return (
    <div id="navbar">
      {navbar}
    </div>
  );
}

export default Navbar;
