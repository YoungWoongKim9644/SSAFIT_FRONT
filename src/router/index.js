import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import MyPage from '../views/MyPage.vue'
import Video from '../views/Video.vue'
import Calendar from '../views/Calendar.vue'
import TodoList from '../views/TodoList.vue'
import Join from '../components/Join.vue'
/*componenets

import ReviewDetail from '../componenets/video/ReviewDetail.vue'
import ReviewList from '../componenets/video/ReviewList.vue'
import ReviewUpdate from '../componenets/video/ReviewUdpate.vue'
import ReviewWrite from '../componenets/video/ReviewWrite.vue'

import FollowList from '../componenets/mypage/followList.vue'
import UpdateInfo from '../componenets/mypage/updateInfo.vue'
*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'main',
    component : Main
  },
  {
    path: '/mypage/:id',
    name: 'mypage',
    component: MyPage
  },
  {
    path: '/video/:youtube_id',
    name: 'video',
    component: Video
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
