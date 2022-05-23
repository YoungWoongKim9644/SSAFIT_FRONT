<template>
  <div>
      <b-card>
        <form action="">
          <div>
          <label for="id">아이디</label>
            <input type="text" id="id" v-model="user.id">
          </div>

          <div>
          <label for="pw">비밀번호</label>
            <input type="password" id="pw" v-model="user.pw">
          </div>
        </form>
      </b-card>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

  data(){
    return{
    }
  },

  computed:{
    ...mapState(["user"])
  }
}
</script>

<style>

</style>