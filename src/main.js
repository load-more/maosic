import fastclick from 'fastclick'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'common/css/index.scss'

Vue.config.productionTip = false;

fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
