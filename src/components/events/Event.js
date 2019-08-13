function Event(prop) {   
    let {event, swiperBool} = prop
    let date = new Date(event.time)
    let day = date.getDate()
    let month = date
      .toLocaleDateString('default', { month: 'short' })
      .toLocaleUpperCase()
    let startTime = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric'})
    let endTime = new Date(event.time + event.duration).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric'})
    let {name, link} = event

    let swiperStyle = swiperBool ? "swiper-slide" : ""
    let eventClass = `${swiperStyle} event grid-container column-11 phone-column-6 trailer-1`

    return (
        <div className={eventClass}>
          <div className="date column-3 phone-column-2
          ">
            <p className="event-day">{day}</p>
            <p className="event-month">{month}</p>   
            <p className="event-time">{startTime} - {endTime}</p>         
          </div>
          <div className="info column-8 phone-column-4">
            <div className="event-name font-size-2">{name}</div>
            <div className="event-buttons column-8 phone-column-4">
              <button onClick={() => window.open(`${link}`)}
              className="details-button btn btn-fill">details</button>
            </div>
          </div>
        </div>
    );
}

export default Event;