<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todoList" :key="index" :index="index" :todo="todo"></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  import {mapState} from 'vuex'
  import storageUtil from '../util/storageUtil'
  export default {
    name: 'TodoList',
    computed: {
      ...mapState(['todoList'])
    },
    components: {
      TodoItem
    },
    watch:{
      todoList:{
        deep: true,
        handler: storageUtil.saveTodoList
      }
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
