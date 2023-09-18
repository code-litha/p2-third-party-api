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
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
