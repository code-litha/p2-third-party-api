const router = require("express").Router();
const Controller = require("../controllers");

router.get("/movies", Controller.findMovies);
router.get("/movies/popular", Controller.findMoviesPopular);
router.get("/movies/favorites", Controller.findMoviesFavorite);
router.post("/movies/favorites/:id", Controller.addMovieFavorite);

module.exports = router;
