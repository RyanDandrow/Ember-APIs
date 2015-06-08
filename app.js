var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
require('./bootstrap/middleware')(app);
require('./bootstrap/views')(app);


app.use('/', routes);
app.use('/users', users);

require('./bootstrap/errors')(app);

module.exports = app;
