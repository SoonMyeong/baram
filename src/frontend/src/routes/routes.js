import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Search from '@/components/Search'
import ItemInfo from '@/components/ItemInfo'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(() => {
        return window.location.reload();
    })
};

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