const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	mobile:{
		type: Number,
		minlength:10,
		maxlength:10,
		required: true
	},
	message:{
		type: String,
		required: true
	},
	created:{
		type: Date,
		required: true,
		default:Date.now,
	}

});


module.exports = mongoose.model("Query", querySchema);