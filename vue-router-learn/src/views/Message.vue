<template>
  <div>
    <ul>
      <li v-for="(message,index) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <hr/>
    <h2>消息详情</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      setTimeout(() => {
        const messages = [
          {
            id: 1,
            title: 'message001'
          },
          {
            id: 2,
            title: 'message002'
          },
          {
            id: 3,
            title: 'message003'
          },
          {
            id: 4,
            title: 'message004'
          }
        ]
        this.messages = messages
      }, 100)
    }
  }
</script>

<style scoped>

</style>
