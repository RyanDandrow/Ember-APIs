var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'),
	NewsArticle = mongoose.model('NewsArticle');

var baseUrl = '/api/news-articles',
	urlHelper = require('./../../helpers/url')(baseUrl);

var prepareData = function(title, data) {
	data.title = title;
	data.urlHelper = urlHelper;

	return data;
}

var invalidResponse = function (req, res) {
	return function (err) {
		res.status(404)
			.json({'error': 'No news article exists with an id' + req.params.id})
	};
};

/* GET all news articles in a table */
router.get('/', function (req, res) {
	NewsArticle.find().exec()
		.then(function(newsArticles) {
			res.json({'news-articles': newsArticles});
		});
});
/* GET a detailed view of a news article. */
router.get('/:id', function (req, res) {
	NewsArticle.findById(req.params.id).exec()
		.then(function(newsArticle) {
			res.json({'news-article': newsArticle});
		}, invalidResponse(req, res));
});

module.exports = router;
