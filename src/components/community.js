import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';
import React, { useState, useEffect } from 'react';


// function myFunction(numS) {
//   if (numS.matches) { // If media query matches
//     x = 2;
//   } else {
//     x= 4;
//   }
// }

// let numS = window.matchMedia("(max-width: 700px)")
// myFunction(numS); // Call listener function at run time
// numS.addListener(myFunction); // Attach listener function on state changes

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// function myFunction() {
//   document.getElementById("myCirlce").style.display = "none";
// }
// const cir = document.document.getElementById('myCirlce');


const commPic = [
  {id: 1, image: '../../static/images/community/community_1.jpg',
    alt: 'community pic'},
  {id: 2, image: '../../static/images/community/community_2.jpg', 
    alt: 'community pic'},
  {id: 3, image: '../../static/images/community/community_3.jpg', 
    alt: 'community pic'},
  {id: 4, image: '../../static/images/community/community_4.jpg', 
    alt: 'community pic'},
  {id: 5, image: '../../static/images/community/community_5.jpg', 
    alt: 'community pic'},
  {id: 6, image: '../../static/images/community/community_6.jpg', 
    alt: 'community pic'},
];
let vv;

function Community() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const x = document.getElementsByClassName("circle_container");
    vv = () => {
      if (x.id.style.display === "block") {
        x.style.display = "none";
        console.log("ff");
      }
      console.log("ff");
    };
    console.log(x);

    console.log("hey");
  });

  // const [x, y] = useState(null);
  // function myFunction() {
  //   const x = document.getElementById("myCirlce");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   }
  //   console.log("hi");
  // }

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   const x = document.getElementById("myCirlce");
  //   x.addEventListener('click', event => {
  //     myFunction()
  //   });
  // });
  return (
    <div className="grid-container community  ">
      <div className="column-24 " onClick={vv}>
        <div id="iesdBg" className="swiper-container leader-1 trailer-1" >
          <div className="swiper-wrapper" >
            { commPic.map(({id, image, alt}) => <div className="swiper-slide">
              <img id="communitypic" key={id} src={image} alt={alt} /> </div>)}
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
          <p>You clicked {count} times</p>
        </div>
        {/* <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div> */}
      </div>
    </div>
  );
};


export default Community;
