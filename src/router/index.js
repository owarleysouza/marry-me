import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import ConfirmScreen from '../views/ConfirmScreen.vue';


Vue.use(Router)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/confirm', name: 'confirm', component: ConfirmScreen }
]

const router = new Router({ routes })

export default router