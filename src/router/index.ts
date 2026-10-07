import { createRouter, createWebHistory } from 'vue-router'
import { preferredScrollBehavior } from '../motion'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/resume', component: ResumeView },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: preferredScrollBehavior() }
    }
    return { top: 0, behavior: 'instant' }
  },
})

export default router
