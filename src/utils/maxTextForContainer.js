import React from 'react';

export const maxTextForContainer = (container, textString) => {
	let newText = textString;

	if(container !== null && newText.length >= 248){
		//container's style values
		const containerStyle = window.getComputedStyle(container);
		const containerHeight = parseFloat(containerStyle.height.slice(0, containerStyle.height.length - 2));
		const containerWidth = parseFloat(containerStyle.width.slice(0, containerStyle.width.length - 2));
		const containerLineHeight = parseFloat(containerStyle.lineHeight.slice(0, containerStyle.lineHeight.length - 2));
		const containerFontSize = parseFloat(containerStyle.fontSize.slice(0, containerStyle.fontSize.length - 2));

		//take width & height  and make
		//estimate calculation for where to cut string
		const avgCharWidth = (0.71 * containerFontSize);
		const estimateCharPerRow = Math.ceil(containerWidth / avgCharWidth);
		const avgCharHeight = (0.8888 * containerFontSize + 5);
		const estimateRows = Math.ceil(containerHeight / avgCharHeight);

		//multiply number of characters per row & multiply
		//number of rows to get string length
		const numChar = (estimateRows * estimateCharPerRow);
		newText = newText.slice(0, numChar);
		container.textContent = newText + "...";
	} else {
		console.log(newText.length);
		return newText;
	}
}