import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MemberListView from '../views/MemberListView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/members',
        name: 'Members',
        component: MemberListView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;