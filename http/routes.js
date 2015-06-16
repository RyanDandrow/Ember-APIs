var express = require('express'),
	router = express.Router(),
	adminRouter = express.Router(),
	apiRouter = express.Router();

	authFilter = require('./filters/auth'),

	apiNewsArticleResource = require('./resources/api/news-articles');

	adminHomeResource = require('./resources/admin/home'),
	adminUserResource = require('./resources/admin/users'),
	adminNewsArticleResource = require('./resources/admin/news-articles');
	sessionResource = require('./resources/session');

adminRouter.use(authFilter);
adminRouter.use('/', adminHomeResource);
adminRouter.use('/users', adminUserResource);
adminRouter.use('/news-articles', adminNewsArticleResource);

apiRouter.use('/news-articles', apiNewsArticleResource);

router.use('/admin', adminRouter);
router.use('/api', apiRouter);
router.use('/', sessionResource);

module.exports = router;
