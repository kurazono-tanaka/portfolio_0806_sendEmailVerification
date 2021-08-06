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
  }
}

</script>