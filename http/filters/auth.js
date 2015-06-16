module.exports = function (req, res, next) {
	if (req.session.user) {
		next();

		return;
	}

	req.flash('danger', 'You must be logged in.');

	res.redirect('/login');
};
