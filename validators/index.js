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

exports.createQueryValidator =(req, res, next) =>{

	//name
	req.check('name', "name should not be empty").notEmpty();
	req.check('name', "name should be more than 2 chracters").isLength({
		min: 3, max: 50
	});

	//email
	req.check('email', "email should not be empty").notEmpty();
	req.check('email', "email should be in proper format").isEmail();

	//mobile
	req.check('number', "number should be an integer").isInt();
	req.check('number', "number should not be empty").isLength({
		min: 10, max: 10
	});

	//message
	req.check('message', "message should not be empty").notEmpty();
	req.check('message', "message should be more than 2 chracters").isLength({
		min: 10, max: 500
	});

	const errors = req.validationErrors();
	//if error, show the 1st one
	if(errors){
		const firstError = errors.map((error) => error.msg)[1]
		return res.status(400).json({error: firstError})
	}
	//proceed to next middleware
	next();
};