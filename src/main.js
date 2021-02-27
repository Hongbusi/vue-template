import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.less'; // global css
import i18n from './lang'; // internationalization
import './icons'; // iconfont

import Cookies from 'js-cookie';
Cookies.set('token', 'token');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
