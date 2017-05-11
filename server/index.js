const express = require('express');
const nunjucks = require('nunjucks');
const compression = require('compression');
const morgan = require('morgan');
const settings = require('server/settings');
const data = require('server/data');

const server = express();

nunjucks.configure(`${process.cwd()}/server/views`, {
  autoescape: true,
  express: server,
  watch: settings.dev
});

server.use(morgan('short'));
server.use(compression());

server.get('/', (req, res) => res.render('website.html', data));

// Public files
server.use(express.static(`${process.cwd()}/public`));

// HTTP 404
server.use((req, res) => res.status(404).render('intern/404.html'));

// HTTP 5XX
server.use((err, req, res) => {
  log.router.error(err.stack);
  res.status(err.status || 500).render('intern/500.html', { content: err.stack });
});

server.listen(settings.port, settings.host, function (err) {
  if (err) throw err;
  console.log(`Running at http://${settings.host}:${settings.port}.`);
});
