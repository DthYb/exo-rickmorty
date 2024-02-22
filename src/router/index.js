import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from '@/pages/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeVue
        }
    ]
})

export default router