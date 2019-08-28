import navLogo from '../../static/logos/iesd-logo-white.svg';

function NavbarDesktop() {
  return (
    <div className="navbar-container">
      <nav>

        {/* About Dropdown Item */}
        <div className="dropdown">
          <a href="#slogan" className="nav-main">ABOUT</a>
          <div className="dropdown-content">
            <a href="#mission" className="">MISSION</a>
            <a href="#goals" className="">GOALS & VALUES</a>
            <a href="#ourCommunity" className="">COMMUNITY</a>
          </div>
        </div>

        <a href="https://www.meetup.com/iesd-meetup/events/">EVENTS</a>

        {/* Leadership Dropdown Item */}
        <div className="dropdown">
          <a href="#leadership" className="nav-main">LEADERSHIP</a>
          <div className="dropdown-content">
            <a href="#leadership" className="">ORGANIZERS</a>
            <a href="#leadership" className="">PAST SPEAKERS</a>
            <a href="#success-stories" className="">SUCCESS STORIES</a>
          </div>
        </div>

        {/* IESD Logo */}
        <img src={navLogo} alt="iesd logo" />

        {/* Sponsors Dropdown Item */}
        <div className="dropdown">
          <a href="#sponsors" className="nav-main">SPONSORS</a>
          {/* <div className="dropdown-content">
            <a href="#ourSponsors" className="">OUR SPONSORS</a>
            <a href="#sponsorPacket" className="">SPONSOR PACKET</a>
            <a href="#applyToSpeak" className="">APPLY TO SPEAK</a>
          </div> */}
        </div>

        <a href="#bloglist">BLOG</a>

        <a href="#join">JOIN</a>

      </nav>
    </div>
  );
}

export default NavbarDesktop;
