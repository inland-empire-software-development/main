//components
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

function Navbar(){
	const navbar = true ? <NavbarDesktop /> : <NavbarMobile />
	return (
		<div>
			{navbar}
		</div>
	);
}

export default Navbar;