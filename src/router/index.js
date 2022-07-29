import Vue from 'vue';
import Router from 'vue-router';
import Layout from "@/components/Layout";

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: '_index',
        redirect:'/homepage',
        component: Layout,
        children:[
            {
                path: '/homepage',
                name: 'HomePage',
                component: () => import("@/views/HomePage"),
            }
        ]
    }
]

export default new Router({
    routes
})
