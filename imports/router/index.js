import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Example = () => import( "../ui/Example");

const routes = [
    {path: '/', component: Example},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});

