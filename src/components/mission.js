const Mission = () => {
	return (
		<div id="mission" className="grid-container">
			<div className="column-24">

				{/* left section */}
				<div id="mission-left" className="pre-2 column-9 post-1 leader-3 trailer-2">

					{/* mission title */}
					<p className="mission-title">
						OUR MISSION
					</p>

					{/* mission description */}
					<p className="mission-desc">
						Part of our mission is to expose the local developer
						community to the process of contributing to free and 
						open source software (FOSS), regardless of their
						development experience. We provide our members with a
						friendly workspace to work, learn and connect with other
						developers and industry professionals. By leveraging open
						source software, our members can develop their skills in
						various technologies while rubbing elbows with working
						industry professionals. Industry professionals that 
						volunteer to speak in our meetups help build stronger
						communities by sharing their experience in the industry
						and with the technology they use every day; they give
						back to their communities.
					</p>

				</div>

				{/* right section */}
				<div id="mission-right" className="column-12">

					{/* mission image */}
					<div className="mission-image">
						{/*<img 
							src="../../static/images/mobile/ie-background.jpg"
							alt="..."
						/>*/}
					</div>

					{/* mission image cutout */}
					<div className="mission-cutout">
						<img 
							src="../../static/images/mobile/ie-cutout.png"
							alt="..."
						/>
					</div>

				</div>

			</div>
		</div>
	);
};

export default Mission;