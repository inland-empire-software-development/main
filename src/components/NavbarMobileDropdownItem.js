import {useState} from 'react';

function NavbarMobileDropdownItem(props) {
	//Destructure props
	const {mainItem, subItemList} = props;

  // Generate anchor elements for sub items
  const subItemElements = subItemList.map((item, index) => {
  	return (<a key={index} href={item.href} className="navbar-mobile-button">{item.text}</a>);
  })

  // State to manage if about dropdown is open/close
  const [dropdownStyle, setDropdownStyle] = useState({
    dropdownOpen: false,
    dropdownElem: {
      height: "50px",
    },
  });

  // Function that handles logic for 
  // when to call setDropdownStyle above
  const handleDropdownClick = () => {
    if (dropdownStyle.dropdownOpen) {
      setDropdownStyle({
        dropdownOpen: false,
        dropdownElem: {
          height: "50px",
        },
      });
    } else {
      setDropdownStyle({
        dropdownOpen: true,
        dropdownElem: {
          height: "125px",
        },
      });
    }
  };

	return (
    <div className="dropdown-mobile" style={dropdownStyle.dropdownElem}>
	    <a href="#about" 
	    	className="navbar-mobile-item" 
	    	onClick={handleDropdownClick}
	    >
	      {mainItem}
	    </a>
	    <div className="dropdown-mobile-content">
	    	{subItemElements}
	    </div>
	  </div>
	);
}

export default NavbarMobileDropdownItem;