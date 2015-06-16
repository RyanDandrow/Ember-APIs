var express = require('express'),
	router = express.Router(),
	adminRouter = express.Router();

	authFilter = require('./filters/auth'),

	homeResource = require('./resources/home'),
	userResource = require('./resources/users'),
	newsArticleResource = require('./resources/news-articles');
	sessionResource = require('./resources/session');

adminRouter.use(authFilter);
adminRouter.use('/', homeResource);
adminRouter.use('/users', userResource);
adminRouter.use('/news-articles', newsArticleResource);

router.use('/admin', adminRouter);
router.use('/', sessionResource);

module.exports = router;
