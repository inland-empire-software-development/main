function FloatingBar() {
  return (
    <div className="floating-bar-main">
      <div className="left-floating-bar">
        <a target="_blank" href="tel:18004370267" title="Give us a call!">
          <i className="fas fa-phone fa-2x fa-border" />
        </a>
        <a target="_blank"
          href="mailto:community@ie-sd.com"
          title="Send us a message!">
          <i className="fas fa-envelope fa-border"></i>
        </a>
      </div>

      <div className="right-floating-bar">
        <img className="social-twitter-link"
          src="../../static/logos/twitter.svg"
          title="Follow us on Twitter!" />
        <img className="social-facebook-link"
          src="../../static/logos/facebook.svg"
          title="Follow us on Facebook!" />
        <hr className="floating-bar-inner-line"/>
        <img className="social-meetup-link"
          src="../../static/logos/meetup.svg"
          title="Join us on Meetup!" />
        <img className="social-slack-link"
          src="../../static/logos/slack.svg"
          title="Join us on Slack!" />
      </div>
    </div>
  );
}

export default FloatingBar;
