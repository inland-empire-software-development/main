const LeadershipImage = (props) => (
  <div id='leadership-image' >
    <div className='card profile-photo'>
      <img className='card-image'
        src={props.image || '../static/images/desktop/placeholder.jpg'}
        alt='Profile picture'
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

export default LeadershipImage;
