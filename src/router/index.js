import Vue from 'vue'
import Router from 'vue-router'
import PortfolioTop from '@/components/PortfolioTop'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Home from '@/components/home'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PortfolioTop',
      component: PortfolioTop,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('toの中身')
  console.log(to)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log('requiresAuthの中身')
  console.log(requiresAuth)
  // let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next()
        console.log('userあり')
      } else {
        console.log('userなし')
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
