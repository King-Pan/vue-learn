/*
 路由器模块
 path最左侧的/永远代表根路径
 */

import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  //n个路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {

          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path:'detail/:id',
              component: MessageDetail
            }
          ]
        }
      ]
    }, {
      path: '/about',
      component: About
    }, {
      path: '/',
      redirect: '/home'
    }
  ]
})
