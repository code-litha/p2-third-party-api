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
    fetchPopularMovies() {
      // fetch popular movies
    },
    fetchFavoriteMovies() {
      // fetch favorite movies
    },
    addFavoriteMovie() {
      // add favorite movie
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
  />
  <FavoriteView
    v-if="currentPage === 'favorite-movies'"
    :favoriteMovies="favoriteMovies"
    @fetchFavoriteMovies="fetchFavoriteMovies"
  />
</template>
