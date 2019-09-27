function Nav() {
  return (
    <section>
      <nav className="uk-navbar-container uk-navbar-transparent"
        uk-navbar="">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <img id="nav-logo"
                src="../../static/logos/iesd-initials-white.svg"
              />
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-visible@s">
            <li>
              <a href="#" uk-icon="icon: plus">About</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Goals</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Events</a></li>
            <li><a href="#" uk-icon="icon: plus">Organization</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li><a href="#">Operations</a></li>
                  <li><a href="#">Speakers</a></li>
                  <li><a href="#">Volunteers</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Join</a>
            </li>

          </ul>
          <a id="nav-toggle" className="uk-navbar-toggle uk-hidden@s"
            href="#"
            uk-toggle="target: #offcanvas-nav">
            <span uk-navbar-toggle-icon="true"></span>

            <span className="uk-margin-small-left nav-text">Menu</span>
          </a>

        </div>
      </nav>

      <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
        <div className="uk-offcanvas-bar">
          <ul className="uk-nav">
            <li>
              <a href="#">Item</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li className="uk-nav-header">Header</li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                  <li className="uk-nav-divider"></li>
                  <li><a href="#">Item</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id="offcanvas-nav" uk-offcanvas="mode: push; flip: true">
        <div className="uk-offcanvas-bar">

          <div className="nav-logo">
            <img id="canvas-logo"
              src="../../static/logos/iesd-initials-white.svg"
            />
          </div>

          <ul className="uk-nav uk-nav-default">
            <li className="uk-parent uk-visible-toggle">
              <a href="#" uk-icon="icon: plus">About </a>
              <ul className="uk-nav-sub uk-invisible-hover uk-hidden-touch">
                <li><a href="#">Mission</a></li>
                <li><a href="#">Goals</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </li>
            <li><a href="#">Events</a></li>
            <li className="uk-parent uk-visible-toggle">
              <a href="#" uk-icon="icon: plus">Organization </a>
              <ul className="uk-nav-sub uk-invisible-hover uk-hidden-touch">
                <li><a href="#">Operations</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Volunteers</a></li>
              </ul>
            </li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Join</a></li>

          </ul>

        </div>
      </div>

    </section>

  );
}

export default Nav;
