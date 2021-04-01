import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '../views/Auth/Auth';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

import Home from '../views/Home';

Vue.use(VueRouter)

const isAuthenticated = () => true;

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/auth',
        component: Auth,
        children: [
            {
                path: 'login',
                name: 'Login',
                component: Login,
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: 'register',
                name: 'Register',
                component: Register,
                meta: {
                    requiresAuth: false
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated()) next({ name: 'Login' })
    else next()
  })
  
export default router