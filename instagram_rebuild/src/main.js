import { createApp } from 'vue';
import App from './App.vue';

import store from './store.js';
const app = createApp(App);
app.use(store).mount('#app');

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCaretDown);
app.component('font-awesome-icon', FontAwesomeIcon);

// Router
// import router from './router';
// app.use(router).mount('#app');
