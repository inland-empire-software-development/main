import navLogo from '../../static/logos/iesd-logo-white.svg';

function NavbarDesktop() {
  return (
    <div className="navbar-container">
      <nav>

        {/* About Dropdown Item */}
        <div className="dropdown">
          <a href="#about" className="nav-main">ABOUT</a>
          <div className="dropdown-content">
            <a href="#mission" className="">MISSION</a>
            <a href="#goals" className="">GOALS & VALUES</a>
            <a href="#community" className="">COMMUNITY</a>
          </div>
        </div>

        <a href="#events">EVENTS</a>

        {/* Leadership Dropdown Item */}
        <div className="dropdown">
          <a href="#leadership" className="nav-main">LEADERSHIP</a>
          <div className="dropdown-content">
            <a href="#organizers" className="">ORGANIZERS</a>
            <a href="#speakers" className="">PAST SPEAKERS</a>
            <a href="#success" className="">SUCCESS STORIES</a>
          </div>
        </div>

        {/* IESD Logo */}
        <img src={navLogo} alt="iesd logo" />

        {/* Sponsors Dropdown Item */}
        <div className="dropdown">
          <a href="#sponsors" className="nav-main">SPONSORS</a>
          <div className="dropdown-content">
            <a href="#ourSponsors" className="">OUR SPONSORS</a>
            <a href="#sponsorPacket" className="">SPONSOR PACKET</a>
            <a href="#applyToSpeak" className="">APPLY TO SPEAK</a>
          </div>
        </div>

        <a href="#blog">BLOG</a>

        <a href="#join">JOIN</a>

      </nav>
    </div>
  );
}

export default NavbarDesktop;
