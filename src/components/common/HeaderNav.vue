<template>
<header>
  <nav>
      <router-link :to="{name : 'main'}"> 메인 </router-link>
      <router-link :to="`mypage/${user.id}`"> 메뉴 1 </router-link>
      <router-link :to="`mypage/${user.id}`"> 메뉴 2 </router-link>
      <a href="" @click="ToLogin">로그아웃</a>
  </nav>
  <router-view></router-view>
</header>
</template>

<script>
export default {

    data(){
        return{
            user :{
                id : "kim"
            }
        }
    },

    methods: {
        ToLogin(){
            this.$router.push('/home')
        }
    }
}
</script>

<style>

</style>