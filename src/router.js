import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/profile.vue')
    },
    {
      path: '/accepted',
      name: 'accepted',
      component: () => import(/* webpackChunkName: "about" */ './views/accepted.vue')
    },
    {
      path: '/submited',
      name: 'submited',
      component: () => import(/* webpackChunkName: "about" */ './views/submited.vue')
    },
    {
      path: '/accepted-service',
      name: 'accepted-service',
      component: () => import(/* webpackChunkName: "about" */ './views/accepted-service.vue')
    },
    {
      path: '/declined',
      name: 'declined',
      component: () => import(/* webpackChunkName: "about" */ './views/declined.vue')
    },
    {
      path: '/finished',
      name: 'finished',
      component: () => import(/* webpackChunkName: "about" */ './views/finished.vue')
    }
  ]
})
