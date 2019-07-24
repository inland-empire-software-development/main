const defaultImage = '../static/images/desktop/placeholder.jpg';
const LeadershipImage = (props) => (
  <div id='leadership-image' >
    <div className='card profile-photo'>
      <img className='card-image'
        src={props.image || defaultImage}
        alt='Profile picture'
      />
    </div>
    <div className='card name-title'>
      <div className='card-content'>
        <p className='leadership-name'>{props.userName}<br />
          <span className='leadership-title'>{props.title}</span></p>
      </div>
    </div>
  </div >
);

export default LeadershipImage;
