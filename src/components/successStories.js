import React, { Component } from 'react';
import { data } from '../utils/successStoriesData';
import { maxTextForContainer } from '../utils/maxTextForContainer';

//components
import SuccessStoriesImage from './SuccessStoriesImage';
import SuccessStoriesUserTitle from './SuccessStoriesUserTitle';
import SuccessStoriesMoreBtn from './SuccessStoriesMoreBtn';
import SocialBtnCircleContainer from './SocialBtnCircleContainer';

//hooks
import useRandomStory from '../utils/useRandomStory';

// class SuccessStories extends Component{
function SuccessStories(){
	// constructor(props){
	// 	super(props);

	// 	this.successExcerpt = React.createRef();
	// 	// this.currentStory = useRandomStory(data);
	// 	this.currentStory = '';

	// 	this.state = {}
	// }
	let successExcerpt = React.createRef();
	const currentStory = '';
	const currentExcerpt = useRandomStory(data)
	console.log(currentExcerpt);

	//Sets this.currentStory to a random success story.
	// randomStorySelector = () => {
	// 	//sets randomNum to a number between 0 and number of success stories
	// 	const randomNum = Math.floor(Math.random() * data.length);
	// 	this.currentStory = data[randomNum];
	// }

	//Calls maxTextForContainer to shorten string according
	//to string size. Will also add "..." after string.
	// truncateExcerpt = () => {
	// 	const newText = maxTextForContainer(this.successExcerpt, this.currentStory.excerpt);
	// 	this.setState({
	// 		currentExcerpt: newText
	// 	});
	// }

	// updateSuccessExcerpt = (elem) => {
	// 	return this.successExcerpt = elem;
	// }

	// componentDidMount(){
	// 	this.randomStorySelector();
	// 	window.addEventListener('resize', this.truncateExcerpt);
	// 	this.truncateExcerpt();
	// }

	// componentWillUnmount(){
	// 	window.removeEventListener('resize', this.truncateExcerpt);
	// }

	// render(){
		const { name, title, excerpt, imageURL, linkToStory } = currentStory;
		// const { currentExcerpt } = this.state;

		return(
			<div id="success-stories" className="grid-container">

				{/* left section - image of person */}
				<SuccessStoriesImage 
					name={name}
					imageURL={imageURL}
				/>

				{/* right section - success story*/}
				<p className='success-header'>SUCCESS STORY</p>
				<SuccessStoriesUserTitle
					name={name}
					title={title}
				/>
				<p ref={p => successExcerpt = p} className="success-excerpt">
					{/*currentExcerpt*/}
				</p>

				{/* right section - buttons*/}
				<div className="success-btn-container">
					<SuccessStoriesMoreBtn 
						linkToStory={linkToStory}
					/>
					<SocialBtnCircleContainer />
				</div>

			</div>
		);
	// }
}

export default SuccessStories;