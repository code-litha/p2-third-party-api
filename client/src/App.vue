<script>
import Navbar from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue";
import PopularView from "./views/PopularView.vue";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default {
  components: {
    Navbar,
    HomeView,
    PopularView,
  },
  data() {
    return {
      movies: [],
      popularMovies: [],
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
</template>
