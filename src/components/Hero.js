import Nav from "./global/Nav";
import HeroEvent from "./SingleEvent";

function Hero(props) {
  const {video = true, background = false, event = true} = props;
  return (
    <section
      id="hero"
      style={background ? {"backgroundImage": `url(${background})`} : {}}
    >

      {/* TODO: Find a way to NOT render this under 960px */}
      {video &&
      <video className="uk-visible@m" autoPlay muted loop id="iesd-video">
        <source
          src="/static/video/main/hero-main.mp4"
          type="video/mp4"
        />
      </video>
      }

      <div className="uk-overlay-primary uk-position-cover"/>

      <div className="container-full">
        <div className="uk-container">

          {/* nav start*/}
          <Nav />
          {/* nav end*/}

          {event &&
          <HeroEvent />
          }

        </div>
      </div>
    </section>
  );
}

export default Hero;
