import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

console.log(import.meta.env);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/snapshot',
      name: 'snapshot',
      component: () => import('@/views/Snapshot/SnapshotView.vue')
    },
    {
      path: '/trends',
      name: 'trends',
      component: () => import('@/views/Trends/TrendsView.vue')
    },
    {
      path: '/structure',
      name: 'structure',
      component: () => import('@/views/Structure/StructureView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/AboutView.vue')
    }
  ]
})

export default router
