import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';


let swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function Community() {
  return (
    <div id="iesdBg" className="grid-container  ">
      <div className="column-24 ">
        <div className="swiper-container leader-2 trailer-2">
          <div className="swiper-wrapper">
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/</div>
            <div id="spred" className="swiper-slide">C/O https://placeholder.com/0</div>
          </div>
          <div className="swiper-button-prev">
            <span className="swiper-button-prev-lg">&lt;</span>
            <span className="swiper-button-prev-sm">&lt;</span>
          </div>
          <div className="circle_container">
            <div className="circle">Drag</div>
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
