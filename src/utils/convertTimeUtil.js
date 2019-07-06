export const calcStartTime = (startTime) => {
	const timeSplit = startTime.split(":");
	const hours = timeSplit[0];
	const minutes = timeSplit[1];

	//return hours + ":" + minutes
	if (hours > 12) {
		return (hours - 12) + ":" + minutes + " PM";
	} else {
		return (hours + ":" + minutes + " AM");
	}
}

export const calcEndTime = (startTime, duration) => {
	const endTime = calcEventDuration(startTime, duration);
  let milliseconds = parseInt((endTime % 1000) / 100),
    seconds = Math.floor((endTime / 1000) % 60),
    minutes = Math.floor((endTime / (1000 * 60)) % 60),
    hours = Math.floor((endTime / (1000 * 60 * 60)) % 24);

	  hours = (hours < 10) ? "0" + hours : hours;
	  minutes = (minutes < 10) ? "0" + minutes : minutes;
	  seconds = (seconds < 10) ? "0" + seconds : seconds;

  	// return hours + ":" + minutes 
  	if (hours > 12) {
  		return (hours - 12) + ":" + minutes + " PM";
  	} else {
  		return (hours + ":" + minutes + " AM");
  	}
};

const convertTimeToMs = (startTime) => {
	const timeSplit = startTime.split(":");
	return (timeSplit[0] * (60000 * 60)) + (timeSplit[1] * 60000);
};

const calcEventDuration = (startTime, duration) => {
	return (convertTimeToMs(startTime) + duration);
};