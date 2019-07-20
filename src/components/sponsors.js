function Sponsors() {
  const sponsorList = [
    '../../static/images/desktop/UCRlogo.png',
    '../../static/images/desktop/ExCITElogo.jpg',
  ];
  // initial render
  return (
    <div id="sponsors" className='grid-container'>
      <div className="column-20 pre-2 leader-3 trailer-3">
        <h1>Our Sponsors</h1>
        <p>The work at <strong>IESD</strong> is made
         possible by the following sponsors</p>
        <div className="sponsor-gallery">
          {sponsorList.map((sponsor) => (
            <div className="column-6">
              <img src={sponsor}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
