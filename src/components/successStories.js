import React, { Component } from 'react';
import { data } from '../utils/successStoriesData';

class SuccessStories extends Component{
	constructor(props){
		super(props);

		this.state = {
			currentStory: ''
		}
	}

	//Sets this.state.currentStory to a random success story.
	randomStorySelector = () => {
		//sets randomNum to a number between 0 and length of success stories
		const randomNum = Math.floor(Math.random() * data.length);

		return this.setState({
			currentStory: data[randomNum]
		})
	}

	componentDidMount(){
		this.randomStorySelector();
	}

	render(){
		const { name, title, excerpt, imageURL } = this.state.currentStory;

		return(
			<div id="success-stories" className="grid-container">

				{/* left section - image of person */}
				<div className="success-image-container">
					<img alt={name} src={imageURL} />
					<div className="success-image-overlay"></div>
				</div>

				{/* right section - success story*/}
				<p className='success-header'>SUCCESS STORY</p>
				<div className="success-title-container">
					<div className="success-name-container">
						<p className="success-name">{name}</p>
						<p className="success-slash">/</p>
					</div>
					<p className="success-job-title">{title}</p>
				</div>
				<p className="success-excerpt">{excerpt}</p>
				<div className="success-btn-container">
					<button className="success-read-more">
						read full story
					</button>
					<div className="social-btn-container">
						<div className="social-btn">
							<a href="#">
								<i className="fab fa-twitter"></i>
							</a>
						</div>
						<div className="social-btn">
							<a href="#">
								<i className="fab fa-facebook-f"></i>
							</a>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default SuccessStories;