import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '../views/Auth/Auth';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

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
        children: [
            {
                path: 'login',
                name: 'Login',
                component: Login
            },
            {
                path: 'register',
                name: 'Register',
                component: Register
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
  
export default router