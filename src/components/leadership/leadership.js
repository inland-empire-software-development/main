/* eslint-disable arrow-parens */
import LeadershipImage from './leadership-image.js';

class Leadership extends React.Component {
  state = {
    organizers: [
      {
        id: 1,
        userName: 'Lloan Alas',
        title: 'LAMP Stack Developer',
        image: '../static/images/desktop/lloanalas.jpg',
      },
      {
        id: 2,
        userName: 'Tony Nguyen',
        title: 'IESD Treasurer',
        image: '../static/images/desktop/tonynguyen.jpg',
      },
      {
        id: 3,
        userName: 'Amber Macbain',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 6,
        userName: 'Felipe Fernandez',
        title: 'IESD Secratary',
        image: '../static/images/desktop/felipefernandez.jpg',
      },
      {
        id: 4,
        userName: 'Amy Ambard',
        title: 'Front End Developer',
        image: '../static/images/desktop/amyambard.jpg',
      },
      {
        id: 5,
        userName: 'Luis Javier Velazquez',
        title: 'Front End Developer',
        image: '../static/images/desktop/luisvelazquez.jpg',
      },
      {
        id: 11,
        userName: 'Cesar Gomez',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 7,
        userName: 'Ixshel Escamilla',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 8,
        userName: 'Jen Latchman',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 9,
        userName: 'Jonathan Nguyen',
        title: 'Front End Developer',
        image: '../static/images/desktop/jonathannguyen.jpg',
      },
      {
        id: 10,
        userName: 'Kelly Lam',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
    ],
    speakers: [
      {
        id: 1,
        userName: 'Lloan Alas',
        title: 'Mastermind',
        image: '../static/images/desktop/lloanalas.jpg',
      },
      {
        id: 7,
        userName: 'Ixshel Escamilla',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 6,
        userName: 'Felipe Fernandez',
        title: 'Front End Developer',
        image: '../static/images/desktop/felipefernandez.jpg',
      },
      {
        id: 2,
        userName: 'Tony Nguyen',
        title: 'UCR Bootcamp TA',
        image: '../static/images/desktop/tonynguyen.jpg',
      },
      {
        id: 4,
        userName: 'Amy Ambard',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
    ],
  };

  render() {
    const { organizers, speakers } = this.state;
    return (
      <div id="leadership" className='grid-container'>
        <div className='center-column column-22 tablet-column-10'>

          <h3 className='column-1 phone-column-6 tablet-column-12'>ORGANIZERS</h3>
          <div className='organizers scrolling column-21 tablet-column-12 phone-column-6'>
            <ul>
              {organizers.map(organizer => (
                <li
                  key={organizer.id}>
                  <LeadershipImage userName={organizer.userName}
                    title={organizer.title}
                    image={organizer.image} />
                </li>)
              )}
            </ul>
          </div>

          <h3 className='column-1 tablet-column-12 phone-column-6'>PAST SPEAKERS</h3>
          <div className='speakers scrolling column-21 tablet-column-12 phone-column-6'>
            <ul>
              {speakers.map(speaker => (
                <li key={speaker.id}>
                  <LeadershipImage userName={speaker.userName}
                    title={speaker.title}
                    image={speaker.image} />
                </li>)
              )}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}


// eslint-disable-next-line eol-last
export default Leadership;