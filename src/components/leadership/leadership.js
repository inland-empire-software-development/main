/* eslint-disable arrow-parens */
import LeadershipImage from './Leadership-image.js';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.min.css';

// Main config of the slider, check all varations here. https://idangero.us/swiper/demos/
//click on cource code to look for diff, options.
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // here are the breakpoints you can alter how many sides are seen and and the margin.
  breakpoints: {
    1840: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
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

class Leadership extends React.Component {

  state = {
    organizers: [
      {
        id: 1,
        userName: 'Lloan Alas',
        title: 'IESD Executive Director',
        image: '../static/images/desktop/lloanalas.jpg',
        overlay: 'overlay-green-blue',
      },
      {
        id: 2,
        userName: 'Tony Nguyen',
        title: 'IESD Treasurer',
        image: '../static/images/desktop/tonynguyen.jpg',
        overlay: 'overlay-blue-purple'
      },
      {
        id: 3,
        userName: 'Felipe Fernandez',
        title: 'IESD Secratary',
        image: '../static/images/desktop/felipefernandez.jpg',
        overlay: 'overlay-purple-red',
      },
      {
        id: 5,
        userName: 'Luis Javier Velazquez',
        title: 'Lead React Developer',
        image: '../static/images/desktop/luisvelazquez.jpg',
        overlay: 'overlay-green-blue',
      },
      {
        id: 6,
        userName: 'Jen Latchman',
        title: 'Digital Marketing',
        image: '../static/images/desktop/jenlatchman.png',
        overlay: 'overlay-blue-purple'
      },
      {
        id: 7,
        userName: 'Jonathan Nguyen',
        title: 'Application Developer',
        image: '../static/images/desktop/jonathannguyen.jpg',
        overlay: 'overlay-purple-red'
      },
      {
        id: 8,
        userName: 'Kelly Lam',
        title: 'Internal Relations Director',
        image: '../static/images/desktop/kellylam.jpg',
        overlay: 'overlay-red-yellow'
      },
      {
        id: 4,
        userName: 'Amy Ambard',
        title: 'Front End Developer',
        image: '../static/images/desktop/amyambard.jpg',
        overlay: 'overlay-red-yellow',
      },
      {
        id: 9,
        userName: 'Amber Macbain',
        title: 'Front End Developer',
        image: '../static/images/desktop/ambermacbain.jpg',
        overlay: 'overlay-green-blue'
      },
    ],
    speakers: [
      {
        id: 1,
        userName: 'Lloan Alas',
        title: 'Eloquent Javascript Series',
        image: '../static/images/desktop/lloanalas.jpg',
        overlay: 'overlay-green-blue'
      },
      {
        id: 2,
        userName: 'Spencer Trumbore',
        title: 'Node.js & Wolfram Alpha API',
        image: '',
        overlay: ''
      },
      {
        id: 3,
        userName: 'Ixshel Escamilla',
        title: 'Introduction to Angular',
        image: '',
        overlay: ''
      },
      {
        id: 4,
        userName: 'Rey Santiago',
        title: 'Designers and Developers',
        image: '',
        overlay: ''
      },
      {
        id: 5,
        userName: 'Felipe Fernandez',
        title: 'Arrow Functions',
        image: '../static/images/desktop/felipefernandez.jpg',
        overlay: 'overlay-purple-red'
      },
      {
        id: 6,
        userName: 'Csaba Balough',
        title: 'Javascript Closures',
        image: '',
        overlay: ''
      },
      {
        id: 7,
        userName: 'Nicholas Twohig',
        title: 'Project Management & Agile',
        image: '',
        overlay: ''
      },
      {
        id: 8,
        userName: 'Anisha Joshipura',
        title: 'Flexbox',
        image: '',
        overlay: ''
      },
      {
        id: 9,
        userName: 'Tony Nguyen',
        title: 'Exploring Jest',
        image: '../static/images/desktop/tonynguyen.jpg',
        overlay: 'overlay-red-yellow'
      },
    ],
  };




  render() {
    const { organizers, speakers } = this.state;

    return (
      <div id='leadership' className='grid-container'>
        <div className='center-column column-22 tablet-column-10'>

          <div className='column-22'>
            <h3 className='column-1 phone-column-6 tablet-column-12'>ORGANIZERS</h3>
            <div className='organizers scrolling column-21 tablet-column-12 phone-column-6'>

              <div className="swiper-container" >
                {/* inside here is the data that is dragable row 1*/}


                <ul className='swiper-wrapper'>
                  {organizers.map(organizer => (
                    <li className='swiper-slide'
                      key={organizer.id}>
                      <LeadershipImage

                        userName={organizer.userName}
                        title={organizer.title}
                        image={organizer.image}
                        overlay={organizer.overlay}
                      />
                    </li>)
                  )}
                </ul>


              </div>

            </div>
          </div>







          <div className='column-22'>
            <h3 className='column-1 tablet-column-12 phone-column-6'>PAST SPEAKERS</h3>
            <div className='speakers scrolling column-21  tablet-column-12 phone-column-6'>
              <div className="swiper-container" >
                <ul className='swiper-wrapper'>
                  {speakers.map(speaker => (
                    <li className='swiper-slide' key={speaker.id}>
                      <LeadershipImage
                        userName={speaker.userName}
                        title={speaker.title}
                        image={speaker.image}
                        overlay={speaker.overlay}
                      />
                    </li>)
                  )}
                </ul>
              </div>
            </div>
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
    );
  }
}

// eslint-disable-next-line eol-last
export default Leadership;