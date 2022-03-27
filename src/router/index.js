import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/about/index.vue'
import Dashboard from '../pages/dashboard/index.vue'

const routes = [
    { path: '/About', component: About },
    {
        path: '/Dashboard',
        component: Dashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;