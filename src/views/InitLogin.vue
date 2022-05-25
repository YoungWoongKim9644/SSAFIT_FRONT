<template>
  <div id="init" class="container">
    <div class="m-4">
      <b-form-group label="ID"
       label-for="input-1"
       label-cols-lg="1"
       label-size="lg"
       >
        <b-form-input id="input-1" style="width: 200px;" v-model="user.id" trim></b-form-input>
      </b-form-group>
      <b-form-group label="PW"
       label-for="input-2"
       label-cols-lg="1"
       label-size="lg"

       >
        <b-form-input type="password" id="input-2" style="width: 200px;" v-model="user.pw" trim></b-form-input>
      </b-form-group>
      <b-button class="mx-3" variant="outline-success" @click="login">로그인</b-button>
      <b-button class="mx-3" variant="outline-warning" @click="Join">회원가입</b-button>
    </div>
    <div class="">
    <div id="tail"><strong> S S A F I T</strong></div>
    <div id="ssafy">김영웅, 박범수</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        pw: "",
      },
    };
  },
  methods: {
    login() {
      if(this.user.id.length > 0){

      this.$store.dispatch("userLogin", {
        user: this.user,
        call: this.$route.query.call,
      })
      };
    },
    Join(){
        this.$emit('mode', 2)
    }
  },

};
</script>

<style>

#tail{
  text-align: center;
  color: white;
  font-size: 25px;
}
#ssafy{
  text-align: center;
  color: white;
}
#init label{
  color: aliceblue;
  font-weight: bold;
}
</style>
