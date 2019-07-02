import navLogo from '../../static/logos/iesd-logo-white.svg';

function Navbar(){
	return (
		<div className="navbar-container">
			<nav>
				<div className="dropdown">
					<a href="#" className="nav-about">ABOUT</a>
					<div className="dropdown-content">
						<a href="#" className="">MISSION</a>
						<a href="#" className="">GOALS & VALUES</a>
						<a href="#" className="">COMMUNITY</a>
					</div>
				</div>
				<a href="#">EVENTS</a>
				<a href="#">LEADERSHIP</a>
				<img src={navLogo} alt="iesd logo" />
				<a href="#">SPONSORS</a>
				<a href="#">BLOG</a>
				<a href="#">JOIN</a>
			</nav>
		</div>
	);
}

export default Navbar;