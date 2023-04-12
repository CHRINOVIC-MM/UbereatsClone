import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from "vue-router";
import HomeComponent from './pages/HomeComponent.vue';
import RestaurantComponent from './pages/RestaurantComponent.vue';
const routes = [
    {path:'/', component: HomeComponent },
    {name: 'Restaurant',path:'/restaurant/:name', component: RestaurantComponent }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const vueApp = createApp(App)
vueApp.use(router)
vueApp.mount('#app')
