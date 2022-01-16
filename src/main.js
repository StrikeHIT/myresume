import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import PopupLayer from 'vue-popup-layer'
import VueCloneya from 'vue-cloneya'

Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(PopupLayer)
Vue.use(VueCloneya)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/styles.scss'
import 'vue-step-progress/dist/main.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue'


new Vue({
  router,
  store,
  el: '#app',
  data: {
    show: true
  },
  render: h => h(App)
}).$mount('#app')
