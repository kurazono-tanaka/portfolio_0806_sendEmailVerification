<template>
  <div class="completion">
    <main>
      <h1>認証が完了しました</h1>
      <button class="btn-style2">
        <router-link to="/home" class="button-kigou">ホーム画面へ</router-link>
      </button>
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
  name: 'completion',
  mounted () {     
    // ローカルストレージに保存してあるメールアドレスを取得
    const email = window.localStorage.getItem("emailForSignIn");
    console.log('emailの中身')
    console.log(email)
    console.log('window.location.hrefの中身')
    console.log(window.location.href)
    if(firebase.auth().isSignInWithEmailLink(window.location.href)) {
        firebase.auth().signInWithEmailLink(email, window.location.href).then((result) => {
            // ログイン完了
            // ローカルに保存したメールアドレスを削除
            window.localStorage.removeItem("emailForSignIn");
            console.log('メール認証成功')
        }).catch((error) => {
            // ローカルに保存したメールアドレスを削除
            window.localStorage.removeItem("emailForSignIn");
            console.log(`signInWithEmailLinkでエラー発生：${error}`)
        });
    } else {
        // ローカルに保存したメールアドレスを削除
        window.localStorage.removeItem("emailForSignIn");
        console.log('メールリンクからの遷移ではない')
    }
  }
}
</script>