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
		cb(null, file.originalname);
	},
});

var upload = multer({
	storage: storage,
}).single("photo");


router.post('/addVicharan', upload, vicharanController.createVicharan);


router.get("/vicharan", vicharanController.getVicharans);
router.get('/vicharanDetails/:title', vicharanController.getVicharanByTitle);


module.exports = router;