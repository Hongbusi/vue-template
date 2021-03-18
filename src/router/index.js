import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Example',
    component: () => import(/* webpackChunkName: "Example" */ '../views/example/index')
  },
  {
    path: '/i18n',
    name: 'Example',
    component: () => import(/* webpackChunkName: "Example" */ '../views/example/i18n')
  }
];

const router = new VueRouter({
  routes
});

export default router;
