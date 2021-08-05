<template>
  <div class="signup">
    <main>
      <h1>新規登録画面</h1>
      <p v-if="message">メール認証が終わっていません。メールを確認して認証を完了してください。（認証メールを再送信する。）</p>
      <ul>
        <li>
          <label for="username">ユーザー名</label>
          <input type="text" id="username" placeholder="userName" class="inputStyle" v-model="username"/>
        </li>
        <li>
          <label for="mailaddress">メールアドレス</label>
          <input type="email" id="mailaddress" placeholder="E-mail" v-model="mailaddress"/>
        </li>
        <li>
          <label for="password">パスワード</label>
          <input type="password" id="password" placeholder="Password" v-model="password"/>
        </li>
      </ul>
      <button class="btn-style1" @click="signUp">新規登録</button>
      <p><router-link to="/signin" class="link-style">ログインはこちらから</router-link></p>
    </main>
    <footer>
      <p>Copyright ©2019 ○○Inc. All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      mailaddress: '',
      password: '',
      message: false
    }
  },
  methods: {
    signUp () {
      this.message = true
      this.$store.dispatch('signUp', {username: this.username, mailaddress: this.mailaddress, password: this.password})
    }
  }
}
</script>
