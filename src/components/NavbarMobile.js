import {useState, useEffect} from 'react';

function NavbarMobile() {
	const [menuStyle, setMenuStyle] = useState({
		menuOpen: false,
		menuElemContainer: {
			left: "100%"
		}
	});

	const [aboutStyle, setAboutStyle] = useState({
		aboutOpen: false,
		aboutElem: {
			height: "50px"
		}
	});

	const [leadershipStyle, setLeadershipStyle] = useState({
		leadershipOpen: false,
		leadershipElem: {
			height: "50px"
		}
	});

	const [sponsorsStyle, setSponsorsStyle] = useState({
		sponsorsOpen: false,
		sponsorsElem: {
			height: "50px"
		}
	});

	const handleHamburgerClick = (menuElemContainer, menuElem) => {
		if(menuStyle.menuOpen){
			setMenuStyle({
				menuOpen: false,
				menuElemContainer: {
					left: "100%"
				}
			});
		} else {
			setMenuStyle({
				menuOpen: true,
				menuElemContainer: {
					left: "0%"
				}
			});
		}
	}

	const handleAboutClick = () => {
		if(aboutStyle.aboutOpen){
			setAboutStyle({
				aboutOpen: false,
				aboutElem: {
					height: "50px"
				}
			});
		} else {
			setAboutStyle({
				aboutOpen: true,
				aboutElem: {
					height: "125px"
				}
			});
		}
	}

	const handleLeadershipClick = () => {
		if(leadershipStyle.leadershipOpen){
			setLeadershipStyle({
				leadershipOpen: false,
				leadershipElem: {
					height: "50px"
				}
			});
		} else {
			setLeadershipStyle({
				leadershipOpen: true,
				leadershipElem: {
					height: "125px"
				}
			});
		}
	}

	const handleSponsorsClick = () => {
		if(sponsorsStyle.sponsorsOpen){
			setSponsorsStyle({
				sponsorsOpen: false,
				sponsorsElem: {
					height: "50px"
				}
			});
		} else {
			setSponsorsStyle({
				sponsorsOpen: true,
				sponsorsElem: {
					height: "125px"
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

	useEffect(() => {
		const mobileAbout = document.getElementById("mobile-about");
		mobileAbout.addEventListener("click", handleAboutClick);
		return (() => {
			mobileAbout.removeEventListener("click", handleAboutClick);
		})
	})

	useEffect(() => {
		const mobileLeadership = document.getElementById("mobile-leadership");
		mobileLeadership.addEventListener("click", handleLeadershipClick);
		return (() => {
			mobileLeadership.removeEventListener("click", handleLeadershipClick);
		})
	})

	useEffect(() => {
		const mobileSponsors = document.getElementById("mobile-sponsors");
		mobileSponsors.addEventListener("click", handleSponsorsClick);
		return (() => {
			mobileSponsors.removeEventListener("click", handleSponsorsClick);
		})
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
					<div className="dropdown-mobile" style={aboutStyle.aboutElem}>
						<a href="#about" id="mobile-about" className="navbar-mobile-item">ABOUT</a>
						<div className="dropdown-mobile-content">
							<a href="#mission" className="">MISSION</a>
							<a href="#goals" className="">GOALS & VALUES</a>
							<a href="#community" className="">COMMUNITY</a>
						</div>
					</div>
					<a href="#" className="navbar-mobile-item">EVENTS</a>
					<div className="dropdown-mobile" style={leadershipStyle.leadershipElem}>
						<a href="#about" id="mobile-leadership" className="navbar-mobile-item">LEADERSHIP</a>
						<div className="dropdown-mobile-content">
							<a href="#mission" className="">ORGANIZERS</a>
							<a href="#goals" className="">PAST SPEAKERS</a>
							<a href="#community" className="">SUCCESS STORIES</a>
						</div>
					</div>
					<div className="dropdown-mobile" style={sponsorsStyle.sponsorsElem}>
						<a href="#about" id="mobile-sponsors" className="navbar-mobile-item">SPONSORS</a>
						<div className="dropdown-mobile-content">
							<a href="#mission" className="">OUT SPONSORS</a>
							<a href="#goals" className="">SPONSOR PACKET</a>
							<a href="#community" className="">APPLY TO SPEAK</a>
						</div>
					</div>
					<a href="#" className="navbar-mobile-item">BLOG</a>
					<a href="#" className="navbar-mobile-item">JOIN</a>
				</div>					
			</div>
		</div>
	);
}

export default NavbarMobile;