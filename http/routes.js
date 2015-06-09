var express = require('express'),
	router = express.Router();

	homeResource = require('./resources/home'),
	userResource = require('./resources/users'),

router.use('/', homeResource);
router.use('/users', userResource);

module.exports = router;
