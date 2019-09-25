function SuccessStoriesImage(props) {
  const {name, imageURL} = props;

  return (
    <div className="success-image-container">
      <img alt={name} src={imageURL} />
      <div className="success-image-overlay"></div>
    </div>
  );
}

export default SuccessStoriesImage;
