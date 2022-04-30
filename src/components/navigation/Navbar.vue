<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <!-- <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> -->

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/"> Home </router-link>

          <router-link class="navbar-item" to="/"> Experience </router-link>
        </div>
        <div class="logo">
          <router-link class="navbar-item" to="/">
            Private Holiday
          </router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/history"> History </router-link>

          <router-link class="navbar-item" to="/"> Contact </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
