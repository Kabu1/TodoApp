<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import  navbarComponent  from './components/navbarComponent.vue'
// export default { 
//   components: { NavbarComponent }
// }
</script>

<template>
  
  <header>
    <navbar-component/>
  </header>
  <div class="bg-gray-200 h-full md:h-screen">
    <RouterView />
  </div>
</template>
