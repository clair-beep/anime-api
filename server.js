const express = require('express')
const app = express();
const logger = require("morgan");
const connectDB = require('./config/data-base')
// const helmet = require('helmet');  erase if content security issue dissapears
const routes = require('./routes/anime'); 
const compression = require('compression');
//Load config
require('dotenv').config({path: './config/.env'})

//use mongo db
connectDB()


//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

// makes uploads folder available
app.use('/uploads', express.static('./uploads'));

//Body parser (how the information is  received/formatted)
app.use(express.json())

//Logging
app.use(logger("dev"));

// app.use(helmet()); erase if content security issue dissapears 
app.use(compression()); //Compress all routes

//routes go here
app.use('/', routes); //to use the routes




const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('App is active on port ' + listener.address().port)
})