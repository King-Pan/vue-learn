/*
接受组件通知触发mutations调用，间接更新状态的方法的对象
 */

import {ADD_TODO, DELETE_TODO, SELECT_ALL, CLEAR_ALL_COMPLETE, READ_TODO_LIST} from "./mutation-types"
import storageUtil from '../util/storageUtil'

export default {
  addTodo({commit}, todo) {
    console.log('actions-addTodo')
    commit(ADD_TODO, todo)
  },

  deleteSelectTodo({commit}, index) {
    commit(DELETE_TODO, index)
  },

  selectAllTodos({commit}, isCheck) {
    commit(SELECT_ALL, isCheck)
  },

  clearSelectComplete({commit}) {
    commit(CLEAR_ALL_COMPLETE)
  },
  //异步获取todoList并更新状态
  reqTodoList({commit}) {
    setTimeout(() => {
      //读取数据
      const todoList = storageUtil.readTodoList()
      commit(READ_TODO_LIST, todoList)
    }, 1000)
  }
}
