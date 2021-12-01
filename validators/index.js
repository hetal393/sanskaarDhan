exports.createCountryValidator = (req, res, next) =>{
	
	//name
	req.check('name', "name should not be empty").notEmpty();
	req.check('name', "name should be more than 2 chracters").isLength({
		min: 3, max: 20
	});

	//continent
	req.check('continent', "continent should not be empty").notEmpty();

	//rank
	
	req.check('rank', "should be an integer").isInt();
	req.check('rank', "rank should not be empty").isLength({
		min:1
	});

	//error handling
	const errors = req.validationErrors();
	//if error, show the 1st one
	if(errors){
		const firstError = errors.map((error) => error.msg)[0]
		return res.status(400).json({error: firstError})
	}
	//proceed to next middleware
	next();
};