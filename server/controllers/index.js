const { default: axios } = require("axios");
const dataMovies = require("../data/movies.json");
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ACCOUNT_ID = process.env.TMDB_ACCOUNT_ID;

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
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_API_KEY}`,
          },
        }
      );

      const result = data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.original_title,
          imgUrl: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        };
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async findMoviesFavorite(req, res) {
    try {
      // GET API Movies Favorite from TMDB
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/favorite/movies`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_API_KEY}`,
          },
        }
      );

      const result = data.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.original_title,
          imgUrl: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        };
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async addMovieFavorite(req, res) {
    try {
      // POST API Movies Favorite from TMDB
      await axios({
        url: `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/favorite`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${TMDB_API_KEY}`,
        },
        data: {
          media_type: "movie",
          media_id: req.params.id, // id movie
          favorite: true,
        },
      });
      res.status(200).json({ message: "Successfully Add to Favorites" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
