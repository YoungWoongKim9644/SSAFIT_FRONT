<template>
  <div id="app">
      <HeaderNav v-if="User.username"></HeaderNav>
      <home-view v-else></home-view>
  </div>
</template>


<script>
// @ is an alias to /src
import HeaderNav from './components/common/HeaderNav.vue'
import HomeView from './views/Home.vue'

export default {

  components: {
    HeaderNav,
    HomeView
  },
  data(){
      return{
        User : {
          id : '',
          pw : '',
          username : 'u'
        }
      }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
