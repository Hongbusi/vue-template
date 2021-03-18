import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Cookies from 'js-cookie';
Vue.prototype.$cookie = Cookies;

import moment from 'moment';
moment.locale('zh-cn');
Vue.prototype.$moment = moment;

import './styles/index.less'; // global css
import i18n from './lang'; // internationalization
import './icons'; // iconfont

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
