const Vicharan = require("../models/vicharan")
const fs = require('fs')


exports.getVicharans = (req, res) => {
	
	const vicharans = Vicharan.find()
	.then(vicharans => {
		//res.json({countries:countries});
		res.render('vicharan', {vicharans:vicharans});
	})

	.catch(err => {console.log(err)});
};

// exports.getCountryById = (req, res) =>{
// 	let id = req.params.id;
// 	Country.findById(id, (err, country)=>{
// 		if (err){
// 			res.redirect("/");
// 		} else {
// 			if (country == null){
// 				res.redirect("/");
// 			} else{
// 				res.render('viewCountryDetails', {
// 					country: country
// 				});
// 			}
// 		}
// 	});
// };

exports.createVicharan = (req, res) =>{
	const vicharan = new Vicharan({
		title: req.body.title,
		photo: req.file.filename
	});
	vicharan.save((err) =>{
		if(err){
			res.json({message:err.message, type: 'danger'});
		} else{
			req.session.message = {
				type : 'success',
				message: 'Vicharan added Successfully !'
			};
			res.redirect('/vicharan');
		}
	});
};


// exports.deleteCountryById = (req, res) =>{
// 	let id = req.params.id;
// 	Country.findByIdAndRemove(id, (err, result)=>{
// 		if(result.flag != ""){
// 			try{
// 				fs.unlinkSync("./public/img/"+ result.flag);
// 			} catch (err){
// 				console.log("Error Reported!");
// 			}
// 		}
// 		if(err){
// 			res.json({message : err.message});
// 		} else{
// 			req.session.message ={
// 				type : 'info',
// 				message: "Country Deleted Successfully",
// 			};
// 			res.redirect('/');
// 		}
// 	});
// };
