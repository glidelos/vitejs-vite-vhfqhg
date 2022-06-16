/* import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app') */

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import VueFeather from 'vue-feather';

const app = createApp(App).component(VueFeather.name, VueFeather);

app.mount('#app');
