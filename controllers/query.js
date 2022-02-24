const Query = require("../models/query")
const fs = require('fs')


exports.createQuery = (req, res) =>{
	const query = new Query({
		name: req.body.name,
		email: req.body.email,
		mobile: req.body.number,
		message: req.body.message
	});
	query.save((err) =>{
		if(err){
			res.json({message:err.message, type: 'danger'});
		} else{
			req.session.message = {
				type : 'success',
				message: 'Query Submitted Successfully !'
			};
			res.redirect('/');
		}
	});
};