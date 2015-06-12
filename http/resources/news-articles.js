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

	/* GET form to create news article. */
	router.get('/new', function (req, res) {
		var data = {
			title: 'News Articles - New',
			newsArticle: new NewsArticle()
		};

		res.render('news-articles/create', data);
	});

	/* POST create news article from form data. */
	router.post('/', function (req, res) {
		NewsArticle.create(req.body)
			.then(function() {
				res.redirect('/news-articles');
			})
	});

	/* GET a detailed view of a news article. */
	router.get('/:id', function (req, res) {
		NewsArticle.findById(req.params.id).exec()
			.then(function(newsArticle) {
				var data = {
					title: 'News Articles - ' + newsArticle.title,
					newsArticle: newsArticle
				};

				res.render('news-articles/show', data);
			});
	});

	/* GET edit form for a news article. */
	router.get('/:id/edit', function (req, res) {
		NewsArticle.findById(req.params.id).exec()
			.then(function(newsArticle) {
				var data = {
					title: 'News Articles - Edit - ' + newsArticle.title,
					newsArticle: newsArticle
				};

				res.render('news-articles/edit', data);
			});
	});

	/* GET edit form for a news article. */
	router.post('/:id', function (req, res) {
		NewsArticle.findByIdAndUpdate(req.params.id, req.body).exec()
			.then(function(newsArticle) {
				res.redirect('news-articles');
			});
	});

module.exports = router;
