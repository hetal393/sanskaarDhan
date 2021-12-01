const express = require('express');
const countryController = require('../controllers/country');
const validator = require('../validators');
const Country = require("../models/country");
const multer = require('multer');
const router = express.Router();

//image upload
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './public/img');
	}, filename: function(req, file, cb){
		cb(null, file.filename+""+Date.now()+""+file.originalname);
	},
});

var upload = multer({
	storage: storage,
}).single("image");

router.post('/addCountry', upload, validator.createCountryValidator, countryController.createCountry);
router.get('/addCountry', (req,res) =>{ res.render('addCountry'); });

router.get("/", (req, res) =>{
	Country.find().exec((err, countries) =>{
		if(err){
			res.json({message:err.message});
		} else{
			res.render('index', {countries:countries});
		}
	})
});

router.get('/country/:id', countryController.getCountryById);

router.get('/delete/:id', countryController.deleteCountryById);



module.exports = router;