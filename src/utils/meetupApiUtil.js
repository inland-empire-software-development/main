import Fetch from 'isomorphic-unfetch';

export const fetchEvents = () => {
    let id = "iesd-meetup"
    let meetApi = `https://api.meetup.com/${id}/`
    
    return Fetch(meetApi)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    })
}

module.exports = fetchEvents();