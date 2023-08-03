// import { createStore } from 'vuex'
// import {tasks} from './modules/tasks'
// import {createStore} from "vuex";


// const store = createStore({
//   state: {       
//      //
//   },
//   mutations: {
//     //
//     },
//   actions: {
//     //
//   },
//   modules : {
//     tasks
//     //
//   }

// });

// export default store;

// import Vue from 'vue'
// import Vuex from 'vuex'
// // import {tasks} from  './modules/tasks'
// import modules from './modules'


// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules,

//     state: {       
//      //
//   },
//   mutations: {
//     //
//     },
//   actions: {
//     //
//   },
// })

import {createStore}  from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import tasks from './modules/tasks'



const strict = false;

const store = createStore({

    strict,

    plugins: [
        // createPersistedState({
        //     paths: [ 'auth', 'layout' ]
        // }),
    ],

    modules: {
        tasks,       
    }
});

export default store;

