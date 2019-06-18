const LeadershipImage = (props) => (
  <div id='leadership-image'>
    <img src={props.image} alt='Profile picture' />
    <div className='card'>
      <span>{props.userName}</span>
      <span>{props.title}</span>
    </div>
    <style jsx>{`
      img {
        height: 45px;
      }
      span {
        font-family: "Heavy";
        font-size: 26px;
        color: #A8A3A3;
        text-transform: uppercase;
      }
    `}</style>
  </div>
);

LeadershipImage.defaultProps = {
  image: '../static/logos/iesd-logo-black.svg',
};

export default LeadershipImage;
