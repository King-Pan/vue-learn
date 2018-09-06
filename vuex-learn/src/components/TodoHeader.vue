<template>
  <div class="todo-header">
    <input type="text" v-model="inputTodo" @keyup.enter="saveTodo" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>
  export default {
    name: 'TodoHeader',
    data() {
      return {
        inputTodo: ''
      }
    },
    methods:{
      saveTodo(){
        console.log('save todo')
        if(!this.inputTodo){
          alert("任务名称不能为空")
          return
        }
        //2. 封装数据
        const todo = {
          title: this.inputTodo,
          complete: false
        }
        //3. 存储数据
        this.$store.dispatch('addTodo',todo)

        //4. 情况文本框
        this.inputTodo = ''
      }
    }
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
