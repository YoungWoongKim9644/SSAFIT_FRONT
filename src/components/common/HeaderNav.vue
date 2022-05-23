<template>
  <div>
  <header>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand :to="{ name: 'home' }">
        <ul class="menu">
        <li style="text-align: center">
          <div id="logo">
            <img src="..\src\assets\SSAFIT.png" alt="ssafit" width="450px">
          </div>
          <ul class="depth_1">
            <b-nav-item to="/board">게시판목록</b-nav-item>
            <b-nav-item :to="{ name: 'boardCreate' }">게시판등록</b-nav-item>
            <b-nav-item to="/mypage">마이페이지</b-nav-item>
            <b-nav-item v-if="!isLogin" to="/login">로그인</b-nav-item>
            <b-nav-item v-else @click="doLogout">로그아웃</b-nav-item>
            <!-- <li><a href="#">게시판 목록</a></li>
            <li><a href="#">게시판 등록</a></li>
            <li><a href="#">로그아웃</a></li> -->
          </ul>
        </li>
      </ul>
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
    <div id="video">
    <video src='https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-heavy-ropes-in-the-gym-23141-large.mp4' type="video/mp4" autoplay muted loop width="2100"></video>
    </div>
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
/* #b-navbar-brand {
  text-align: center;
} 안됨 */

/* #logo:hover {
  background-color: gold
} */
*{margin:0; padding:0; font-family: 'KoPubDotumMedium'}
ul{list-style:none;}
a{text-decoration:none; color:#333;}
.menu:after{display:block; content:''; clear:both;}
.menu > li{position:relative; float:left; margin-right:5px;}
.menu > li > a{display:block; padding:0 15px; background:#333; height:40px; line-height:40px; color:#fff;}
.menu > li:hover .depth_1 {display:block;}
.menu .depth_1{display:none; position:absolute; left:0; right:0; text-align:center;}
.menu .depth_1 a{display:block; padding:5px; background:#666; color:#fff; width: 80%;}
.ml-auto > b-nav-item:link {
    text-decoration: none;
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