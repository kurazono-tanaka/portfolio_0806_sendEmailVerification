<template>
  <div class="home">
    <main>
      <h1>Home</h1>
      <button class="btn-style2" @click="signOut">ログアウト</button>
      <p><router-link to="" class="link-style">登録へ</router-link></p>
      <p><router-link to="" class="link-style">検索へ</router-link></p>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'home',
  data () {
    return {
      username: '',
      wallet: 0,
      userId: '',
      modalName: '',
      modalWallet: 0,
      userList: [],
      showModal: false,
      showSendModal: false,
      sendingMoney: 0,
      destinationId: ''
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    }
  },
  mounted () {     
    // ローカルストレージに保存してあるメールアドレスを取得
    const email = window.localStorage.getItem("emailForSignIn");
    console.log('emailの中身')
    console.log(email)
    if(firebase.auth().isSignInWithEmailLink(window.location.href)) {
        firebase.auth().signInWithEmailLink(email, window.location.href).then((result) => {
            // ログイン完了
            // ローカルに保存したメールアドレスを削除
            window.localStorage.removeItem("emailForSignIn");
        }).catch((error) => {
            // ローカルに保存したメールアドレスを削除
            window.localStorage.removeItem("emailForSignIn");
            console.log(`signInWithEmailLinkでエラー発生：${error}`)
        });
    } else {
        // ローカルに保存したメールアドレスを削除
        window.localStorage.removeItem("emailForSignIn");
        console.log('リンクがメールリンクによるログインではない普通のログイン？')
    }
  }
}

</script>