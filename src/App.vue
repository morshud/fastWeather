<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navigation/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
