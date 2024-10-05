import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue')
  },

  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "posts" */ '../views/AboutView.vue')
  },

  {
    path: '/contact',
    name: 'contact',

    component: () => import(/* webpackChunkName: "posts" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router