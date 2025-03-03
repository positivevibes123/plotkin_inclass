<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/Navbar.vue';
import NotificationList from './components/NotificationList.vue';
import SlidingDrawer from './components/SlidingDrawer.vue';
import ShoppingCart from './components/ShoppingCart.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <div class="container body-container">
    <NotificationList/>
    <RouterView />
  </div>

  <SlidingDrawer>
    <ShoppingCart/>
  </SlidingDrawer>
</template>

<style scoped>
.body-container {
  margin-top: 20px;
  background-color: white;
}
</style>
