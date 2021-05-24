import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App) {
  app.use(router)
}
export default router