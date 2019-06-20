const SuccessStoriesMoreBtn = (props) => {
	const { linkToStory } = props;
	console.log(linkToStory);
	return (
		<a href={linkToStory} className="success-read-more">
			read full story
		</a>
	);
}

export default SuccessStoriesMoreBtn;