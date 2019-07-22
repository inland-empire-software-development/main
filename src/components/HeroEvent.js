import {useState, useEffect} from 'react';
import {fetchEvents} from '../utils/meetupApiUtil';
import {calcStartTime, calcEndTime} from '../utils/convertTimeUtil';
import {splitMonth, splitDay} from '../utils/splitDateUtil';

function HeroEvent() {
  const [eventName, setEventName] = useState('');
  const [eventMonth, setEventMonth] = useState('');
  const [eventDay, setEventDay] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventLink, setEventLink] = useState('');

  useEffect(() => {
    fetchEvents().then((result) => {
      setEventName(result[0].name);
      setEventStartTime(calcStartTime(result[0].local_time));
      setEventEndTime(
          calcEndTime(result[0].local_time, result[0].duration
          ));
      setEventMonth(splitMonth(result[0].local_date));
      setEventDay(splitDay(result[0].local_date));
      setEventLink(result[0].link);
    });
  }, []);

  return (
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

          <div className="hero-event-location">

            <p>Address:</p>
            <p>3499 Tenth St. Riverside, CA 92501</p>

          </div>

        </div>

      </div>

      {/* reserve a spot buton */}
      <div className="reserve-wrapper">

        <button
          onClick={() => window.open(`${eventLink}`)}
          className="reserve-button">reserve a spot</button>

      </div>

    </div>
  );
}

// TODO: clean the formatting of JSX elements
export default HeroEvent;
