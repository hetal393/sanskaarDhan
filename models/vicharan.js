const mongoose = require('mongoose')

const vicharanSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	photo:{
		type: String,
		required: true
	},
	created:{
		type: Date,
		required: true,
		default:Date.now,
	}

});

//module.exports = new mongoose.model("Image", imageSchema);
module.exports = mongoose.model("Vicharan", vicharanSchema);