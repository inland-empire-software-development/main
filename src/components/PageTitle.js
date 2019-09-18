// import backgroundImage from '../../static/images/pages/page-header.jpg';
import backgroundImage from '../../static/images/mentorship/page-header.jpg';

/**
 * PageTitle Component
 * @param {any} props
 * @return {*}
 * @constructor
 */
function PageTitle(props) {
  const {title} = props;
  return (
    <header id="pageTitle"
      className="grid-container"
      style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="overlay-background-header">
        <div className="column-20 pre-2">
          <h1>
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}

export default PageTitle;
