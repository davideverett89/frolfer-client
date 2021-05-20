import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login';
import Register from '../views/Register';
import Logout from '../views/Logout';
import Home from '../views/Home';
import GameDashboard from '../views/GameDashboard';

import { AuthenticationService } from '../common/api.service';

Vue.use(VueRouter)

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
        path: '/dashboard',
        name: 'GameDashboard',
        component: GameDashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
        meta: {
            requiresAuth: false
        }
    }
]

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !AuthenticationService.isAuthenticated()) next({ name: 'Login' })
    else next()
  })
  
export default router