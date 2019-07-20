import {getEvents} from '../../utils/meetupApiUtil';
import {useState, useEffect} from 'react';
import Event from './Event'

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then( (events) => {
      setEvents(events);
    });
  }, []);

  const eventItems = (events) => {
    return events.map((event)=> {
      return <Event key={event.id} event={event} />
    })
  }

  return (
    <div className="events-container column-24">
      <div className="events-list">
        {eventItems(events)}
      </div>
    </div>
  );
}

export default Events;
