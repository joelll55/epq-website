import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
	// @ts-ignore
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
