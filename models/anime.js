
const mongoose = require('mongoose')

const AnimeSchema = new mongoose.Schema ({
    title: {
        type:String, 
        required:true
        },
    genre: {
        type:String, 
        required:true
    },
    synopsis: {
        type:String, 
        required:true
    },
    aired: String,
    status: String,
    source: String,
    duration: String,
    image: String,
    comments: [{ 
        text: String,
        date: {
            type:String,
            default: new Date()
        } 
    }]

})

const Anime = mongoose.model('Anime', AnimeSchema); //convert to model named Anime
module.exports = Anime;