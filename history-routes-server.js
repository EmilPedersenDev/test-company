const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const favicon = require('serve-favicon');
const path = require('path');

const Port = process.env.PORT || 3001;
const app = express();
app.use(
  history({
    verbose: true,
  })
);

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(Port, () => {
  console.log(`History routes server running on port ${Port}.`);
});
