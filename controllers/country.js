const Country = require("../models/country")
const fs = require('fs')


exports.getCountries = (req, res) => {
	
	res.send("All countries");
	// const countries = Country.find()
	// .then(countries => {
	// 	//res.json({countries:countries});
	// 	res.render('index', {countries:countries});
	// })

	// .catch(err => {console.log(err)});
};

exports.getCountryById = (req, res) =>{
	let id = req.params.id;
	Country.findById(id, (err, country)=>{
		if (err){
			res.redirect("/");
		} else {
			if (country == null){
				res.redirect("/");
			} else{
				res.render('viewCountryDetails', {
					country: country
				});
			}
		}
	});
};

exports.createCountry = (req, res) =>{
	const country = new Country({
		name: req.body.name,
		continent: req.body.continent,
		rank: req.body.rank,
		flag: req.file.filename
	});
	country.save((err) =>{
		if(err){
			res.json({message:err.message, type: 'danger'});
		} else{
			req.session.message = {
				type : 'success',
				message: 'Country added Successfully !'
			};
			res.redirect('/');
		}
	});
};


exports.deleteCountryById = (req, res) =>{
	let id = req.params.id;
	Country.findByIdAndRemove(id, (err, result)=>{
		if(result.flag != ""){
			try{
				fs.unlinkSync("./public/img/"+ result.flag);
			} catch (err){
				console.log("Error Reported!");
			}
		}
		if(err){
			res.json({message : err.message});
		} else{
			req.session.message ={
				type : 'info',
				message: "Country Deleted Successfully",
			};
			res.redirect('/');
		}
	});
};
