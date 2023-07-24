
<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
console.log('are we here', open)
</script>

<template>
    <div class="fixed top-0 animated z-40 w-full">
        <div class="bg-gray-100 antialiased">
            <div class="w-full flex justify-between items-center px-8 md:px-12 py-3 shadow-sm hover:shadow-md transition ease-in-out duration-500">
                <div>
                    <p> <span>Simple</span> Tasks</p>
                </div>
                <div class="block md:hidden">
                    <button 
                    class="rounded-lg focus:outline-none"
                    @click="open = !open"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path v-show="!open" stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        <path v-show="open" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                       

                    </button>
                </div>
                <div class="hidden md:block">
                        <router-link :to="{name: 'Home'}">
                            <button class="px-8 py-3 rounded-md bg-gray-200 mx-2 hover:text-teal-400 transition ease-in-out duration-500 hover:shadow">
                                Home
                            </button>
                        </router-link>
                        <router-link :to="{name: 'Tasks'}">
                            <button class="px-8 py-3 rounded-md bg-gray-200 mx-2 hover:text-teal-400 transition ease-in-out duration-500 hover:shadow">
                                Tasks
                            </button>
                        </router-link>
                </div>
            </div>
            <div :class="open ? 'block' : 'hidden'">
                <router-link :to="{name: 'Home'}">
                    <button class="w-full block text-left hover:bg-gray-200 transition ease-in-out duration-500 px-10 py-3">
                        Home

                    </button>
                </router-link>

                   
                <router-link :to="{name: 'Tasks'}"> 
                    <button class="w-full block text-left hover:bg-gray-200 transition ease-in-out duration-500 px-10 py-3">
                        Tasks
                    </button>
                </router-link>


            </div>
        </div>
    </div>
            
</template>


<style scoped>


</style>

