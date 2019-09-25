function SocialBtnCircle(props) {
  const {href, fontClass} = props;

  return (
    <div className="social-btn-circle">
      <a href={href} target="_blank">
        <i className={fontClass}></i>
      </a>
    </div>
  );
}

export default SocialBtnCircle;
