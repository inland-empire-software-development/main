function NavbarHamburgerIcon(props) {
  const {handleClick} = props;

  return (
    <div className="navbar-hamburger" onClick={handleClick}>
      <div className="navbar-hamburger-container">
        <div className="navbar-hamburger-long"></div>
        <div className="navbar-hamburger-short"></div>
        <div className="navbar-hamburger-long"></div>
      </div>
    </div>
  );
}

export default NavbarHamburgerIcon;
