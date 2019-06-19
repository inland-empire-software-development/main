function HeroEvent() {
	return (
		<div className="hero-event-container">

			{/* event details container */}
			<div className="hero-event-info">

				<div className="hero-event-date">

					<p>Day</p>
					<p>Month</p>
					<p>Time</p>

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
