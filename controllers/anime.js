const Anime = require('../models/anime');
const multer = require('multer');

//upload Image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({storage: storage}).single('image');

//GET '/anime'
const getAllAnime = (req, res) => {
    Anime.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/anime'

const newAnime = (req, res) => {
    //check if the anime title already exists in db
    Anime.findOne({ title: req.body.title }, (err, data) => {

        //if anime title not in db, add it
        if (!data) {
            //create a new anime object using the anime model and req.body
            const newAnime = new Anime({
                title:req.body.title,
                genre: req.body.genre, // placeholder for now
                synopsis: req.body.synopsis,
                aired: req.body.aired,
                status: req.body.status,
                source: req.body.source,
                duration: req.body.duration,
                image: req.file.path,
            })

            // save this object to database
            newAnime.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if there's an error or the anime title is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Anime title already exists"});
        }
    })    
};



//DELETE '/anime'
const deleteAllAnime = (req, res, next) => {
    Anime.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});
        }
        return res.json({message: "Complete delete successful"});
    })
};

//GET '/anime/:name'
const getOneAnime = (req, res, next) => {
    let title = req.params.title; // get the anime title 

    // find the specific anime title with that name
    Anime.findOne({title:title}, (err, data) => {
        if(err || !data) {
            return res.json({message: "Anime doesn't exist."});
        }
        else return  res.json(data);

    })
};


//POST '/anime/:name'
const newComment = (req, res) => {
    let title = req.params.title; //get the anime title to add the comment in
    let newComment = req.body.comment; //get the comment
    //create a comment object to push
    const comment = {
        text: newComment,
        date: new Date()
    }
    //find the anime object
    Anime.findOne({title:title}, (err, data) => {
        if(err || !data || !newComment) {
            return res.json({message: "Anime doesn't exist."});
        }
        else {
            //add comment to comments array of the tea object
            data.comments.push(comment);
            //save changes to db
            data.save(err => {
                if (err) { 
                return res.json({message: "Comment failed to add.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };

//DELETE '/anime/:name'
const deleteOneAnime = (req, res) => {
    let title = req.params.title; // get the name of anime to delete

    Anime.deleteOne({title:title}, (err, data) => {
    //if there's nothing to delete return a message
    if( data.deletedCount == 0) return res.json({message: "Anime doesn't exist."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "Anime deleted."});
    });
};
//export controller functions
module.exports = {
    getAllAnime, 
    uploadImg,
    newAnime,
    deleteAllAnime,
    getOneAnime,
    newComment,
    deleteOneAnime
};

