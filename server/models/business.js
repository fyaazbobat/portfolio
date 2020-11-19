let mongoose = require('mongoose');

//create a model class
let businessModel = mongoose.Schema({
	name: String, 
	phoneNumber: Number,
	email: String
},
{
	collection: "contact"
});

module.exports = mongoose.model('Business', businessModel);