const Anime = require('../models/anime');

module.exports = {

    getSearch: async (req, res) => {
        try {
          const genres = await Anime.find()
          res.render("search.ejs", { genreList: genres });
        } catch (err) {
          console.log(err);
        }

      },

      // getGenres: async (req, res) => {
      //   try {
           
      //       res.render("genres.ejs", { genre: genre });
      //       } catch (err) {
      //       console.log(err);
      //       }
      // } 

      //GET '/anime/:name'
      getGenres: async (req, res) => {
        try {
          //console.log(req.params.type)
          const genre = await Anime.find({ genre: req.params.type })
          // console.log(genre)
          // const genre = await  Anime.find(req.params.genre);
          res.render("genres.ejs", { genre: genre });
        } catch (err) {
          console.log(err);
        }

      }
}
