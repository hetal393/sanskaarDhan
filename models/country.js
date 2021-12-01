const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	continent:{
		type: String,
		required: true
	},
	rank:{
		type: Number,
		minlength:1,
		maxlength:50
	},
	flag:{
		type: String,
		required: true
	},
	created:{
		type: Date,
		required: true,
		default:Date.now,
	}

});

// module.exports = new mongoose.model("Image", imageSchema);
module.exports = mongoose.model("Country", countrySchema);