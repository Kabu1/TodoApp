<script setup lang="ts">

</script>

<template>
  <div class="bg-white rounded-md w-8/12 shadow mx-auto px-8 py-6 hover:shadow-md transition ease-in-out duration-500">
    <p class="text-gray-700 font-semibold text-center text-2xl">Welcome To Tasks Manager</p>
    <p class="text-gray-700 my-3 text-center">Create simple todo tasks for all your daily activities here!</p>
  </div>
  <div class="flex justify-center mt-12">
    <router-link class="px-7 py-3 border-none rounded-md transition ease-in-out duration-500 text-gray-200 bg-gray-900  hover:bg-teal-500 mx-3" :to="{name:'Tasks'}">
      <button> View Your Tasks</button>

    </router-link >
    <router-link class="px-7 py-3 border-2 border-gray-400 rounded-md transition ease-in-out duration-500  text-black  hover:bg-teal-500 mx-3" :to="{name:'Tasks'}">
      <button> Create Tasks</button>
    </router-link>
  
</div>
</template>



<style scoped>

</style>