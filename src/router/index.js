/* eslint-disable */
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About,
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router