import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '../views/Auth';
import Home from '../views/Home';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
    }
]

const router = new VueRouter({
    routes
})
  
export default router