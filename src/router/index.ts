import { createRouter, createWebHashHistory } from 'vue-router';
import { BasisRouterMap } from './basis';

// 实例化路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: BasisRouterMap
});

export default router;
