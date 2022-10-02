const express = require('express')
<<<<<<< HEAD
const app = express();
const logger = require("morgan");
const connectDB = require('./config/data-base')
// const helmet = require('helmet');  erase if content security issue dissapears
=======

const app = express();

const connectDB = require('./config/data-base')


const helmet = require('helmet');

>>>>>>> 6451f0b39d6d9cf66c4ba75f0659836f4208d27e
const routes = require('./routes/anime'); 
const compression = require('compression');
//Load config
require('dotenv').config({path: './config/.env'})

//use mongo db
connectDB()


<<<<<<< HEAD
//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));
=======

>>>>>>> 6451f0b39d6d9cf66c4ba75f0659836f4208d27e

// makes uploads folder available
app.use('/uploads', express.static('./uploads'));

//Body parser (how the information is  received/formatted)
app.use(express.json())

<<<<<<< HEAD
//Logging
app.use(logger("dev"));

// app.use(helmet()); erase if content security issue dissapears 
=======
app.use(helmet());
>>>>>>> 6451f0b39d6d9cf66c4ba75f0659836f4208d27e
app.use(compression()); //Compress all routes

//routes go here
app.use('/', routes); //to use the routes
<<<<<<< HEAD

=======
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});
>>>>>>> 6451f0b39d6d9cf66c4ba75f0659836f4208d27e



const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('App is active on port ' + listener.address().port)
})