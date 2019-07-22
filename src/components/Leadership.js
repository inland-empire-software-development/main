
import LeadershipImage from './Leadership-image.js';

class Leadership extends React.Component {
  render() {
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
          title: 'Secratary',
          image: '../static/images/desktop/felipefernandez.jpg',
        },
        {
          userName: 'Luis Javier Velazquez',
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
          userName: 'Spencer Trumbore',
          title: 'Node.js & Wolfram Alpha API',
          image: '',
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
               tablet-column-12 phone-column-6'>
              <ul>
                {organizers.map((organizer) => (
                  <li
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

          <div className='column-22'>
            <h3 className='column-1 tablet-column-12 phone-column-6'>PAST SPEAKERS</h3>
            <div className='speakers scrolling column-21  tablet-column-12 phone-column-6'>
              <ul>
                {speakers.map((speaker) => (
                  <li key={speaker.id}>
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
      </div>
    );
  }
}

// eslint-disable-next-line eol-last
export default Leadership;