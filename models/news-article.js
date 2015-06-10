var mongoose = require('mongoose');

	var NewsArticleSchema = mongoose.Schema({
		title: String,
		body: String,
		publishDate: {type: Date, default: Date.now}
	});

	module.exports = mongoose.model('NewsArticle', NewsArticleSchema);