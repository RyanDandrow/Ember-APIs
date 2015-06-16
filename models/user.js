var mongoose = require('mongoose'),
	moment = require('moment'),
	bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required: true}
});

UserSchema.path('password').set(function (value) {
	var salt = bcrypt.genSaltSync();

	var encrypted = bcrypt.hashSync(value, salt);

	return encrypted;
});

module.exports = mongoose.model('User', UserSchema);