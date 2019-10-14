export default function Story() {
  return (
    <div id="story-container" className="container-full black-white" >
      <div id="story" className="uk-container">
        <div uk-slider="true">
          <div className="success-image-container">
            <img alt={name} src={imageURL} />
            <div className="success-image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
