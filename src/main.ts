import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@/router'


(async () => {
  const app = createApp(App)

  setupRouter(app)
  await router.isReady()
  app.mount('#app',true)
})()