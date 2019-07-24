const {
  AbortController,
  abortableFetch,
} =
require('abortcontroller-polyfill/dist/cjs-ponyfill');
const _nodeFetch = require('node-fetch');
const {
  fetch,
} =
abortableFetch({
  fetch: _nodeFetch,
  Request: _nodeFetch.Request,
});

export const controller = new AbortController();
const signal = controller.signal;

export const fetchEvents = () => {
  const apiUrl = `/api/events`;
  return fetch(apiUrl, {
    signal,
  })
      .then((response) => response.json());
};

export const getEvents = () => {
  return fetchEvents().then((resp) => {
    return resp.results;
  });
};
