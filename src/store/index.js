import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import router from '@/router'

Vue.use(Vuex)

const state = {
  username: '',
  mailaddress: '',
  password: ''
}

const mutations = {
  setUserName (state, username) {
    state.username = username
  },
  setMailAddress (state, mailaddress) {
    state.mailaddress = mailaddress
  },
  setPassword (state, password) {
    state.password = password
  }
}

const getters = {
  getUserName: (state) => {
    return state.username
  }
}

const actions = {
  signUp ({commit}, {username, mailaddress, password}) {
    firebase.auth().createUserWithEmailAndPassword(mailaddress, password).then((response) => {
      const user = response.user
      firebase.firestore().collection('users').add({
        name: username,
        email: user.email,
        wallet: 2000
      }).then((doc) => {
        console.log(`DB追加に成功しました`)
        firebase.auth().currentUser.updateProfile({
          displayName: username
        }).then(() => {
          console.log(`ユーザ名登録に成功しました`)
          console.log(username)
          //メール認証
          const actionCodeSettings = {
            url: "http://" + location.host + "/home",
            handleCodeInApp: true
          }
          firebase.auth().languageCode = "ja"
          const currentUser = firebase.auth().currentUser
          currentUser.sendEmailVerification(actionCodeSettings).then(() => {
            commit('setUserName', username)
            commit('setMailAddress', mailaddress)
            commit('setPassword', password)
            console.log(`メールの送信に成功しました。`)
          }).catch((error) => {
            console.log(`sendEmailVerificationでエラー発生：${error}`)
          })
        }).catch(error => {
          console.log(`currentUser.updateProfileでエラー発生：${error}`)
        })
      }).catch(error => {
        console.log(`collectionでエラー発生：${error}`)
      })
    }).catch(error => {
      console.log(`createUserWithEmailAndPasswordでエラー発生：${error}`)
    })
  },
  signIn ({commit}, {mailaddress, password}) {
    firebase.auth().signInWithEmailAndPassword(mailaddress, password).then(user => {
      const userObject = user.user
      console.log(userObject.displayName)
      commit('setUserName', userObject.displayName)
      commit('setMailAddress', mailaddress)
      commit('setPassword', password)
      router.push('/home')
    }).catch(error => {
      console.log(`エラー発生：${error}`)
    })
  },
  signOut ({commit}) {
    firebase.auth().signOut().then(() => {
      console.log('ログアウト成功！')
      commit('setUserName', '')
      commit('setMailAddress', '')
      commit('setPassword', '')
    }).catch((error) => {
      console.log(`エラー発生：${error}`)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
