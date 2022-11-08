const Anime = require('../models/anime');

module.exports = {

    getTitles: async (req, res) => {
        try {
          const titles = await Anime.find()
          res.render("titles.ejs", { titlesList: titles });
        } catch (err) {
          console.log(err);
        }
      }
  };