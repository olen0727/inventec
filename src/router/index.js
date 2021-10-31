import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'

const routes = [
  {
    path: '/',
    name:"Booking",
    component: Booking,
    children: [
      // this will render the UserList for these 3 URLs
      // - /users
      // - /users/list
      // - /people
      { path: '/NewsletterSign-up', component: Booking, alias: ['/NewsletterSign-up'] },
    ],
  },
  // {
  //   path:'/booking',
  //   name:"Booking",
  //   component: () => import('../views/Booking.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/'
  // },
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
