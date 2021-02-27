import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.less'; // global css

import './icons'; // iconfont

import Cookies from 'js-cookie';
Cookies.set('token', 'token');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
