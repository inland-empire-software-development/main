import {useState, useEffect} from 'react';
import {fetchEvents} from '../utils/meetupApiUtil';
import {calcStartTime, calcEndTime} from '../utils/convertTimeUtil';
import {splitMonth, splitDay} from '../utils/splitDateUtil';

import Button from "./global/Button";

function SingleEvent() {
  const [eventName, setEventName] = useState('--');
  const [eventMonth, setEventMonth] = useState('--');
  const [eventDay, setEventDay] = useState('');
  const [eventStartTime, setEventStartTime] = useState('--');
  const [eventEndTime, setEventEndTime] = useState('--');
  const [eventLink, setEventLink] = useState('#');

  // Removes any odd formatting in event Name.
  const getEventName = (eventName) => {
    return eventName.replace("-", "");
  };

  useEffect(() => {
    fetchEvents().then((result) => {
      const {name, duration, link} = result[0];
      const localTime = result[0].local_time;
      const localDate = result[0].local_date;

      setEventName(getEventName(name));
      setEventStartTime(calcStartTime(localTime));
      setEventEndTime(
          calcEndTime(localTime, duration,
          ));
      setEventMonth(splitMonth(localDate));
      setEventDay(splitDay(localDate));
      setEventLink(link);
    }).catch((err) => console.log(err));
  });

  return (
    eventName &&
    <div className="hero-event-container">

      {/* event details container */}
      <div className="hero-event-info">

        {/* hero event info left side */}
        <div className="hero-event-date">

          <p className="hero-event-day">{eventDay}</p>
          <p className="hero-event-month">{eventMonth}</p>
          <p className="hero-event-time">{eventStartTime} - {eventEndTime}</p>

        </div>

        {/* hero event info right side */}
        <div className="hero-event-desc">

          <p className={`event-name ${eventName.length < 30 ?
            "event-name-short" : ""}`}>
            {eventName}
          </p>

        </div>

      </div>

      {/* reserve a spot button */}
      <div className="reserve-wrapper">

        <Button link={eventLink} label="reserve a spot" width={3}/>

      </div>

    </div>
  );
}

export default SingleEvent;
