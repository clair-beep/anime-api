const express = require('express'); //import express
const router  = express.Router(); 
const animeController = require('../controllers/anime'); 
<<<<<<< HEAD
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);
=======

>>>>>>> 6451f0b39d6d9cf66c4ba75f0659836f4208d27e
router.get('/anime', animeController.getAllAnime);
router.post('/anime', animeController.uploadImg, animeController.newAnime); 
router.delete('/anime', animeController.deleteAllAnime);

router.get('/anime/:title', animeController.getOneAnime);
router.post('/anime/:title', animeController.newComment);
router.delete('/anime/:title', animeController.deleteOneAnime);

module.exports = router; // export to use in server.js
