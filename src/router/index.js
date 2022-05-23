import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";

import Calendar from '@/components/main/Calendar.vue'
import Todo from '@/components/main/Todo.vue'
import VideoForm from '@/components/main/VideoForm.vue'

import ReviewDetail from '@/components/video/ReviewDetail'
import ReviewList from '@/components/video/ReviewList'
import ReviewUpdate from '@/components/video/ReviewUpdate'
import ReviewWrite from '@/components/video/ReviewWrite'
import ReviewDelete from '@/components/video/ReviewDelete'

import BoardList from "@/components/board/BoardList.vue";
import BoardCreate from "@/components/board/BoardCreate.vue";
import BoardUpdate from "@/components/board/BoardUpdate.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";

import TMDBView from "@/views/TMDBView.vue";
import TMDBTopRated from "@/components/tmdb/TMDBTopRated.vue";
import TMDBPopular from "@/components/tmdb/TMDBPopular.vue";

import KakaoMapView from "@/views/KakaoMapView.vue";
import MyPage from "@/views/MyPage.vue";
import MemberLogin from "@/components/member/MemberLogin.vue";
import MemberJoin from "@/components/member/MemberJoin.vue"

import store from "@/store";

Vue.use(VueRouter);


const loadReview = () => (from, to, next) => {
 store.dispatch('getReviews', store.state.videos[Number(from.params.id)].id)
 console.log("리뷰")
 console.log(store.state.reviews)
  next();
};

const loadTodo = () => (from, to, next) => {
  store.dispatch('getTodos', store.state.user.id)
  console.log("loadTodo")
   next();
 };

const checkLogin = () => (from, to, next) => {
  if (store.state.isLogin) {
    next();
  } else {
    if (
      confirm(
        "로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?"
      )
    ) {
      console.dir(from);
      next(`/login?call=${from.fullPath}`);
    }
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    beforeEnter : loadTodo(),
    component: HomeView,
  },
  {
    path: "/video/:id",
    name: "video",
    component: VideoForm,
    children: [
      {
        path: "",
        name: "reviewList",
        beforeEnter : loadReview(),
        component: ReviewList,
      },
      {
        path: "reviewDetail",
        name: "reviewDetail",
        component: ReviewDetail,
      },
      {
        path: "reviewUpdate",
        name: "reviewUpdate",
        component: ReviewUpdate,
      },
      {
        path: "reviewWrite/:",
        name: "reviewWrite",
        component: ReviewWrite,
      },
      {
        path: "reviewDelete",
        name: "reviewDelete",
        component: ReviewDelete,
      },
    ],
  },

  {
    path: "/todo",
    name: "todo",
    component: Todo,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar,
  },
  {
    path: "/join",
    name: "join",
    component: MemberJoin,
  },
  
  {
    path: "/board",
    component: BoardView,
    children: [
      {
        path: "",
        name: "boardList",
        component: BoardList,
        beforeEnter: checkLogin(),
      },
      {
        path: "create",
        name: "boardCreate",
        component: BoardCreate,
        beforeEnter: checkLogin(),
      },
      {
        path: "update",
        name: "boardUpdate",
        component: BoardUpdate,
      },
      {
        path: ":id",
        name: "boardDetail",
        component: BoardDetail,
      },
    ],
  },
  {
    path: "/tmdb",
    name: "tmdb",
    component: TMDBView,
    children: [
      {
        path: "toprated",
        name: "toprated",
        component: TMDBTopRated,
      },
      {
        path: "popular",
        name: "popular",
        component: TMDBPopular,
      },
    ],
  },
  {
    path: "/map",
    name: "map",
    component: KakaoMapView,
    beforeEnter: checkLogin(),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MyPage,
  },
  {
    path: "/login",
    name: "login",
    component: MemberLogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
