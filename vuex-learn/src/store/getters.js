/*
包含所有基于state的getter计算属性的对象
 */
export default {

  //todoList的总数量
  todoListSize(state) {
    return state.todoList.length
  },

  //已经完成的数量
  completeSize(state) {
    return state.todoList.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },

  //判断是否全部选中
  isAllSelect(state, getters) {
    return getters.todoListSize === getters.completeSize && state.todoList.length !== 0
  }


}
