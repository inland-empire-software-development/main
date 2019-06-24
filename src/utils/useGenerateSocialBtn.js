import React, { useState, useEffect } from 'react';

//components
import SocialBtnCircle from '../components/SocialBtnCircle';

//Create social buttons depending on available social networks
function useGenerateSocialBtn(data){
	const [ arrSocialNetwork, setArrSocialNetwork ] = useState([]);

	//Array used to push SocialBtnCircle elements into.
	const arrSocialElems = [];

	//unique key for each element.
	let elemKey = 0;

	//Data should be an object that has 
	//social networks as the property name
	for (let socialNetwork in data.socialNetworks){
		let props = {};
		props.fontClass = '';
		props.href = data.socialNetworks[socialNetwork];
		switch(socialNetwork){
			case 'facebook':
				props.fontClass = 'fab fa-facebook-f';
				break;
			case 'twitter':
				props.fontClass = 'fab fa-twitter';
				break;
			default:
				continue;
				break;
		}

		arrSocialElems.push(<SocialBtnCircle key={elemKey} { ...props }/>);
		elemKey++;
	}

	useEffect(() => {
		setArrSocialNetwork(arrSocialElems);
	}, [data]);

	return arrSocialNetwork;
}

export default useGenerateSocialBtn;