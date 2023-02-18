import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';
import store from './store.js';

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(store).mount('#app');

// Router
// import router from './router';
// app.use(router).mount('#app');
