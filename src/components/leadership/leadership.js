/* eslint-disable arrow-parens */
import LeadershipImage from './leadership-image.js';

class Leadership extends React.Component {
  state = {
    organizers: [
      {
        id: 1,
        userName: 'Lloan Alas',
        title: '',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 2,
        userName: 'Tony Nguyen',
        title: '',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 3,
        userName: 'Amber Macbain',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 4,
        userName: 'Amy Ambard',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 5,
        userName: 'Luis Javier Fernandez',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 6,
        userName: 'Felipe Fernandez',
        title: 'Front End Developer',
        image: '../static/images/desktop/placeholder.JPG',
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
        image: '../static/images/desktop/placeholder.JPG',
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
        title: '',
        image: '../static/images/desktop/placeholder.JPG',
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
        image: '../static/images/desktop/placeholder.JPG',
      },
      {
        id: 2,
        userName: 'Tony Nguyen',
        title: '',
        image: '../static/images/desktop/placeholder.JPG',
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
        <div >

          <h3 className='column-2 '>ORGANIZERS</h3>
          <div className='organizers scrolling column-18'>
            <ul>
              {organizers.map(organizer => (
                <li key={organizer.id}>
                  <LeadershipImage userName={organizer.userName}
                    title={organizer.title}
                    image={organizer.image} />
                </li>)
              )}
            </ul>
          </div>

          <h3 className='column-2 '>PAST SPEAKERS</h3>
          <div className='speakers scrolling column-18'>
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