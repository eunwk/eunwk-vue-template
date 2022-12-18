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
    component: () => import(/* webpackChunkName: 'sub' */ '../layouts/SubPageLayout.vue'),
    children: [
      {
        path: '/template/card-layout',
        name: 'Responsive',
        component: () => import(/* webpackChunkName: 'template' */ '../views/CardLayout.vue'),
      },
      {
        path: '/template/search-grid',
        name: 'SearchGrid',
        component: () => import(/* webpackChunkName: 'template' */ '../views/SearchGrid.vue'),
      },
      {
        path: '/custom-component/section-title',
        name: 'CustomSectionTitle',
        component: () => import(/* webpackChunkName: 'component' */ '../views/CustomSectionTitle.vue'),
      },
      {
        path: '/custom-component/search-area',
        name: 'CustomSearchArea',
        component: () => import(/* webpackChunkName: 'component' */ '../views/CustomSearchArea.vue'),
      },
      {
        path: '/custom-component/message-box',
        name: 'CustomMessageBox',
        component: () => import(/* webpackChunkName: 'component' */ '../views/CustomMessageBox.vue'),
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
