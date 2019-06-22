import React, { useState, useEffect } from 'react';

function useRandomStory(data){
	const [ currentStory, setCurrentStory ] = useState(null);

	function handleStoryChange(storyObject){
		if(typeof storyObject !== 'object') return console.log('Handle error here???');
		setCurrentStory(storyObject);
	}

	useEffect(() => {
		//sets randomNum to a number between 0 and number of success stories
		const randomNum = Math.floor(Math.random() * data.length);

		handleStoryChange(data[randomNum]);
	});

	return currentStory;
}

export default useRandomStory;