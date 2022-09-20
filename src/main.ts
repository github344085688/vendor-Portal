import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/unis.css';
import plugin from './utils/plugin';
const app = createApp(App);
// installElementPlus(app);
app.use(plugin);
app.use(router);
app.use(store);

app.mount("#app");