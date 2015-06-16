module.exports = function (req, res, next) {
	var inputs = req.flash('_old_input');

	res.locals.oldInput = function (key, fallback) {
		return inputs[0] && inputs[0][key] || fallback;
	}

	next();
};
