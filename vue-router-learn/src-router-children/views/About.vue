<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>

</style>
