import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/', name: 'home',
        component:()=>import('../views/Home.vue')
    },
    {
        path: '/task-1', name: 'taskOne',
        component:()=>import('../views/TaskOne.vue')
    },
    {
        path: '/task-2', name: 'taskTwo',
        component:()=>import('../views/TaskTwo.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
