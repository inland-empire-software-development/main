const LeadershipImage = (props) => (
  <div id='leadership-image' >
    <div className='card profile-photo'>
      <img className='card-image' src={props.image} alt='Profile picture'
      />
      <div className='overlay'></div>

    </div>
    <div className='card name-title'>
      <div className='card-content'>
        <p className='leadership-name'>{props.userName}<br />
          <span className='leadership-title'>{props.title}</span></p>
      </div>
    </div>
  </div>
);
LeadershipImage.defaultProps = {
  image: '../static/logos/iesd-logo-black.svg',
};
export default LeadershipImage;
