import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask';

Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/styles.scss'
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
