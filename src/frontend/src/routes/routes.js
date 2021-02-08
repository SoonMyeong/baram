import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Search from '@/components/Search'
import ItemInfo from '@/components/ItemInfo'

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component: Search,
            name:'Search'
        },
        {
            path:'/itemInfo',
            component : ItemInfo,
            name:'itemInfo',
            props: true
        }
    ]
});