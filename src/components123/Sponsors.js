function Sponsors() {
  const sponsorList = [
    '../../static/images/sponsors/ucr-logo.png',
    '../../static/images/sponsors/excite-logo.jpg',
    '../../static/images/sponsors/jetbrains-logo.png',
    '../../static/images/sponsors/google-logo.png',
    '../../static/images/sponsors/microsoft-logo.png',
    '../../static/images/sponsors/atlassian-logo.png',
    '../../static/images/sponsors/slack-logo.png',
  ];
  // initial render
  return (
    <div id="sponsors" className='grid-container'>
      <div className="column-20 pre-2 leader-3 trailer-3">
        <h1>Our Sponsors</h1>
        <p>The work at <strong>IESD</strong> is made
         possible by the following sponsors</p>
        <div className="sponsor-gallery">
          {sponsorList.map((sponsor, index) => (
            <div className="logos"
                key={index}>
            <img src={sponsor}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
