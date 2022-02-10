import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CardOverview from '../views/CardOverview.vue';
import DetailsView from '../views/DetailsView.vue';
import NotFound from '../views/NotFound.vue';

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
        path: '/CardOverview',
        name: 'CardOverview',
        component: CardOverview,
        meta: {
            title: 'Sinay - Dataviz',
        }
    },
    {
        path: '/DetailsView/:code',
        name: 'DetailsView',
        props: true,
        component: DetailsView,
        meta: {
            title: 'Sinay - Dataviz',
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found',
        }
    }
]

const router = createRouter({
    history : createWebHashHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router;
