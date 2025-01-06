import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Content from './pages/Content.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'Content',
            path: '/Content',
            component: Content
        }
    ],
});

export { router };