import Navbar from './Navbar';
import HeroEvent from './HeroEvent';

function getNav(navbar) {
  if (navbar) return <Navbar />;
  return "";
}

function getHeroEvent(event) {
  if (event) return <HeroEvent/>;
  return "";
}

/**
 * Hero component
 * @param {any} props
 * @return {*}
 * @constructor
 */
function Hero(props) {
  const {navbar, event} = props;
  return (
    <header id="hero" className="grid-container">
      <div className="column-24">
        {/* Navigation */}
        {getNav(navbar)}

        {/* Event */}
        {getHeroEvent(event)}
      </div>
    </header>
  );
}

export default Hero;
