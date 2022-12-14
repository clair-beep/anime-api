const express = require('express'); //import express
const router  = express.Router(); 
const animeController = require('../controllers/anime'); 
const homeController = require("../controllers/home");
const browseTitlesController = require('../controllers/titles.js'); 
const searchToolController = require('../controllers/search.js'); 



router.get("/", homeController.getIndex);
router.get('/anime', animeController.getAllAnime);
router.get("/titles", browseTitlesController.getTitles);
router.get("/search", searchToolController.getSearch);


router.post('/anime', animeController.uploadImg, animeController.newAnime); 
router.delete('/anime', animeController.deleteAllAnime);

router.get('/anime/:title', animeController.getOneAnime);
router.post('/anime/:title', animeController.newComment);
router.delete('/anime/:title', animeController.deleteOneAnime);

router.get("/genres/:type", searchToolController.getGenres);


module.exports = router; // export to use in server.js
