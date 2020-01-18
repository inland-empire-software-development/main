import {useState, useEffect} from 'react';
import {fetchEvents} from '../utils/meetupApiUtil';
import {calcStartTime, calcEndTime} from '../utils/convertTimeUtil';
import {splitMonth, splitDay} from '../utils/splitDateUtil';

import Button from "./global/Button";

function SingleEvent() {
  const [eventName, setEventName] = useState(false);
  const [eventMonth, setEventMonth] = useState(false);
  const [eventDay, setEventDay] = useState('');
  const [eventStartTime, setEventStartTime] = useState('--');
  const [eventEndTime, setEventEndTime] = useState('--');
  const [eventLink, setEventLink] = useState(false);

  // Removes any odd formatting in event Name.
  const getEventName = (eventName) => {
    return eventName.replace("-", "");
  };

  useEffect(() => {
    fetchEvents().then((fasle) => {
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

  if (eventName === false ) {
    return (
      <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
      >
        <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h1 uk-parallax="opacity: 1.0; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
          <p uk-parallax="opacity: 1,0; y: 100,0; scale: 0.5,1; viewport: 0.5;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    );
  } else {
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
}

export default SingleEvent;
