var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'),
	User = mongoose.model('User');
var mystique = require('mystique'),
	UserTransformer = mystique.getTransformer('User');

var baseUrl = '/api/user',
	urlHelper = require('./../../helpers/url')(baseUrl);

var prepareData = function(title, data) {
	data.title = title;
	data.urlHelper = urlHelper;

	return data;
}

var invalidResponse = function (req, res) {
	return function (err) {
		res.status(404)
			.json({'error': 'No user exists with an id' + req.params.id})
	};
};

/* GET all user in a table */
router.get('/', function (req, res) {
	User.find().exec()
		.then(function(users) {
			res.json(UserTransformer.collection(users));
		});
});
/* GET a detailed view of a user. */
router.get('/:id', function (req, res) {
	User.findById(req.params.id).exec()
		.then(function(user) {
			res.json(UserTransformer.item(user));
		}, invalidResponse(req, res));
});

module.exports = router;
