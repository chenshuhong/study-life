import Vue from 'vue'
import './styles/index.less'
import './plugins'
import App from './App.vue'
import router from './views/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
