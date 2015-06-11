var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'),
	NewsArticle = mongoose.model('NewsArticle');

	/* GET all news articles in a table */
	router.get('/', function (req, res, next) {
		NewsArticle.find().exec()
			.then(function(newsArticles) {
				var data = {
					title: 'News Articles',
					newsArticles: newsArticles
				};

				res.render('news-articles/index', data);
			});
	});

	/* GET a detailed view of a news article. */
	router.get('/:id', function (req, res, next) {
		NewsArticle.findById(req.params.id).exec()
			.then(function(newsArticle) {
				var data = {
					title: 'News Articles - ' + newsArticle.title,
					newsArticle: newsArticle
				};

				res.render('news-articles/show', data);
			});
	});

module.exports = router;
