import fetch from 'isomorphic-unfetch';

export const fetchEvents = () => {
  const apiUrl = `/api/events`;

  return fetch(apiUrl)
      .then( (response) => response.json());
};

export const getEvents = () => {
  return fetchEvents().then( (resp) => {
    return resp.results;
  });
};
