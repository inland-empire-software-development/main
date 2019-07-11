import Fetch from 'isomorphic-unfetch';

export const fetchEvents = () => {
    let apiUrl = `/api/events`

    return Fetch("/api/events")
    .then( response => response.json())
}

export const getEvents = () => {
    return fetchEvents().then( resp => {
        return resp.results
    })
}