var Mystique = require('mystique');

var NewsArticleTransformer = new Mystique.Transformer({
	resourceName: 'news-article',
	map: function (newsArticle) {
		return {
			_id: newsArticle.id,
			title: newsArticle.title,
			body: newsArticle.body,
			short: newsArticle.short,
			publishDate: newsArticle.publishDate
		};
	}
});

Mystique.registerTransformer('NewsArticle', NewsArticleTransformer);
