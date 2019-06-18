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
				<div className="column-8 success-image-container">
					<img alt={name} src={imageURL} />
					<div className="success-image-overlay"></div>
				</div>

				{/* right section - success story*/}
				<div className="pre-1 column-15">
					<p>SUCCESS STORY</p>
					<div className="success-title-container">
						<p>{name}</p>
						<p>/</p>
						<p>{title}</p>
					</div>
					<p className="success-excerpt">{excerpt}</p>
					<div className="success-btn-container">
						<button>
							read full story
						</button>
					</div>
				</div>

			</div>
		);
	}
}

export default SuccessStories;