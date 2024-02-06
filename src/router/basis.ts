import { RouteRecordRaw } from 'vue-router';
import BasisLayout from '@/layout/index.vue';

// 基础路由

export const BasisRouterMap: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('/src/views/login/index.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('/src/views/error-pages/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('/src/views/error-pages/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('/src/views/error-pages/500.vue')
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: BasisLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('/src/views/dashboard/index.vue')
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('/src/views/table-demo/index.vue')
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('/src/views/form-demo/index.vue')
      }
    ]
  }
];

// 白名单(路径)
export const whiteList = ['/login', '/403', '/404', '/500'];
