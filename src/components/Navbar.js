import { useState, useEffect } from 'react';

//components
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

//utils
import {isMobile} from '../utils/isMobile';

function Navbar(){
	const [navbar, setNavBar] = useState(null);

	useEffect(() => {
		if(isMobile()){
			setNavBar(<NavbarMobile />);
		} else {
			setNavBar(<NavbarDesktop />);
		}
	});

	return (
		<div id="navbar">
			{navbar}
		</div>
	);
}

export default Navbar;