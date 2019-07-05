import Fetch from 'isomorphic-unfetch';

export const fetchEvents = () => {
    let id = "iesd-meetup"
    let meetApi = `https://api.meetup.com/${id}/`
    let config = { mode: 'no-cors'}

    return Fetch(meetApi, config)
    .then(function(response) {
      return response
    })
    .then(function(myJson) {
      return JSON.stringify(myJson);
    })
}