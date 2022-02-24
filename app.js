const express = require('express');
const app = express();
//const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const ejs = require('ejs');
const dotenv = require('dotenv');
const port = process.env.PORT || 8080;

dotenv.config();

//db connection
mongoose.connect(process.env.MONGO_URI,
	{ useNewUrlParser : true, useUnifiedTopology : true},
	).then(() => console.log("DB Connected !"));

mongoose.connection.on('error', err =>{
	console.log("DB connection Error: ${err.message}");
});


//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
        secret: 'my secret key',
        saveUninitialized: true,
        resave: false
    })
);

app.use((req, res, next) =>{
        res.locals.message = req.session.message;
        delete req.session.message;
        next();
    })
app.use(expressValidator());

//route prefix
const countryRoutes = require('./routes/countries');
const vicharanRoutes = require('./routes/vicharans');
app.use("", countryRoutes);
app.use("", vicharanRoutes);


// // Set EJS as templating engine 
app.set("view engine", "ejs");
app.use(express.static('./public/css'));
app.use(express.static('./public/img'));
app.use(express.static('./public/js'));
app.use(express.static('./public/lib'));
app.use(express.static('./public/scss'));





// define the route for "/"
 // app.get("/", function (request, response){
 //     //show this file when the "/" is requested
 //     response.render('index');
 // });

//listen to port 8080
var listener = app.listen(port, ()=> console.info('Listening to port: '+listener.address().port))