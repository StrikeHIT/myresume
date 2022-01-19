import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import PopupLayer from 'vue-popup-layer'
import VueCloneya from 'vue-cloneya'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(PopupLayer)
Vue.use(VueCloneya)
Vue.use(VueMeta)

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
  metaInfo: {
    charset: 'utf-8' ,
    title: 'Meu Currículo Grátis',
    name: 'viewport', content: 'width=device-width, initial-scale=1',
    titleTemplate: '%s | Simples e Rápido'
  },
  data: {
    show: true
  },
  render: h => h(App)
}).$mount('#app')
