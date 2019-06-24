import React, { useState, useEffect } from 'react';

function useRandomStory(data){
	const [ currentStory, setCurrentStory ] = useState(data[0]);

	useEffect(() => {
		//sets randomNum to a number between 0 and number of success stories
		const randomNum = Math.floor(Math.random() * data.length);
		setCurrentStory(data[randomNum]);
	}, [data]);

	return currentStory;
}

export default useRandomStory;