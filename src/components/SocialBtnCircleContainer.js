import React, { Component } from 'react';

//components
import SocialBtnCircle from './SocialBtnCircle';

class SocialBtnCircleContainer extends Component {
	render(){
		return (
			<div className="social-btn-container">
				<SocialBtnCircle 
					href="#"
					fontClass="fab fa-twitter"
				/>
				<SocialBtnCircle 
					href="#"
					fontClass="fab fa-facebook-f"
				/>
			</div>
		);
	}
}

export default SocialBtnCircleContainer;