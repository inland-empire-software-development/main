function Goals() {
	return (
		<div className="grid-container">

			<div id="goals" className="column-24">
				{/* left side */}
				<div className="column-12">
					<div>
						<img
							className="goals-image"
							src="../../static/images/desktop/goals-section-gradient.jpg"
						/>
					</div>
				</div>

				{/* right side */}
				<div className="column-10 post-2">

					{/*goals heading*/}
					<div className="goals-heading">
						<p>
							OUR GOALS<br/>
						</p>
					</div>

					{/*goals information*/}
					<div className="goals-desc">
						<p>
							Inland Empire Software Development (IESD) is an independent
							community organization dedicated to bringing community members
							together to network, educate and share knowledge - all with the goal of
							increasing the technology presence in the Inland Empire.<br/>
							IESD is spearheaded by an organizing group that is passionate about increasing
							technology awareness by increasing industry professional involvement
							with the community, exposing developers to new technologies and 
							creating partnerships with community entities that benefit the 
							community.
						</p>
					</div>

				</div>

			</div>
		</div>
	);
}

export default Goals;