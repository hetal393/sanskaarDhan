const express = require('express');
const vicharanController = require('../controllers/vicharan');
const validator = require('../validators');
const Vicharan = require("../models/vicharan");
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
}).single("photo");

// router.get('/vicharan', (req,res) =>{ res.render('vicharan'); });
router.post('/addVicharan', upload, vicharanController.createVicharan);


router.get("/vicharan", (req, res) =>{
	Vicharan.find().exec((err, vicharans) =>{
		if(err){
			res.json({message:err.message});
		} else{
			res.render('vicharan', {vicharans:vicharans});
		}
	})
});


module.exports = router;