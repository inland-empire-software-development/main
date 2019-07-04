const express = require('express');
const next = require('next');

const env = process.env.NODE_ENV.trim();
const dev = env !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const PORT = process.env.PORT;

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
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + PORT);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
