
<script setup lang="ts">
import { RouterView } from 'vue-router';
// import NavbarComponent from './components/NavbarComponent.vue';
// 
// Export the components using the `components` option
// const components = { NavbarComponent };
</script>

<template>
  
  <header>
    <navbar-component/>
  </header>
  <div class="bg-gray-200 h-full md:h-screen pt-20">
    <VuePageTransition name="fade-in-right">
                <router-view />
            </VuePageTransition>
  </div>
</template>
