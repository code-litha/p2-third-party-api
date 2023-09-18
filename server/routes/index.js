const router = require("express").Router();
const Controller = require("../controllers");

router.get("/movies", Controller.findMovies);
router.get("/movies/popular", Controller.findMoviesPopular);

module.exports = router;
