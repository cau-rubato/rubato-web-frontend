import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ConcertView from '@/views/ConcertView.vue'
import MemberView from '@/views/MemberView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/concerts',
    name: 'ConcertView',
    component: ConcertView
  },
  {
    path: '/members',
    name: 'MemberView',
    component: MemberView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
