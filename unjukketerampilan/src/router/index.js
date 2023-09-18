import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PokemonView from '../views/PokemonView.vue'
import NewsView from '../views/NewsView.vue'

import DefaultLayout from "@/layout/DefaultLayout.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'About',
        component: AboutView
      },
      {
        path: '/pokemon',
        name: 'Pokemon',
        component: PokemonView
      },
      {
        path: '/news',
        name: 'News',
        component: NewsView
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
