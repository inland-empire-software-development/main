import { useState, useEffect } from 'react';

//components
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

//utils
import {isMobile} from '../utils/isMobile';

function Navbar(){
	const navbar = isMobile() ? <NavbarMobile /> : <NavbarDesktop />;
	
	return (
		<div>
			{navbar}
		</div>
	);
}

export default Navbar;