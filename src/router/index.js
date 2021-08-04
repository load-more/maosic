import Vue from 'vue';
import VueRouter from 'vue-router';
import Recommend from 'components/recommend/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    component: Recommend, // 首屏路由，直接加载
  },
  {
    path: '/singer',
    component: () => import('components/singer/index.vue'), // 非首屏路由，异步加载
  },
  {
    path: '/rank',
    component: () => import('components/rank/index.vue'),
  },
  {
    path: '/search',
    component: () => import('components/search/index.vue'),
  },
  {
    path: '/user',
    component: () => import('components/user/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
