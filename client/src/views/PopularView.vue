<template>
  <div class="container">
    <h1 class="text-center py-5">Popular Movie List</h1>
    <p class="text-center fs-4 fw-light" v-if="!popularMovies.length">
      Data Not Found
    </p>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <Card v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  props: ["popularMovies"],
  emits: ["fetchPopularMovies"],
};
</script>
