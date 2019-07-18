import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';

// Main config of the slider, check all varations here. https://idangero.us/swiper/demos/
// click on cource code to look for diff, options.
// Contact VelazquezLuis on github for any questions
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // here are the breakpoints you can alter how many sides are seen and and the margin.
  breakpoints: {
    1840: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// place holder example of an array of objects that hold each image.

const commPic = [
  {key: 1, image: '../../static/images/community/community_1.jpg',
    alt: 'community pic'},
  {key: 2, image: '../../static/images/community/community_2.jpg', 
    alt: 'community pic'},
  {key: 3, image: '../../static/images/community/community_3.jpg', 
    alt: 'community pic'},
  {key: 4, image: '../../static/images/community/community_4.jpg', 
    alt: 'community pic'},
  {key: 5, image: '../../static/images/community/community_5.jpg', 
    alt: 'community pic'},
  {key: 6, image: '../../static/images/community/community_6.jpg', 
    alt: 'community pic'},
];

function Community() {
  return (
    <div className="grid-container community  ">
      <div className="column-24 " >
        <div id="iesdBg" className="swiper-container leader-1 trailer-1" >
          <div className="swiper-wrapper" >
            { commPic.map(({key, image, alt}) => <div className="swiper-slide">
              <img id="communitypic" key={key} src={image} alt={alt} /> </div>)}
          </div>
          <div className="swiper-button-prev">
            <span className="swiper-button-prev-lg">&lt;</span>
            <span className="swiper-button-prev-sm">&lt;</span>
          </div>
          <div className="circle_container">
            <div id="myCirlce" className="circle">Drag</div>
          </div>
          <div className="swiper-button-next">
            <span className="swiper-button-next-sm">&gt;</span>
            <span className="swiper-button-next-lg">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Community;
