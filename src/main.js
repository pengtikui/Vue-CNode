import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import normalize from 'normalize.css'
import * as filters from './filters'

Vue.use(VueResource)

Vue.filter('formatDate', function(time) {
    return Date.prase(time)
})

Vue.http.options.root = 'https://cnodejs.org/api/v1'

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
