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

import Vue from 'vue'
import Vuex from 'vuex'
import {tasks} from  './modules/tasks'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks
  },
    state: {       
     //
  },
  mutations: {
    //
    },
  actions: {
    //
  },
})