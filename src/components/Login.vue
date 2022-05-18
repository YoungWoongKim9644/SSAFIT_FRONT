<template>
  <span>
      <form action="">
        <div>
        <label for="id">아이디</label>
        <input type="text" id="id" v-model="id">
        </div>

        <div>
        <label for="pw">비밀번호</label>
        <input type="password" id="pw">
        </div>
      </form>
      <button @click="Login" >로그인</button>
  </span>
</template>

<script>
export default {

  data(){
    return{
        id : "",
        pw : ""
    }
  },

  methods : {
    Login(){
      
      let user = {
        id : this.id,
        pw : this.pw
      }

      this.$store.dispatch('Login', user)
    }
  }
}
</script>

<style>

</style>