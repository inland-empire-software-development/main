import React, { useState, useEffect } from 'react';

//utils
import { maxTextForContainer } from './maxTextForContainer';

function useResponsiveStory(storyContainerElem, storyString){
	const [ currentStory, setCurrentStory ] = useState(null);

	const handleTextChange = (newStory) => {
		if((typeof newStory) !== 'string') return console.log('throw some error here???');
		setCurrentStory(newStory);
	}

	const truncateExcerpt = () => {
		const newText = maxTextForContainer(storyContainerElem, storyString);
		handleTextChange(newText);
	}

	useEffect(() => {
		window.addEventListener('resize', truncateExcerpt);
		truncateExcerpt();

		return () => {
			window.removeEventListener('resize', truncateExcerpt);
		};
	});


}