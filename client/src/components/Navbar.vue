<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" @click.prevent="$emit('onChangePage', 'home')"
        >MovieApp</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentPage === 'home' }"
              @click.prevent="$emit('onChangePage', 'home')"
              >Movies</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentPage === 'popular-movies' }"
              @click.prevent="$emit('onChangePage', 'popular-movies')"
              >Popular Movies</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: currentPage === 'favorite-movies' }"
              @click.prevent="$emit('onChangePage', 'favorite-movies')"
              >Favorite Movies</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["currentPage"],
  emits: ["onChangePage"],
};
</script>

<style>
.nav-link,
.navbar-brand {
  cursor: pointer;
}

.nav-link.active {
  color: brown !important;
  font-weight: 600;
}
</style>
