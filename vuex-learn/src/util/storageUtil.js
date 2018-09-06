/*
storage 工具类模块

*/

const TODO_LIST = 'todo_list_key'
export default {

  readTodoList() {
    return JSON.parse(window.localStorage.getItem(TODO_LIST) || '[]')
  },
  saveTodoList(todoList) {
    window.localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
  }
}
