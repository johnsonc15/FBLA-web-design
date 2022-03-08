import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueStripeMenu from "vue-stripe-menu";
import "vue-stripe-menu/dist/vue-stripe-menu.css";

createApp(App).use(router).use(VueStripeMenu).mount('#app')
