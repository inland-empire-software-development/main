import React, { Component, useState } from 'react';

//hooks
import useGenerateSocialBtn from '../utils/useGenerateSocialBtn';

function SocialBtnCircleContainer(props){
	const { userStory } = props;

	const socialNetworks = useGenerateSocialBtn(userStory);

	return (
		<div className="social-btn-container">
			{socialNetworks}
		</div>
	);
}

export default SocialBtnCircleContainer;