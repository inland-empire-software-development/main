const LeadershipImage = (props) => (
  <div id='leadership-image' >
    <div>
      <img src={props.image} alt='Profile picture' />
    </div>

    <div className='card' >
      <figcaption className='card-content'>
        <p className='leadership-name'>{props.userName}<br />
          <p className='leadership-title'>{props.title}</p></p>
      </figcaption>
    </div>
    <style jsx>{`
      #leadership-image{
        display: flex;
      }
      img {
        height: 19.68rem;
        width: 17.19rem;
      }
      .card {
        max-height: 5.6rem;
        position: relative;
        right: 9.37rem;
        top: 17rem;
        opacity: 0.5;
      }
      .card-content {
        margin: 0;
        padding: .3;
      }
      .leadership-name {
        font-family: "Heavy";
        font-size: 1.375rem;
        color: black;
      }
      .leadership-title {
        font-family: "Book";
        font-size: 1.25rem;
      }
    `}</style>
  </div>
);
LeadershipImage.defaultProps = {
  image: '../static/logos/iesd-logo-black.svg',
};
export default LeadershipImage;
