var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'),
	User = mongoose.model('User');

var loginError = function(req, res) {
	req.flash('danger', 'The user email and password do not match');

	res.withInput().redirectBack();
};

/* GET login form. */
router.get('/login', function (req, res) {
	res.render('login');
});

/* POST submit login. */
router.post('/login', function (req, res) {
	var email = req.body.email,
		password = req.body.password;

	User.findOne({email: email}).exec()
		.then(function (user) {
			if (user) {
				user.checkPassword(password, function () {
					req.login(user, function () {
						req.flash('success', 'You have logged in successfuly.');

						res.redirect('/admin');
					});
				}, function (err) {
					loginError(req, res)
				});
			} else {
				loginError(req, res)
			}
		}, function (err) {
			loginError(req, res)
		});
});

router.all('/logout', function (req, res) {
	req.logout();

	req.flash('success', 'You have successfully logged out');

	res.redirect('/login');
});

module.exports = router;
