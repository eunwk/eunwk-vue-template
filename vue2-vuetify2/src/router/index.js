import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'index' */ '../layouts/SinglePageLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: 'index' */ '../views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'index' */ '../layouts/SubPageLayout.vue'),
    children: [
      {
        path: '/vuetify/components',
        name: 'VuetifyComponents',
        component: () => import(/* webpackChunkName: 'index' */ '../views/VuetifyComponents.vue'),
      },
      {
        path: '/vuetify/theme',
        name: 'VuetifyTheme',
        component: () => import(/* webpackChunkName: 'index' */ '../views/VuetifyTheme.vue'),
      },
      {
        path: '/html/sub1',
        name: 'HtmlSub1',
        component: () => import(/* webpackChunkName: 'index' */ '../views/HtmlSub1.vue'),
      },
      {
        path: '/html/sub2',
        name: 'HtmlSub2',
        component: () => import(/* webpackChunkName: 'index' */ '../views/HtmlSub2.vue'),
      },
      {
        path: '/css/sub1',
        name: 'CssSub1',
        component: () => import(/* webpackChunkName: 'index' */ '../views/CssSub1.vue'),
      },
      {
        path: '/css/sub2',
        name: 'CssSub2',
        component: () => import(/* webpackChunkName: 'index' */ '../views/CssSub2.vue'),
      },
      {
        path: '/javascript',
        name: 'SubPage3',
      },
      {
        path: '*', // 404
        name: 'NotPound', // name은 파일명에 맞추거나, 화면 ID로 지정한다. 중복될수 없다.
        component: () => import('../views/404.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
