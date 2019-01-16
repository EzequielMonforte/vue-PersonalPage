import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import routes from './routes';
import store from './store';



Vue.use(Router)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router= new Router({routes})


new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')
