import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "@nordhealth/css";
import "@nordhealth/components";

const app = createApp(App);
app.use(router);
app.mount('#app');
