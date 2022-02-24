const express = require('express');
const countryController = require('../controllers/country');
const queryController = require('../controllers/query');
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

router.post('/contact', validator.createQueryValidator, queryController.createQuery);


router.get('/addCountry', (req,res) =>{ res.render('addCountry'); });

router.get('/about-us', (req,res) =>{ res.render('about-us'); });
router.get('/activities', (req,res) =>{ res.render('activities'); });
router.get('/contact', (req,res) =>{ res.render('contact'); });
router.get('/guru-details', (req,res) =>{ res.render('guru-details'); });
router.get('/prabhushriji', (req,res) =>{ res.render('prabhushriji'); });
router.get('/brahmachariji', (req,res) =>{ res.render('brahmachariji'); });

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