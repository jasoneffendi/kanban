// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'// =======================(Ed)
import firebase from 'firebase'// =======================(Ed)

Vue.use(VueFire) // =======================(Ed)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyAPZhIDRVxg4e4sOo5zBIMBMJQn2Zgnx_g',
  authDomain: 'lively-4150b.firebaseapp.com',
  databaseURL: 'https://lively-4150b.firebaseio.com',
  projectId: 'lively-4150b',
  storageBucket: 'lively-4150b.appspot.com',
  messagingSenderId: '737235271629'
}// =======================(Ed)

firebase.initializeApp(config)// =======================(Ed)

Vue.prototype.$db = firebase.database() // =======================(Ed)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
