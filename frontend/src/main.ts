// // import './assets/main.css'
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import './assets/css/tailwind.css'
// // import store from './store/modules/tasks'

// const app = createApp(App)

// app.use(router)
// // app.use(store); // Use the Vuex store


// app.mount('#app')


// import { createApp } from 'vue';
// import store from './path/to/store'; // Import your Vuex store

// const app = createApp(App);
// app.use(store); // Use the Vuex store
// app.mount('#app');


import { createApp } from 'vue';
import App from './App.vue';
import  VuePageTransition  from 'vue-page-transition';

import router from './router';
import store from './store';
import './assets/css/tailwind.css'

// import './assets/css/main.scss';

const app = createApp(App)
// app.config.productionTip = false
app.use(VuePageTransition)
// app.use(VuePageTransition)
app.use(router)
app.use(store)

app.mount('#app')
