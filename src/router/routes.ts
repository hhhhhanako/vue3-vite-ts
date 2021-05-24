import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    name: 'test',
    path: '/test',
    component: () => import('/@/pages/test.vue')
  },
]

export default routes