var mongoose = require('mongoose');

	var NewsArticleSchema = mongoose.Schema({
		title: String,
		body: String,
		publishDate: {type: Date, default: Date.now}
	});

	NewsArticleSchema.virtual('short').get(function() {
		return this.body.split(/\s+/).slice(0,5).join(' ');
	});

	module.exports = mongoose.model('NewsArticle', NewsArticleSchema);