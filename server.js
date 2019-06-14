const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

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

  // default
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // start server on given port
  server.listen(5100, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:5100');
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
