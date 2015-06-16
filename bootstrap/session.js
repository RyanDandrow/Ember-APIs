var session = require('express-session');
var flash = require('express-flash');
var flashError = require('../middleware/flash-error');
var oldInput = require('../middleware/old-input');
var auth = require('../middleware/auth');
var RedisStore = require('connect-redis')(session);

module.exports = function (app) {
	app.use(session({
		store: new RedisStore(),
		secret: 'blahblah',
		resave: 'false',
		saveUninitialized: true
	}));
	app.use(flash());
	app.use(flashError);
	app.use(oldInput);
	app.use(auth);
};
