import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';

import ApiService from './common/api.service';

ApiService.init();

import './styles/index.scss'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
