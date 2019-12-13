import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/page1'},
    {path: '/page1', name: 'page1', meta: {isCache: true}, component: () => import('../page/page1.vue')},
    {path: '/page2', name: 'page2', meta: {isCache: true}, component: () => import('../page/page2.vue')},
    {path: '/page3/:id', name: 'page3', meta: {isCache: true}, component: () => import('../page/page3.vue')},
    {path: '/page4', name: 'page4', meta: {isCache: true}, component: () => import('../page/page4.vue')}
  ]
})
