<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  width: 700px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  width: 280px;
  margin: 0 auto;
  padding:0;
  text-align: right;
}

label {
  display:inline-block;
  width: 120px;
  text-align: center;
}

.btn-style1 {
  display:block;
  margin: 50px auto 0;
  width: 100px;
  height: 40px;
  border: #1E90FF solid 1px;
  border-radius: 4px;
  background-color: white;
  color: #1E90FF;
  cursor: pointer
}

.btn-style2 {
  display:block;
  margin: 0 0 0 20px;
  width: 100px;
  height: 30px;
  border-style: none;
  border-radius: 4px;
  background-color:#005FFF;
  color: white;
  cursor: pointer
}

.link-style {
  color: #1E90FF;
  text-decoration: none;
}

p {
  margin: 0;
}

footer {
  margin-top: 70px;
  font-size: 10px;
}

header {
  display:flex;
  justify-content: space-around;
  height: 35px;
}

.header-username {
  line-height: 35px;
}

.header-content {
  display:flex;
  align-items:center;
}

table {
  width: 200px;
}

#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background-color:rgba(0,0,0,0.5);
  transition: all .9s ease;
}

#overlay-sendmodal {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background-color:rgba(0,0,0,0.5);
  transition: all .9s ease;
}

#modal {
  border: 1px solid block;
  width: 140px;
  height: 120px;
  text-align: center;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 3px;
  border-radius: 4px;
  padding-top:10px;
  transition: all .9s ease;
}

#sendmodal {
  border: 1px solid block;
  width: 200px;
  height: 160px;
  text-align: center;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 3px;
  border-radius: 4px;
  padding-top:10px;
  transition: all .9s ease;
}

.modal-sentences {
  margin-bottom: 10px;
}

.modal-input {
  margin-top: 10px;
}

.modal-footer {
  height: 50px;
  width: 100%;
  background-color: #CCCCCC;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 4px 4px;
}

.btn-style-close {
  display: block;
  width: 55px;
  height: 30px;
  background-color: red;
  color: white;
  margin-top: 15px;
  margin-left: 80px;
  border: none;
  cursor: pointer;
}

.btn-style-send {
  display: block;
  width: 55px;
  height: 30px;
  background-color: red;
  color: white;
  margin-top: 15px;
  margin-left: 140px;
  border: none;
  cursor: pointer;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter #modal,
.v-enter #modal-sentences {
  opacity: 0;
  transform: translateY(-50px);
}

.v-leave-to #modal,
.v-leave-to #modal-sentences {
  opacity: 0;
  transform: translateY(-50px);
}

table {
  width: 100%;
}

.table-name {
  padding-left: 100px;
  padding-right: 200px;
  width: 100px;
}

.table-wallet {
  width: 100px;
}

.table-send {
  width: 50px;
  margin-right: 100px;
}

.table-button {
  background-color: #00CCCC;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


</style>
