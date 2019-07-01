import navLogo from '../../static/logos/iesd-logo-white.svg';

function Navbar(){
	return (
		<div className="navbar-container">
			<nav>
				<a href="#">ABOUT</a>
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