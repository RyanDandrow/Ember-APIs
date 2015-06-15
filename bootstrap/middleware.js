var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var override = require('method-override');
var session = require('express-session');
var flash = require('express-flash');
var flashError = require('../middleware/flash-error');
var redirectHelpers = require('../middleware/redirect-helpers');

module.exports = function (app) {
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(override(function(req, res){
  		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    		// look in urlencoded POST bodies and delete it
    		var method = req.body._method
    		delete req.body._method
 	  		return method
  		}
	}));
	app.use(session({
		secret: 'blahblah',
		resave: 'false',
		saveUninitialized: true
	}));
	app.use(flash());
	app.use(flashError);
	app.use(redirectHelpers);
};
