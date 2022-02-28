const Vicharan = require("../models/vicharan")
const fs = require('fs')


exports.getVicharans = (req, res) => {
	
	const vicharans = Vicharan.find()
	.then(vicharans => {
		res.render('vicharan', {vicharans:vicharans});
	})

	.catch(err => {console.log(err)});
};

exports.getVicharanByTitle = (req, res) =>{
	let getTitle = req.params.title;
	Vicharan.find({title:getTitle}, (err, vicharan)=>{
		let data = vicharan[0];
		if (err){
			res.redirect("vicharan");
		} else {
			if (data == null){
				res.redirect("vicharan");
			} else{
				res.render('vicharanDetails', {vicharanData:data});
			}
		}
	});
};

exports.createVicharan = (req, res) =>{
	const vicharan = new Vicharan({
		title: req.body.title,
		photo: req.file.filename,
		contact_number: req.body.contact_number,
		contact_name: req.body.contact_name,
		facilities: req.body.facilities,
		distance:req.body.distance
	});
	vicharan.save((err) =>{
		if(err){
			res.json({message:err.message, type: 'danger'});
		} else{
			req.session.message = {
				type : 'success',
				message: 'Vicharan added Successfully !'
			};
			res.redirect('vicharan');
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
