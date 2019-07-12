function Sponsors() {
	// initial render
	return (
		<div id="sponsors" className='grid-container'>
			<h1 className="avenir-bold">OUR SPONSORS</h1>
			<p>The work of Inland Empire Software Development, IESD, is made possible by the following sponsors</p>
			<div className='"sponsor-gallery"'>
				<div className="column-4">
					<img width="200px" src='../../static/images/desktop/UCRlogo.png'/>
				</div>
				<div className="column-4">
					<img width="200px" src='../../static/images/desktop/ExCITElogo.jpg'/>
				</div>
			</div>
		</div>
		)
	
	}
	
	export default Sponsors;