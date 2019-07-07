require('dotenv').config();

const express = require('express');
const next = require('next');
const fetch = require('isomorphic-unfetch');

const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const PORT = process.env.ENV_PORT || 3000;

console.log(process.env);

app.prepare().then(() => {
  const server = express();

  // example of a route with a query param
  server.get('/post/:id', (req, res) => {
    const actualPage = '/post';
    const queryParams = {
      slug: req.params.id,
    };
    app.render(req, res, actualPage, queryParams);
  });

  // proxy to make fetch requests to meetup
  server.get('/meetup/upcoming', (req, res) => {
    if (req.method === 'GET') {
      const apiUrl = 'https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public&page=20';

      fetch(apiUrl)
          .then((response) => response.json())
          .then((result) => {
            res.json(result);
          });
    }
  });

  // default
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // start server on given port
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + PORT);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
