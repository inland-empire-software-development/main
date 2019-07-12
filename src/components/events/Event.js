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
        <div className="event grid-container column-8">
          <div className="date column-3">
            <h1>{day}</h1>
            <h3>{month}</h3>   
            <div>{startTime} - {endTime}</div>         
          </div>
          <div className="info column-5">
            <div className="font-size-3">{name}</div>
            <div>details</div>
            <div>reserve a spot</div>
          </div>
        </div>
    );
}

export default Event;