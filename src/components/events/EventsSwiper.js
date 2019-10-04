import {getEvents, getFakeEvents} from '../../utils/meetupApiUtil';
import {useState, useEffect} from 'react';
import Event from './Event'

import Swiper from 'swiper';
import _debounce from 'lodash.debounce'

function EventsSwiper() {
  const [events, setEvents] = useState([]);
  let eventsSwiper;

  useEffect(() => {
    getFakeEvents().then( (events) => {
      setEvents(events);
      eventsSwiper = new Swiper('.events-container', {
        centeredSlides: false
      });
    });
  }, []);

  const eventItems = (events) => {
    return events.map((event,idx)=> {
      return <Event key={event.id + idx} event={event} swiperBool={true} />
    })
  }

  const containerClass = "swiper-container events-container column-24 center-column"

  return (
    <div className={containerClass}>
      <h1 className="event-header pre-1 leader-1">Upcoming Events</h1>
      <div className="swiper-wrapper events-list pre-1">
        {eventItems(events)}
      </div>
    </div>
  );
}

export default EventsSwiper;
