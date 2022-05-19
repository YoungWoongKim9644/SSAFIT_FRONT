<template>
  <div>
    <b-nav tabs align="center"> 
      <b-nav-item to="/tmdb/toprated" :active="$route.name == 'toprated'" >탑 순위</b-nav-item>
      <b-nav-item to="/tmdb/popular" :active="$route.name == 'popular'">인기 순위</b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "TMDBView"
};
</script>

<style>
</style>
