import React, { useState, useEffect } from 'react';
import { calcStartTime, calcEndTime } from '../utils/convertTimeUtil';
import { splitMonth, splitDay } from '../utils/splitDateUtil';

function HeroEvent() {
	const [eventName, setEventName] = useState('');
	const [eventMonth, setEventMonth] = useState('');
	const [eventDay, setEventDay] = useState('');
	const [eventStartTime, setEventStartTime] = useState('');
	const [eventEndTime, setEventEndTime] = useState('');
	const [eventLink, setEventLink] = useState('');

	useEffect(() => {
		fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public&page=20")
    .then(response => response.json())
    .then(result => { 
    	setEventName(result[0].name);
    	setEventStartTime(calcStartTime(result[0].local_time));
    	setEventEndTime(calcEndTime(result[0].local_time, result[0].duration));
    	setEventMonth(splitMonth(result[0].local_date));
    	setEventDay(splitDay(result[0].local_date));
    	setEventLink(result[0].link);
		})
	})

	return (
		<div className="hero-event-container tablet-column-10">

			{/* event details container */}
			<div className="hero-event-info">

				{/* hero event info left side */}
				<div className="hero-event-date">
					
					<p>{eventDay}</p>
					<p>{eventMonth}</p>
					<p>{eventStartTime} - {eventEndTime}</p>

				</div>

				{/* hero event info right side */}
				<div className="hero-event-desc">

					<p id="eventName">{eventName}</p>

					<div className="hero-event-location">

						<p>Address:</p>
						<p>3499 Tenth St. Riverside, CA 92501</p>

					</div>

				</div>

			</div>

			{/* reserve a spot buton */}
			<div className="reserve-wrapper">

				<button 
					onClick={() => window.open('https://www.meetup.com/iesd-meetup/events/xrdssqyzjbmc/')}
					className="reserve-button">reserve a spot</button>

			</div>

		</div>
	);
}

export default HeroEvent;
