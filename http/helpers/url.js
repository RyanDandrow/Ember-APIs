module.exports = function (baseUrl) {
	return {
		index: function (id) {
			return baseUrl;
		},
		create: function (id) {
			return baseUrl + '/new';
		},
		store: function (id) {
			return baseUrl;
		},
		show: function (id) {
			return baseUrl + '/' + id;
		},
		edit: function (id) {
			return baseUrl + '/' + id + '/edit';
		},
		update: function (id) {
			return baseUrl + '/' + id;
		},
		destroy: function (id) {
			return baseUrl + '/' + id;
		}
	};
}