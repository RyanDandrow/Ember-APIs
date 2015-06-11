var express = require('express'),
	router = express.Router();

	homeResource = require('./resources/home'),
	userResource = require('./resources/users'),
	newsArticleResource = require('./resources/news-articles');

router.use('/', homeResource);
router.use('/users', userResource);
router.use('/news-articles', newsArticleResource);

module.exports = router;
