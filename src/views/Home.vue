<template>
  <div>
      정문 페이지
    <login></login>
    <a href="" @click="ToJoin">회원가입</a>
  </div>
</template>

<script>

import Login from '../components/Login.vue'
import Join from '../components/Join.vue'

export default {
    components : {
        Login,
        Join
    },

    methods : {
        ToJoin(){
          this.$router.push('/join')
        }
    }
}
</script>

<style>

</style>