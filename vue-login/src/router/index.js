import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import {getToken} from "../assets/js/token";

Vue.use(Router)

const LOGIN_PAGE_NAME = 'login'

const router = new Router({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  //判断是否登录
  const token = getToken()
  console.log(token)
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页

    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'main' // 跳转到home页
    })
  } else {
    next()
  }
})

export default router
