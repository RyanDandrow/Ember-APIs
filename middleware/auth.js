module.exports = function (req, res, next) {
	req.login = function (user, callback) {
		req.session.user = user.id;

		callback(null, user);
	}

	req.logout = function () {
		req.session.user = null;
	};

	next();
};
