<template>
  <div>
    <header-nav v-if="isLogin"></header-nav>
    <InitLogin @mode="changeMode" v-if="mode == 1 && !isLogin"></InitLogin>
    <InitJoin @mode="changeMode" v-if="mode == 2 && !isLogin"></InitJoin>
    
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue"
import InitLogin from "@/views/InitLogin.vue"
import InitJoin from "@/views/InitJoin.vue"
import {mapState} from "vuex"

export default {
  components: {
    HeaderNav,
    InitLogin,
    InitJoin
  },

  data(){
    return{
      mode : 1
    }
  },

  methods :{
    changeMode(val){
      this.mode = val
    }
  },

  computed :{
    ...mapState(["isLogin"]),
  }

}
</script>

<style>

</style>
