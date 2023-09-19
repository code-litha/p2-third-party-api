const dataMovies = require("../data/movies.json");
class Controller {
  static async findMovies(req, res) {
    try {
      res.status(200).json(dataMovies);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findMoviesPopular(req, res) {
    try {
      // GET API Movies Popular from TMDB
      res.status(200).json({ message: "Get Popular Movies" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findMoviesFavorite(req, res) {
    try {
      // GET API Movies Favorite from TMDB
      res.status(200).json({ message: "Get Favorite Movies" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async addMovieFavorite(req, res) {
    try {
      // POST API Movies Favorite from TMDB
      res.status(200).json({ message: "Successfully Add to Favorites" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
