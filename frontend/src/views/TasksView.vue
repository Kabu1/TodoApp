<script lang='ts'>
import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                form: {
                    title: '',
                    task: ''
                }, 
                error: null as string | null
                        }
        },
        computed : {
          ...mapGetters('tasks', ['GetTasks'])  
        },
        methods: {
            // ...mapActions('tasks', ['FetchTasks']),
            ...mapActions('tasks', ['FetchTasks', 'MarkTaskProgress', 'DeleteTask', 'CreateTask']),

            createTask(){   
                if(this.form.title && this.form.task) {
                    const payload = {
                        title: this.form.title,
                        task: this.form.task
                    }
                    this.CreateTask(payload)
                    this.clearForm()
                } else {

                    this.error = 'please fill all the required fields'
                }
                            //  
            },
            markProgress(task : any){
                const payload = {
                    id: task.id,
                    data: {
                        status :task.completed
                    }
                }
                this.MarkTaskProgress(payload);
            },
            deleteTask(task: any){
                this.DeleteTask(task);
            },
            clearForm( ){
                this.form.title = '',
                this.form.task = ''
            }
           
        },
        watch : {
            error: {
                handler: function (){
                    let as = this;
                    setTimeout(function(){
                        as.error = null as string | null
                    }, 3000)
                }
            }
        },
        created(){
                this.FetchTasks()
            }
    }

</script>



<template>

<div class="tasks h-full">
    <div class="w-10/12 mx-auto pb-12">
        <div class="flex flex-row flex-wrap  mt-12 items-center justify-between">
            <!-- View Tasks Section -->
            <div class="w-full md:w-1/2">
              <p class="text-gray-700 text-left text-lg pb-2 font-semibold">All Tasks</p>
                
                <div class="h-72 overflow-y-scroll w-full md:w-11/12 " v-if="GetTasks.data.length">
                    <div v-for=" task in GetTasks.data" :key="task.id">
                        <div class="my-2 bg-white shadow rounded-md border-t-4  w-11/12" :class="task.completed ? 'border-green-400':'border-red-400'" >
                            <div class="border-b-2 border-gray-300 p-2 items-center w-full flex justify-between">
                                <p class="ml-2 text-gray-700"> {{ task.title }}</p>
                                <i class="fa fa-trash-o cursor-pointer fill-current hover:text-red-300" :class="task.completed ? 'text-green-400':'text-red-400'" @click="deleteTask(task)">  </i>                                
                            </div>
                            <div class="py-4 px-3 flex justify-start items-center">
                                <input type="checkbox" class="p-2 ml-2" v-model="task.completed" @change="markProgress(task)">
                                <p class="text-gray-700 font-semibold ml-6" :class="task.completed ? 'line-through opacity-20' : ''" > {{ task.task }}</p>
                                <!-- <p class="text-gray-700 font-semibold ml-6" v-if="GetTasks.data.length">{{ GetTasks.data. }}</p>
                                <p class="text-gray-700 font-semibold ml-6" v-else>No tasks available.</p> -->
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Image When Tasks Section is Empty -->
                <div class="mx-auto text-center" v-else>
                    <img src="../assets/img/empty.png" alt="" class="mx-auto mt-4" style="height: 200px; width: 200px;" >

                    <!-- <img src="../assets/emptyview.png" alt="" class="mx-auto mt-4" style="height: 200px; width: 200px;" > -->
                    <p class="text-gray-700 text-semibold text-lg text-center mt-4">No Tasks Available</p>
                </div>
            </div>

            <!-- View Tasks Section -->

            <!-- Create Tasks Section -->
            <div class="w-full md:w-1/2">
                  <form @submit.prevent="createTask" class="bg-white rounded px-8 py-4 shadow hover:shadow-md mb-2">

                    <p class="text-center font-semibold text-gray-700 text-xl"> Create New Task</p>

                    <div class="bg-red-200 shadow rounded w-64 mx-auto p-3 mt-3 text-red-600" v-show="error">
                        <p class="text-center"> {{ error }}</p>
                    </div>
                    <div class="mt-8">
                        <input type="text" v-model="form.title" class="shadow border rounded w-full py-3 px-4 text-gray-700 focus:outline-none"
                        placeholder="Enter Title"
                        >

                    </div>
                    <div>
                        <input type="text" v-model="form.task" class="shadow border rounded w-full py-3 px-4 text-gray-700 focus:outline-none mt-6"
                        placeholder="Enter Task">

                    </div>
                    <div class="mt-6 text-center">
                      <button class="bg-teal-500 block w-full px-8 py-2 text-white focus:outline-none hover:bg-teal-300 ease-in-out duration-500"> Create Task</button>
                    </div>
                </form>


            </div>
            <!-- <button   class="bg-teal-500 block w-full px-8 py-2 text-white focus:outline-none hover:bg-teal-300 ease-in-out duration-500" @click="GetTasks.data">fetch</button> -->
            
            <!-- Create Tasks Section -->
        </div>
    </div>
</div>
</template>

<style scoped></style>
