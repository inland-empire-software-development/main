function FloatingBar() {
  return (
    <floatingbar className="floating-bar-main">
      <div className="left-floating-bar">
        <a target="_blank" href="tel:18004370267">
          <div id="phone-svg">
            <i class="fas fa-phone fa-2x fa-border" />
          </div>
        </a>
        <a target="_blank" href="mailto:community@ie-sd.com">
          <i class="fas fa-envelope fa-border"></i>
        </a>
        <a>
          <i class="far fa-comment-dots fa-border" />
        </a>
        <div className="floating-bar-contact">contact:</div>
      </div>
      <div className="floating-empty-div">
      </div>
      <div className="right-floating-bar">
        <a target="_blank" href="https://twitter.com/iesdevinc">
          <i class="fab fa-twitter fa-lg fa-border"></i>
        </a>
        <a target="_blank" href="https://www.facebook.com/groups/IESoftwareDevelopment/">
          <i class="fab fa-facebook-f fa-lg fa-border" />
        </a>
        <div className="share-inner-div">share:</div>
        <hr className="floating-bar-inner-line"/>
        <a target="_blank" href="https://www.meetup.com/iesd-meetup/">
          <i class="fab fa-meetup fa-border"></i>
        </a>
        <a target="_blank" href="https://bit.ly/2C0umfQ">
          <i class="fab fa-slack fa-border"></i>
        </a>
        <div className="join-inner-div">join:</div>
      </div>
    </floatingbar>
  );
}

export default FloatingBar;
