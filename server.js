const express = require('express')

const app = express();

const connectDB = require('./config/data-base')

const helmet = require('helmet');

const routes = require('./routes/anime'); 
const compression = require('compression');
//Load config
require('dotenv').config({path: './config/.env'})

//use mongo db
connectDB()




// makes uploads folder available
app.use('/uploads', express.static('./uploads'));

//Body parser (how the information is  received/formatted)
app.use(express.json())

app.use(helmet());
app.use(compression()); //Compress all routes

//routes go here
app.use('/', routes); //to use the routes




const listener = app.listen(process.env.PORT || 4000, () => {
    console.log('App is active on port ' + listener.address().port)
})