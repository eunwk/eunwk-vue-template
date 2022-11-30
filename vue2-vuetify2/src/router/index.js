import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../layouts/SinglePageLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "index" */ '../views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "index" */ '../layouts/SubPageLayout.vue'),
    children: [
      {
        path: '/sub1',
        name: 'SubPage1',
        component: () => import(/* webpackChunkName: "index" */ '../views/SubPage1.vue'),
      },
      {
        path: '/sub2',
        name: 'SubPage2',
        component: () => import(/* webpackChunkName: "index" */ '../views/SubPage2.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
