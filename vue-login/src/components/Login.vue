<template>
  <div>
    <h1>登录界面</h1>
    用户名：<Input/><br/>
    密码：<Input/><br/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import {setToken} from "../assets/js/token";

  export default {
    methods: {
      login() {
        setToken('admin')
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>

</style>
