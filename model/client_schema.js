var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
	name: {type: String},
    phoneno: {type: String},
    role: {type: String}		
});

module.exports = mongoose.model('cSchema', clientSchema);;