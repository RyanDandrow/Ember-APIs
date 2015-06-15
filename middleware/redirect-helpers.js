module.exports = function (req, res, next) {
	res.withInput = function () {
		req.flash('_old_input', req.body);

		return res;
	};

	res.redirectBack = function() {
		var url = req.header('Referer') || '/';

		return res.redirect(url);
	},
	next();
};
