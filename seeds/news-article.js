var mongoose = require('mongoose');
	NewsArticle = mongoose.model('NewsArticle');

NewsArticle.remove().exec().then(function() {
	NewsArticle.create({
		title: 'Quitting the band',
		body: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
		publishDate: Date(2014, 12, 13) 
	}).then(function(newsArticle) {
		console.log(newsArticle);
		process.exit();
	});
});
