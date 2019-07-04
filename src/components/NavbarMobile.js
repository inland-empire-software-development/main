import {useState, useEffect} from 'react';

function NavbarMobile() {
	const [menuStyle, setMenuStyle] = useState({
		menuOpen: false,
		menuElemContainer: {
			display: "none"
		},
		menuElem: {
			left: "100%"
		}
	});

	const handleHamburgerClick = (menuElemContainer, menuElem) => {
		if(menuStyle.menuOpen){
			setMenuStyle({
				menuOpen: false,
				menuElemContainer: {
					display: "none"
				},
				menuElem: {
					left: "100%"
				}
			});
		} else {
			setMenuStyle({
				menuOpen: true,
				menuElemContainer: {
					display: "block"
				},
				menuElem: {
					left: "0%"
				}
			});
		}
	}

	useEffect(() => {
		const navMobileBtn = document.getElementById('navbar-mobile-button');
		navMobileBtn.addEventListener('click', handleHamburgerClick);
		return (() => {
			navMobileBtn.removeEventListener('click', handleHamburgerClick);
		});
	})

	return (
		<div className="navbar-mobile">
			<div id="navbar-mobile-button">
				<div className="navbar-hamburger-container">
					<div className="navbar-hamburger-long"></div>
					<div className="navbar-hamburger-short"></div>
					<div className="navbar-hamburger-long"></div>
				</div>
			</div>

			<div className="navbar-mobile-menu-container" style={menuStyle.menuElemContainer}>
				<div className="navbar-mobile-menu">
					<a href="#">ABOUT</a>
					<a href="#">EVENTS</a>
					<a href="#">LEADERSHIP</a>
					<a href="#">SPONSORS</a>
					<a href="#">BLOG</a>
					<a href="#">JOIN</a>
				</div>					
			</div>
		</div>
	);
}

export default NavbarMobile;