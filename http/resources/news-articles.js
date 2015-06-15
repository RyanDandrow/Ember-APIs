var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'),
	NewsArticle = mongoose.model('NewsArticle');

var baseUrl = '/news-articles',
	urlHelper = require('./../helpers/url')(baseUrl);

var prepareData = function(title, data) {
	data.title = title;
	data.urlHelper = urlHelper;

	return data;
}

var invalidResponse = function (req, res) {
	return function (err) {
		req.flash('danger', 'No news article exists with that id "' + req.params.id + '"');
		res.redirect(urlHelper.index());
	};
};

/* GET all news articles in a table */
router.get('/', function (req, res) {
	NewsArticle.find().exec()
		.then(function(newsArticles) {
			var data = prepareData('News Articles', {
				newsArticles: newsArticles
			});

			res.render('news-articles/index', data);
		});
});

/* GET form to create news article. */
router.get('/new', function (req, res) {
	var data = prepareData('News Article - New', {
		newsArticle: new NewsArticle()
	});

	res.render('news-articles/create', data);
});

/* POST create news article from form data. */
router.post('/', function (req, res) {
	NewsArticle.create(req.body)
		.then(function(newsArticle) {
			req.flash('success', '"' + newsArticle.title + '" has been created');			
			res.redirect(urlHelper.index());
		}, function (err) {
			req.flash('errors', err.errors);
			req.flash('danger', 'There was an error saving this News Article');
			res.redirect(req.header('Referer') || '/');
		});
});

/* GET a detailed view of a news article. */
router.get('/:id', function (req, res) {
	NewsArticle.findById(req.params.id).exec()
		.then(function(newsArticle) {
			var data = prepareData('News Articles - ' + newsArticle.title, {
				newsArticle: newsArticle
			});

			res.render('news-articles/show', data);
		}, invalidResponse(req, res));
});

/* GET edit form for a news article. */
router.get('/:id/edit', function (req, res) {
	NewsArticle.findById(req.params.id).exec()
		.then(function(newsArticle) {
			var data = prepareData('News Articles - Edit - ' + newsArticle.title, {
				newsArticle: newsArticle
			});

			res.render('news-articles/edit', data);
		}, invalidResponse(req, res));
});

/* PUT save updates to a news article. */
router.put('/:id', function (req, res) {
	NewsArticle.findByIdAndUpdate(req.params.id, req.body).exec()
		.then(function(newsArticle) {
			req.flash('success', '"' + newsArticle.title + '" has been updated');
			res.redirect(urlHelper.index());
		}, function (err) {
			req.flash('errors', err.errors);
			req.flash('danger', 'There was an error saving this News Article');
			res.redirect(req.header('Referer') || '/');
		});
});

/* GET edit form for a news article. */
router.delete('/:id', function (req, res) {
	NewsArticle.findByIdAndRemove(req.params.id).exec()
		.then(function(newsArticle) {
			req.flash('success', '"' + newsArticle.title + '" has been deleted');
			res.redirect(urlHelper.index());
		}, invalidResponse(req, res));
});

module.exports = router;
