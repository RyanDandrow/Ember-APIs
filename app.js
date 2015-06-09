var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var routes = require('./http/routes');

var app = express();
require('./bootstrap/middleware')(app);
require('./bootstrap/views')(app);

app.use('/', routes);

require('./bootstrap/errors')(app);

module.exports = app;
