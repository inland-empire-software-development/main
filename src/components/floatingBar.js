function FloatingBar() {
  return (
    <floatingBar className="floating-bar-main">
      <div className="left-floating-bar">
        <a href="tel:18004370267">
          <i class="fas fa-phone" data-fa-transform="right-10 up-40"></i>
        </a>
        <a href="mailto:community@ie-sd.com">
          <i class="fas fa-envelope" data-fa-transform="right-10 up-30"></i>
        </a>
        <a>
          <i class="far fa-comment-dots" data-fa-transform="right-10 up-20"></i>
        </a>
        <div className="floating-bar-contact">contact:</div>
      </div>
      <div className="floating-empty-div">
      </div>
      <div className="right-floating-bar">
        <a>
          <i class="fab fa-twitter" data-fa-transform="right-16 up-119"></i>
        </a>
        <a href="https://www.facebook.com/groups/IESoftwareDevelopment/">
          <i class="fab fa-facebook-f" data-fa-transform="right-16 up-103"></i>
        </a>
        <div className="share-inner-div">share:</div>
        <hr className="floating-bar-inner-line"/>
        <a href="https://www.meetup.com/iesd-meetup/">
          <i class="fab fa-meetup" data-fa-transform="right-14 up-103"></i>
        </a>
        <a href="https://bit.ly/2C0umfQ">
          <i class="fab fa-slack" data-fa-transform="right-14 up-90"></i>
        </a>
        <div className="join-inner-div">join:</div>
      </div>
    </floatingBar>
  );
}

export default FloatingBar;
