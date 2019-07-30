import LeadershipImage from './LeadershipImage';
import Swiper from 'swiper';
import {useEffect} from 'react';
import '../../node_modules/swiper/dist/css/swiper.min.css';

function Leadership() {
  useEffect(() => {
    new Swiper('.leadership-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      // here are the breakpoints you can alter
      // how many slides are seen and the margins.
      breakpoints: {
        1840: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1275: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }, []);

  const {organizers, speakers} = {
    organizers: [
      {
        userName: 'Lloan Alas',
        title: 'Executive Director',
        image: '../static/images/desktop/lloanalas.jpg',
      },
      {
        userName: 'Tony Nguyen',
        title: 'Chief Financial Officer',
        image: '../static/images/desktop/tonynguyen.jpg',
      },
      {
        userName: 'Felipe Fernandez',
        title: 'Secretary',
        image: '../static/images/desktop/felipefernandez.jpg',
      },
      {
        userName: 'Luis Velazquez',
        title: 'Lead React Developer',
        image: '../static/images/desktop/luisvelazquez.jpg',
      },
      {
        userName: 'Jen Latchman',
        title: 'Digital Marketing',
        image: '../static/images/desktop/jenlatchman.png',
      },
      {
        userName: 'Jonathan Nguyen',
        title: 'Application Developer',
        image: '../static/images/desktop/jonathannguyen.jpg',
      },
      {
        userName: 'Kelly Lam',
        title: 'Internal Relations Director',
        image: '../static/images/desktop/kellylam.jpg',
      },
      {
        userName: 'Amy Ambard',
        title: 'Front End Developer',
        image: '../static/images/desktop/amyambard.jpg',
      },
      {
        userName: 'Amber Macbain',
        title: 'Front End Developer',
        image: '../static/images/desktop/ambermacbain.jpg',
      },
    ],
    speakers: [
      {
        userName: 'Vast Lee',
        title: 'What Employers Want',
        image: '../static/images/desktop/vastlee.png',
      },
      {
        userName: 'Tim Jenkins',
        title: 'From Dev to Co-Founder',
        image: '',
      },
      {
        userName: 'Spencer Trumbore',
        title: 'Node.js & Wolfram Alpha API',
        image: '../static/images/desktop/spencertrumbore.png',
      },
      {
        userName: 'Ixshel Escamilla',
        title: 'Introduction to Angular',
        image: '',
      },
      {
        userName: 'Rey Santiago',
        title: 'Designers and Developers',
        image: '',
      },
      {
        userName: 'Felipe Fernandez',
        title: 'Arrow Functions',
        image: '../static/images/desktop/felipefernandez.jpg',
      },
      {
        userName: 'Csaba Balough',
        title: 'Javascript Closures',
        image: '',
      },
      {
        userName: 'Nicholas Twohig',
        title: 'Project Management & Agile',
        image: '',
      },
      {
        userName: 'Anisha Joshipura',
        title: 'Flexbox',
        image: '',
      },
      {
        userName: 'Tony Nguyen',
        title: 'Exploring Jest',
        image: '../static/images/desktop/tonynguyen.jpg',
      },
      {
        userName: 'Lloan Alas',
        title: 'Eloquent Javascript Series',
        image: '../static/images/desktop/lloanalas.jpg',
      },
    ],
  };

  return (
    <div id='leadership' className='grid-container'>
      <div className='center-column column-22 tablet-column-10'>

        <div className='column-22'>
          <h3 className='column-1 phone-column-6 tablet-column-12'>
                ORGANIZERS
          </h3>
          <div
            className='organizers scrolling column-21
                tablet-column-12 phone-column-6
                 leadership-swiper'>
            <ul className='swiper-wrapper'>
              {organizers.map((organizer, index) => (
                <li className='swiper-slide'
                  key={index}>
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

        <div className='column-22'>
          <h3 className='column-1 tablet-column-12 phone-column-6'>
                PAST SPEAKERS</h3>
          <div className='speakers scrolling column-21 tablet-column-12
                phone-column-6 leadership-swiper'>
            <ul className='swiper-wrapper'>
              {speakers.map((speaker, index) => (
                <li className='swiper-slide'
                  key={index}>
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
        <div className="column-22 leader-1 center-column">
          <p className="text-center">
            <small>You can drag images left and right to see more.</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
