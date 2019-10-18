/**
 * CallToAction component
 * @param {any} props
 * @constructor
 */
function CallToAction(props) {
  const {background, button} = props;
  return (
    <div className="container-full callToAction" style={{
      backgroundImage:
        "url(" + background + ")",
    }}>
      <div className="uk-overlay-primary uk-position-cover"/>
      {button}
    </div>
  );
}

export default CallToAction;
