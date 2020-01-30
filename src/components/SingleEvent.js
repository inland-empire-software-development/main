import {useState, useEffect} from 'react';
import {fetchEvents} from '../utils/meetupApiUtil';
import {calcStartTime, calcEndTime} from '../utils/convertTimeUtil';
import {splitMonth, splitDay} from '../utils/splitDateUtil';
import Button from "./global/Button";

function SingleEvent() {
  const [eventDetails, setEventDetails] = useState("");
  // Removes any odd formatting in event Name.
  const getEventName = (eventName) => {
    return eventName.replace("-", "");
  };
  // if no api is fetch sets event details to false
  const eventDetailsToFalse = () => {
    setEventDetails(false);
  };
  // stores meetup api data to event details
  useEffect(() => {
    fetchEvents().then((result) => {
      const {name, duration, link = false} = result[0];
      const localTime = result[0].local_time;
      const localDate = result[0].local_date;
      if (name) {
        setEventDetails({
          eventName: getEventName(name),
          eventStartTime: calcStartTime(localTime),
          eventEndTime: calcEndTime(localTime, duration),
          eventMonth: splitMonth(localDate),
          eventDay: splitDay(localDate),
          link,
        });
      }
    }).catch((err) => {
      console.log(err);
      eventDetailsToFalse();
    });
  }, []);
  // if api is fetched display event container
  if (eventDetails) {
    const {eventDay, eventMonth, eventStartTime, eventEndTime, eventName, link} = eventDetails;
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
          </div>
        </div>
        {/* reserve a spot button */}
        <div className="reserve-wrapper">
          <Button link={link} label="reserve a spot" width={3}/>
        </div>
      </div>
    );
  } else if (eventDetails === false) {
    // if eventDetails is false display this container
    return (
      <div className="hero-event-container-false">
        {/* Event replacement if api fails container */}
        <div
          className="uk-height-medium uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
        >
          {/* IESD and slogan */}
          <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
            <h1 uk-parallax="opacity: 1,0; y: 20,-1; scale: 2,1; viewport: 1.2;" className="hero-event-false">IESD</h1>
            <h6 uk-parallax="opacity: 1,0; y: 50,185; scale: 2,.8; viewport: 1.2;" className="hero-event-false-slogan">
              Community and <br></br> Developer Excellence.</h6>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default SingleEvent;
