import {createRouter, createWebHistory} from 'vue-router';
import CHome from '../CHome/CHome.vue';
import Contact from '../Contact/Contact.vue';
import News from '../News/News.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CHome
        },
        {
            path: '/message',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/news',
            name: 'News',
            component: News
        }
    ]
})

export default router