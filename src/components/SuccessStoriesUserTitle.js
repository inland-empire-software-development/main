function SuccessStoriesUserTitle(props) {
  const {name, title} = props;

  return (
    <div className="success-stories-user-info">
      <div className="success-title-container">
        <div className="success-name-container">
          <p className="success-name">{name}<span>/</span></p>
        </div>
        <p className="success-job-title">{title}</p>
      </div>
    </div>
  );
}

export default SuccessStoriesUserTitle;
