import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
// import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Sinay - Dataviz',
        }
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test,
        meta: {
            title: 'Sinay - Dataviz',
        }
    },
    // {
    //     name: 'NotFound',
    //     path: '/:pathMatch(.*)',
    //     component: NotFound,
    //     meta: {
    //         title: '404 Not Found',
    //     }
    // }
]

const router = createRouter({
    history : createWebHashHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {  // (to, from)
    // console.log(from, to);
    document.title = to.meta.title;
})

export default router;
