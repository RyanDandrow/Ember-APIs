var path = require('path');

module.exports = function (app) {
	var viewDir = path.join(__dirname, '../resources/templates');
	// view engine setup
	app.locals.basedir = viewDir;

	app.set('views', viewDir);
	app.set('view engine', 'jade');
};
