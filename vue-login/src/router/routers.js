import Main from '@/components/Main'
import Login from '@/components/Login'
import User from '@/components/User'

export default [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]
