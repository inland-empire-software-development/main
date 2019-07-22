import Navbar from './Navbar';
import HeroEvent from './HeroEvent';
/**
 * Hero component
 * @return {Hero}
 */
function Hero() {
  return (
    <header id="hero" className="grid-container">
      <div className="column-24">
        {/* Navigation */}
        <Navbar />

        {/* Event */}
        <HeroEvent />
      </div>
    </header>
  );
}

export default Hero;
