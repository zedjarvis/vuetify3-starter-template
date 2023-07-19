// Composables
import fileRoutes from '~pages' // file routes
import { setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: setupLayouts(fileRoutes),
})

export default router
