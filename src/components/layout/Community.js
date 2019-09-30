const commPic = [
  {
    key: 11, image: "../../static/images/community/img_7.jpg",
    alt: "community pic",
  },
  {
    key: 12, image: "../../static/images/community/img_12.jpg",
    alt: "community pic",
  },
  {
    key: 13, image: "../../static/images/community/img_13.jpg",
    alt: "community pic",
  },
  {
    key: 4, image: "../../static/images/community/img_4.jpg",
    alt: "community pic",
  },
  {
    key: 6, image: "../../static/images/community/img_6.jpg",
    alt: "community pic",
  },
  {
    key: 7, image: "../../static/images/community/img_11.jpg",
    alt: "community pic",
  },
  {
    key: 8, image: "../../static/images/community/img_8.jpg",
    alt: "community pic",
  },
  {
    key: 9, image: "../../static/images/community/img_9.jpg",
    alt: "community pic",
  },
  {
    key: 2, image: "../../static/images/community/img_2.jpg",
    alt: "community pic",
  },
  {
    key: 3, image: "../../static/images/community/img_3.jpg",
    alt: "community pic",
  },
  {
    key: 1, image: "../../static/images/community/img_1.jpg",
    alt: "community pic",
  },
];

function Community() {
  return (
    <div className="container-full" style={{
      backgroundImage: "url(\"../../../static/images/desktop/inland-empire-software-development-background-light.jpg\")",
    }}>
      <div id="community" className="uk-container">
        <div uk-slider="true">
          <ul className="uk-slider-items uk-child-width-1-2@s
      uk-child-width-1-4@m uk-grid">
            {commPic.map(({key, image, alt}) =>
              (<li key={key}>
                <img src={image} alt={alt}/>
              </li>
              ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Community;


