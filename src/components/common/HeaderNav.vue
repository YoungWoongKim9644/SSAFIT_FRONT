<template>
  <div>
  <header>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand :to="{ name: 'home' }">
        <div class="dropdown">
          <span class = "dropbtn_icon">
            <img src="..\src\assets\SSAFIT.png" alt="ssafit" width="120px"></span>
          <div class="dropdown-content">
            <b-nav-item to="/board">게시판목록</b-nav-item>
            <b-nav-item :to="{ name: 'boardCreate' }">게시판등록</b-nav-item>
            <b-nav-item to="/mypage">마이페이지</b-nav-item>
            <b-nav-item v-if="!isLogin" to="/login">로그인</b-nav-item>
            <b-nav-item v-else @click="doLogout">로그아웃</b-nav-item>
            <!-- <li><a href="#">게시판 목록</a></li>
            <li><a href="#">게시판 등록</a></li>
            <li><a href="#">로그아웃</a></li> -->
            </div>
          </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" type="dark">
          <b-nav-item to="/mypage">
          <img src="..\src\assets\user.png" alt="user" width="35px">
          마이페이지</b-nav-item>
          <!-- <b-nav-item :to="{ name: 'boardCreate' }">게시판등록</b-nav-item>
          <b-nav-item v-if="!isLogin" to="/login">로그인</b-nav-item>
          <b-nav-item v-else @click="doLogout">로그아웃</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
  <div id="back">
    <b-carousel
      id="carousel"
      fade
      class="text-center"
      v-model="slide"
      :interval="6000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      >

    <div v-for="(video, index) in videos" :key="index" ref="partList" >
      <b-carousel-slide class="text-center" id="video">
        <template #img id="box">
          <video :src=video type="video/mp4" autoplay muted loop width="2100"></video>
        </template>
      </b-carousel-slide>
    </div>
    </b-carousel> 

    <div id="compo">
  <router-view/>
  </div>

  </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HeaderView",
  data(){
    return{
      videos : [
        'https://assets.mixkit.co/videos/preview/mixkit-man-and-woman-jogging-together-on-the-street-40881-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-warm-up-exercises-583-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-blue-sea-with-big-clouds-2893-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-starry-sky-on-a-quiet-night-in-the-forest-31613-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-woman-stretching-her-arms-780-large.mp4'
        ]
    }
  },

  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    ...mapMutations(["USER_LOGOUT"]),
    doLogout() {
      this.USER_LOGOUT();
    },
  },
};
</script>

<style>

.dropdown{
  position : relative;
  display : inline-block;
}

.dropbtn_icon{
  font-family : 'Material Icons';
}
/* .dropbtn{
  border : 1px solid rgb(37, 37, 37);
  border-radius : 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color : rgb(37, 37, 37);
  padding : 12px;
  width :200px;
  text-align: left;
  cursor : pointer;
  font-size : 12px;
} */
.dropdown-content{
  display : none;
  position : absolute;
  z-index : 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width : 644px;
  list-style: none;
  margin-top: 17px;
}

.dropdown-content a{
  float:left;
  display : block;
  text-decoration : none;
  color : rgb(37, 37, 37);
  font-size: 17px;
  padding : 10px 20px;
  float:left;
}

.dropdown-content a:hover{
  background-color : #ececec
}

.dropdown:hover .dropdown-content {
  display: inline;
}

@font-face {
    font-family: 'KoPubDotumMedium';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/KoPubDotumMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#back{
  position: relative;
  margin: 0px auto;
}

#compo{
  position: absolute;
  z-index: 1;
  top : 0%;
  left : 20%;
}
#video{
   width: 100%;
  height: 100vh;
  overflow:visible
}

</style>