import {getEvents, getFakeEvents} from '../../utils/meetupApiUtil';
import {useState, useEffect} from 'react';
import Event from './Event'

function EventsSwiper() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getFakeEvents().then( (events) => {
      setEvents(events);
    });
  }, []);

  const eventItems = (events) => {
    return events.map((event)=> {
      return <Event key={event.id} event={event} />
    })
  }

  const calciteClass = "events-swiper column-24 center-column"

  return (
    <div className={calciteClass}>
      <h1 className="event-header pre-1 leader-1">Upcoming Events</h1>
      <div className="events-list pre-1">
        {eventItems(events)}
      </div>
    </div>
  );
}

export default EventsSwiper;
