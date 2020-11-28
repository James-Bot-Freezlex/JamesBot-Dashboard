import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/support',
  beforeEnter(){
    window.location = "https://discord.com/invite/MKa35PQ"
  }},
  { path: '/invite',
    beforeEnter(){
      window.location = "https://discord.com/oauth2/authorize?client_id=425377070525317120&permissions=306048080&scope=bot";
    }},
  { path: '/:pathMatch(.*)*', component: PageNotFound }
  /*,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },
  {
    path: '/news',
    name: 'NotFound',
  component: ()=> import('../views/PageNotFound.vue') }*/

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
