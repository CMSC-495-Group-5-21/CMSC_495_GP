import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "reflect-metadata"

/* eslint-disable no-new */
createApp(App).use(router).mount("#app");
