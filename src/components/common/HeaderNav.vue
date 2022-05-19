<template>
  <div>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'home' }">메인</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/board">게시판목록</b-nav-item>
          <b-nav-item :to="{ name: 'boardCreate' }">게시판등록</b-nav-item>
          <b-nav-item to="/tmdb">TMDB</b-nav-item>
          <b-nav-item to="/map">카카오Map</b-nav-item>
          <b-nav-item v-if="!isLogin" to="/login">로그인</b-nav-item>
          <b-nav-item v-else @click="doLogout">로그아웃</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
  <router-view/>
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

<style></style>
