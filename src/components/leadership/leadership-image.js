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

    
    `}</style>
  </div>
);
LeadershipImage.defaultProps = {
  image: '../static/logos/iesd-logo-black.svg',
};
export default LeadershipImage;
