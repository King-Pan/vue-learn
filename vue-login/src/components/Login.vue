<template>
  <div>
    <h1>登录界面</h1>
    <div class="row">
      <div >
        <span class="text-span">用户名</span>
        <input v-model="user.userName"/>
      </div>
      <div>
        <span class="text-span" style="">密码</span>
        <input type="password" v-model="user.password"/>
      </div>
    </div>
    <button @click="login">登录</button>


    <Form>
      <FormItem label="Input">
        <Input v-model="user.userName" placeholder="Enter something..."></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {setToken} from "../assets/js/token";

  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      login() {
        setToken('admin')
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
  .text-span{
    width: 100px;
    text-align: right;
  }
</style>
