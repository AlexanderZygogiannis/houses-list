import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/tailwind.css'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate', function(value: string) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
