// components
import NavbarMobileDropdownItem from './NavbarMobileDropdownItem';

// images
import iesdMenuLogo from '../../assets/logo/iesd-logo-white.svg';

function NavbarMobileMenu(props) {
  const {menuStyle} = props;
  return (
    <div
      id="navbar-mobile-menu-container"
      style={menuStyle.menuElemContainer}>

      <img className="navbar-mobile-menu-logo" src={iesdMenuLogo} />

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
  );
}

export default NavbarMobileMenu;
