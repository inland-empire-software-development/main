import Swiper from 'swiper';
import {useEffect} from 'react';
import '../../node_modules/swiper/dist/css/swiper.min.css';

// Main config of the slider, check all varations here. https://idangero.us/swiper/demos/
// click on cource code to look for diff, options.
// Contact VelazquezLuis on github for any questions


// place holder example of an array of objects that hold each image.

const commPic = [
  {key: 11, image: '../../static/images/community/Img_7.jpg',
    alt: 'community pic'},
  {key: 12, image: '../../static/images/community/Img_12.jpg',
    alt: 'community pic'},
  {key: 13, image: '../../static/images/community/Img_13.jpg',
    alt: 'community pic'},
  {key: 4, image: '../../static/images/community/Img_4.jpg',
    alt: 'community pic'},
  {key: 5, image: '../../static/images/community/Img_5.jpg',
    alt: 'community pic'},
  {key: 6, image: '../../static/images/community/Img_6.jpg',
    alt: 'community pic'},
  {key: 7, image: '../../static/images/community/Img_11.jpg',
    alt: 'community pic'},
  {key: 8, image: '../../static/images/community/Img_8.jpg',
    alt: 'community pic'},
  {key: 9, image: '../../static/images/community/Img_9.jpg',
    alt: 'community pic'},
  {key: 10, image: '../../static/images/community/Img_10.jpg',
    alt: 'community pic'},
  {key: 2, image: '../../static/images/community/Img_2.jpg',
    alt: 'community pic'},
  {key: 3, image: '../../static/images/community/Img_3.jpg',
    alt: 'community pic'},
  {key: 1, image: '../../static/images/community/Img_1.jpg',
    alt: 'community pic'},
];

function Community() {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // here are the breakpoints you can alter how many
      // sides are seen and and the margin.
      breakpoints: {
        2040: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1840: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }, []);

  return (
    <div className="grid-container community  ">
      <div className="column-24 " >
        <div id="iesdBg" className="swiper-container" >
          <div className="swiper-wrapper" >
            { commPic.map(({key, image, alt}) =>
              (<div className="swiper-slide" key={key}>
                <img id="communitypic" src={image} alt={alt} />
              </div>))}
          </div>

        </div>
      </div>

      <div className="column-24">
        <p className="text-center">
          <small>You can drag images left and right to see more.</small>
        </p>
      </div>
    </div>
  );
};


export default Community;
