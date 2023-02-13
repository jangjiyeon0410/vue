import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import createdRouter from './router'

createApp(App).use(createdRouter).mount('#app');
