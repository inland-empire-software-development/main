function Event(prop) {   
    let {event} = prop
    let date = new Date(event.time)
    let day = date.getDate()
    let month = date
      .toLocaleDateString('default', { month: 'short' })
      .toLocaleUpperCase()
    let startTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
    let endTime = new Date(event.time + event.duration).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
    let {name} = event

    return (
        <div className="event grid-container column-11">
          <div className="date column-3">
            <p className="event-day">{day}</p>
            <p className="event-month">{month}</p>   
            <p className="event-time">{startTime} - {endTime}</p>         
          </div>
          <div className="info column-8">
            <div className="event-name font-size-3">{name}</div>
            <div className="event-buttons column-8">
              <button className="event-button btn btn-half">details</button>
              <button className="event-button btn btn-half">reserve a spot</button>
            </div>
          </div>
        </div>
    );
}

export default Event;