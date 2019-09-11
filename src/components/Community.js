import Swiper from 'swiper';
import {useEffect} from 'react';
import '../../node_modules/swiper/dist/css/swiper.min.css';

const commPic = [
  {
    key: 11, image: '../../static/images/community/img_7.jpg',
    alt: 'community pic',
  },
  {
    key: 12, image: '../../static/images/community/img_12.jpg',
    alt: 'community pic',
  },
  {
    key: 13, image: '../../static/images/community/img_13.jpg',
    alt: 'community pic',
  },
  {
    key: 4, image: '../../static/images/community/img_4.jpg',
    alt: 'community pic',
  },
  {
    key: 5, image: '../../static/images/community/img_5.jpg',
    alt: 'community pic',
  },
  {
    key: 6, image: '../../static/images/community/img_6.jpg',
    alt: 'community pic',
  },
  {
    key: 7, image: '../../static/images/community/img_11.jpg',
    alt: 'community pic',
  },
  {
    key: 8, image: '../../static/images/community/img_8.jpg',
    alt: 'community pic',
  },
  {
    key: 9, image: '../../static/images/community/img_9.jpg',
    alt: 'community pic',
  },
  {
    key: 10, image: '../../static/images/community/img_10.jpg',
    alt: 'community pic',
  },
  {
    key: 2, image: '../../static/images/community/img_2.jpg',
    alt: 'community pic',
  },
  {
    key: 3, image: '../../static/images/community/img_3.jpg',
    alt: 'community pic',
  },
  {
    key: 1, image: '../../static/images/community/img_1.jpg',
    alt: 'community pic',
  },
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
    <div id="ourCommunity" className="grid-container community">
      <div className="column-24 " >
        <div className="swiper-container" >
          <div className="swiper-wrapper" >
            {commPic.map(({key, image, alt}) =>
              (<div className="swiper-slide community-swiper" key={key}>
                <img id="communitypic" src={image} alt={alt} />
              </div>))}
          </div>

        </div>
      </div>
      <p className="text-center">
        You can drag images left and right to see more.
      </p>
    </div>
  );
};

export default Community;
