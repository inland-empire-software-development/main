import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeroEvent() {
	return (
		<div className="hero-event-container tablet-column-10">

			{/* event details container */}
			<div className="hero-event-info">

				{/* hero event info left side */}
				<div className="hero-event-date">
					
					<p>12</p>
					<p>May</p>
					<p>2:00 PM - 5:00 PM</p>

				</div>

				{/* hero event info right side */}
				<div className="hero-event-desc">

					<p>Exploring Data Structures : Objects, Arrays and the Secret Life of Objects</p>

					<div className="hero-event-location">

						<p>Address:</p>
						<p>3499 Tenth St. Riverside, CA 92501</p>

					</div>

				</div>

			</div>

			{/* reserve a spot buton */}
			<div className="reserve-wrapper">

				<button className="reserve-button">reserve a spot</button>

			</div>

		</div>
	);
}

export default HeroEvent;
