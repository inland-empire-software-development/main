import {fetchEvents} from '../utils/meetupApiUtil';
import { useState, useEffect } from 'react';

function Events() {
    const [events, setEvents] = useState([]);
    const getEvents = fetchEvents


    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await fetchEvents()
        return response
      }
      console.log(fetchData());
    }, []);

    return (
      <div className="events">
        {events}
      </div>
    )
  }
  
  export default Events;
  
