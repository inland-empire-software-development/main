function SuccessStoriesMoreBtn(props) {
  const {linkToStory} = props;
  return (
    <a href={linkToStory} className="success-read-more" target="_blank">
      read full story
    </a>
  );
}

export default SuccessStoriesMoreBtn;
