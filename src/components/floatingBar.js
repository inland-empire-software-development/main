function FloatingBar() {
  return (
    <div className="floating-bar-main">
      <div className="left-floating-bar">
        <a target="_blank" href="tel:18004370267">
          <div id="phone-svg">
            <i class="fas fa-phone fa-2x fa-border" />
          </div>
        </a>
        <a target="_blank" href="mailto:community@ie-sd.com">
          <i class="fas fa-envelope fa-border"></i>
        </a>
        <div className="floating-bar-contact">contact:</div>
      </div>
      <div className="floating-empty-div">
      </div>

      <div className="right-floating-bar">
        <a target="_blank" className="social-twitter-link" href="https://twitter.com/iesdevinc">
          <img src="../../static/logos/twitter.svg" />
        </a>
        <a target="_blank" className="social-facebook-link" href="https://www.facebook.com/groups/IESoftwareDevelopment/">
          <img src="../../static/logos/facebook.svg" />
        </a>
        <div className="share-inner-div">share:</div>
        <hr className="floating-bar-inner-line"/>
        <a target="_blank" className="social-mmetup-link" href="https://www.meetup.com/iesd-meetup/">
          <img src="../../static/logos/meetup.svg" />
        </a>
        <a target="_blank" className="social-slack-link" href="https://bit.ly/2C0umfQ">
          <img src="../../static/logos/slack.svg" />
        </a>
        <div className="join-inner-div">join:</div>
      </div>
    </div>
  );
}

export default FloatingBar;
