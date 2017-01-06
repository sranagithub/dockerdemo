var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
	name: String,
    phoneno: String,
    role: String		
});

module.exports = mongoose.model('client', clientSchema);;