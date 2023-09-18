<template>
  <div class="container">
    <h1 class="text-center py-5">Movie List</h1>
    <p class="text-center fs-4 fw-light" v-if="!movies.length">
      Data Not Found
    </p>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  props: ["movies"],
  emits: ["fetchMovies"],
  created() {
    this.$emit("fetchMovies");
  },
};
</script>
