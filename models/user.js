var mongoose = require('mongoose'),
	moment = require('moment'),
	bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required: true}
});

UserSchema.path('password').set(function (value) {
	if (!value) {
		return this.password;
	}

	var salt = bcrypt.genSaltSync();

	return bcrypt.hashSync(value, salt);
});

UserSchema.methods.checkPassword = function (value, success, failure) {
	bcrypt.compare(value, this.password, function (err, result) {
		if (result) {
			success();
		} else {
			failure(err);
		}
	});
}

module.exports = mongoose.model('User', UserSchema);
