<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/Navbar.vue"
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <div class="container body-container">
    <RouterView />
  </div>
</template>

<style scoped>
.body-container {
  margin-top: 20px;
  background-color: white;
}
</style>
