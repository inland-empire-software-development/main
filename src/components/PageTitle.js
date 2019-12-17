function PageTitle(props) {
  const {url, title} = props;
  return (
    <header id="pageTitle"
      className="grid-container"
      style={{backgroundImage: `url(${url})`}}>

      <div className="overlay-background-header">
        <div className="uk-container">
          <h1>
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}

export default PageTitle;
