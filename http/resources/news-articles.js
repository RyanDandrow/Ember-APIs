var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'),
	NewsArticle = mongoose.model('NewsArticle');

/* GET home page. */
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

module.exports = router;
