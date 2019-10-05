import Vue from 'vue'
import App from '../App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.getElementsByTagName('body')[0].setAttribute('id', to.name)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
