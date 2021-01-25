import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import {router} from '@/routes/routes.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
