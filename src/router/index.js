import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import ConcertView from '@/views/ConcertView.vue'
import MemberView from '@/views/MemberView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/concert',
    name: 'ConcertView',
    component: ConcertView
  },
  {
    path: '/member',
    name: 'MemberView',
    component: MemberView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
