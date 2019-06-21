const LeadershipImage = (props) => (
  <div id='leadership-image' >
    <div>
      <img src={props.image} alt='Profile picture' />
    </div>

    <div className='card' >
      <figcaption >
        <span className='leadership-name'>{props.userName}</span>
        <br />
        <span className='leadership-title'>{props.title}</span>
      </figcaption>
    </div>
    <style jsx>{`
      #leadership-image{
        display: flex;
      }
      img {
        height: 315px;
        width: 275px;
      }
      .card {
        max-width: 90px;
      }
      .leadership-name {
        font-family: "Heavy";
        font-size: 27px;
      }
      .leadership-title {
        font-family: "Book";
        font-size: 20px;
      }
    `}</style>
  </div>
);
LeadershipImage.defaultProps = {
  image: '../static/logos/iesd-logo-black.svg',
};
export default LeadershipImage;
