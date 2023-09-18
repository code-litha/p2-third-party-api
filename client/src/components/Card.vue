<template>
  <div class="col">
    <div class="card shadow-lg" style="border: 0">
      <img :src="movie.imgUrl" class="card-img-top" alt="movie-img" />
      <div
        class="card-body d-flex align-items-center justify-content-center"
        style="min-height: 90px"
      >
        <h5 class="card-title text-center">{{ movie.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
};
</script>
