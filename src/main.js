// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const firebaseConfig = {
  apiKey: "AIzaSyBDvaJWNmtUtAk3fHtduSr5IPPr3XIyfiA",
  authDomain: "portfolio-e7c2b.firebaseapp.com",
  projectId: "portfolio-e7c2b",
  storageBucket: "portfolio-e7c2b.appspot.com",
  messagingSenderId: "626341696989",
  appId: "1:626341696989:web:d8b5f54bb41113aeae1234"
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
