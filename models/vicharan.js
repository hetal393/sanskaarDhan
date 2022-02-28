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
	contact_number:Array,
	contact_name:{
		type: String	
	},
	facilities:{
		stay:{
			type: String
		},
		food:{
			type: String
		}
	},
	distance: {
		type: String
	},
	created:{
		type: Date,
		required: true,
		default:Date.now,
	}

});

//module.exports = new mongoose.model("Image", imageSchema);
module.exports = mongoose.model("Vicharan", vicharanSchema);