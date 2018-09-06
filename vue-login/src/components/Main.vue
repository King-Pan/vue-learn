<template>
  <div>
    <h1>主页面</h1>
    欢迎!<b @click="login">点这里登录</b>
    <br/>
    <button @click="logout">退出</button>
  </div>
</template>

<script>
  import {clearToken} from "../assets/js/token";

  export default {
    name: 'Main',
    methods: {
      login() {
        this.$router.replace('/login')
      },
      logout(){
        clearToken()
        this.$router.push('/user')
      }
    }
  }
</script>

<style scoped>

</style>
