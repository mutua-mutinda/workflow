import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: 'AuthLayout'
        },
       
        component: () => import('./views/Homepage.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'AuthLayout'
        },
       
        component: () => import('./auth/Login.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        meta: {
            layout: 'AuthLayout'
        },
        component: () => import('./auth/Signup.vue'),
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
