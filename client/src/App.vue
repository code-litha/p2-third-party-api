<script>
import Navbar from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue";
import PopularView from "./views/PopularView.vue";
import FavoriteView from "./views/FavoriteView.vue";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default {
  components: {
    Navbar,
    HomeView,
    PopularView,
    FavoriteView,
  },
  data() {
    return {
      movies: [],
      popularMovies: [],
      favoriteMovies: [],
      currentPage: "home",
    };
  },
  methods: {
    onChangePage(page) {
      this.currentPage = page;
    },
    async fetchMovies() {
      try {
        const { data } = await axios({
          url: BASE_URL + "/movies",
        });
        this.movies = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPopularMovies() {
      // fetch popular movies
      try {
        const { data } = await axios({
          url: BASE_URL + "/movies/popular",
          method: "GET",
        });
        this.popularMovies = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchFavoriteMovies() {
      // fetch favorite movies
      try {
        const { data } = await axios({
          url: BASE_URL + "/movies/favorites",
          method: "GET",
        });
        this.favoriteMovies = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addFavoriteMovie(id) {
      // add favorite movie to server
      try {
        await axios({
          method: "POST",
          url: BASE_URL + "/movies/favorites/" + id,
        });
        this.currentPage = "favorite-movies";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <Navbar :currentPage="currentPage" @onChangePage="onChangePage" />
  <HomeView
    v-if="currentPage === 'home'"
    :movies="movies"
    @fetchMovies="fetchMovies"
  />
  <PopularView
    v-if="currentPage === 'popular-movies'"
    :popularMovies="popularMovies"
    @fetchPopularMovies="fetchPopularMovies"
    @addMovieFav="addFavoriteMovie"
  />
  <FavoriteView
    v-if="currentPage === 'favorite-movies'"
    :favoriteMovies="favoriteMovies"
    @fetchFavoriteMovies="fetchFavoriteMovies"
  />
</template>
