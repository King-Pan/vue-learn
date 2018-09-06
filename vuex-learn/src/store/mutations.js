/*
状态对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL, CLEAR_ALL_COMPLETE, READ_TODO_LIST} from "./mutation-types";

export default {
  [ADD_TODO](state, todo) {
    state.todoList.unshift(todo)
    console.log(state.todoList)
    console.log(todo)
  },

  [DELETE_TODO](state, index) {
    state.todoList.splice(index, 1)
  },

  [SELECT_ALL](state, isCheck) {
    state.todoList.forEach(todo => todo.complete = isCheck)
  },

  [CLEAR_ALL_COMPLETE](state) {
    state.todoList = state.todoList.filter(todo => !todo.complete)
  },

  [READ_TODO_LIST](state, todoList) {
    state.todoList = todoList
  }
}
