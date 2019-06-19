function HeroEvent() {
	return (
		<div className="hero-event-container">

			{/* event details container */}
			<div className="hero-event-info">

				<div className="hero-event-date">
					
					<p>12</p>
					<p>May</p>
					<p>2:00 PM - 5:00 PM</p>

				</div>

				<div className="hero-event-desc">

					<p>Event Name</p>
					<p>Address</p>

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
