import Link from "next/link";

function Nav() {
  const navigation = [
    {
      label: "Organization", icon: true, children: [
        {label: "About Us", url: "/#about"},
        {label: "Mission", url: "/#mission"},
        {label: "Goals", url: "/#goals"},
        {label: "Community", url: "/#community"},
      ],
    },
    {
      label: "Information", icon: true, children: [
        {label: "Mentorships", url: "/mentorship"},
        {label: "Events", url: "https://www.meetup.com/iesd-meetup/events/", target: "_blank"},
        {label: "Volunteering", url: "/volunteer"},
        {label: "Operations", url: "/#operations"},
        {label: "Past Speakers", url: "/#speakers"},
        {label: "Sign up to Speak", url: "/forms/speak", target: "_blank"},
      ],
    },
    {label: "Sponsors", url: "/#sponsors"},
    {label: "Newsroom", url: "/#blog"},
    {label: "Join", url: "https://www.meetup.com/iesd-meetup/", target: "_blank"},
  ].map((item) => createListObject(item));

  return (
    <section>
      <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link href="/">
                <a className="uk-logo">
                  <img id="nav-logo" src="/static/logos/iesd-initials-white.svg" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">

          <ul className="uk-navbar-nav uk-visible@s">
            {
              navigation.map((link) =>
                createListItem(link),
              )
            }
          </ul>

          <a id="nav-toggle" className="uk-navbar-toggle uk-hidden@s" href="#" uk-toggle="target: #offcanvas-nav">
            <span uk-navbar-toggle-icon="true"/>
          </a>

        </div>
      </nav>

      <div id="offcanvas-nav" uk-offcanvas="mode: push; flip: true">
        <div className="uk-offcanvas-bar">
          <div className="nav-logo">
            <img id="canvas-logo"
              src="/static/logos/iesd-initials-white.svg"
            />
          </div>

          <ul className="uk-nav uk-nav-default">
            {
              navigation.map((link) =>
                createListItem(link, true),
              )
            }
          </ul>

        </div>
      </div>

    </section>
  );
}

// helper functions
/**
 * Returns a new nav item object
 * @param {string} label
 * @param {string} url
 * @param {boolean} icon
 * @param {array} children
 * @param {string} target
 * @return {{c: *, u: *, i: *, l: *}}
 */
const createListObject = ({
  label,
  url = "#",
  icon = false,
  children = false,
  target,
}) => ({label, url, icon, children, target});

const createListItem = (obj, mobile = false) => {
  const opts = {};

  if (obj.icon) {
    opts["uk-icon"] = "plus";
  }

  if (obj.target !== undefined) {
    opts["target"] = obj.target;
  }

  if (!obj.children && mobile) {
    opts["uk-toggle"] = "target: #offcanvas-nav";
  }

  return (
    <li key={obj.label.toLowerCase()}
      className={obj.children && mobile ?
        "uk-parent uk-visible-toggle" : "close-canvas"}>

      {renderLink(obj, opts)}

      {obj.children && mobile && getMobileSubList(obj)}
      {obj.children && !mobile && getSubList(obj)}
    </li>
  );
};

const identifyLink = (url) => url.indexOf("iesd.com");

const renderLink = (obj, opts) =>
   identifyLink(obj.url) !== -1 ?
    <Link href={obj.url}>
      <a {...opts}>{obj.label}</a>
    </Link> :
    <a {...opts} href={obj.url}>
      {obj.label}
    </a>;

const getSubList = (obj) =>
  <div className="uk-navbar-dropdown">
    <ul className="uk-nav uk-navbar-dropdown-nav">
      {obj.children.map((child) => createListItem(child))}
    </ul>
  </div>;

const getMobileSubList = (obj) =>
  <ul className="uk-nav-sub uk-invisible-hover">
    {obj.children.map((child) => createListItem(child))}
  </ul>;

export default Nav;
