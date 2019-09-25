import {getEvents} from '../utils/meetupApiUtil';
import {useState, useEffect} from 'react';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then( (events) => {
      setEvents(events);
    });
  }, []);

  return (
    <div className="events">
    </div>
  );
}

export default Events;
