import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/unisUi.css';
import '@/assets/css/layouts.css';
import plugin from '@/utils/plugin';
import {loding,butloding} from '@/directives/loding';
const app = createApp(App);
app.use(router);
app.use(store);
app.directive('loding', loding);
app.directive('butloding', butloding);
app.use(plugin);
app.mount("#app");
