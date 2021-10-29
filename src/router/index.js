import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: '404',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // },
  {
    path:"/NewsletterSign-up",
    name:"Booking",
    component: () => import('../views/Booking.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/'
  },
  // {
  // path: '/about',
  // name: 'About',
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
