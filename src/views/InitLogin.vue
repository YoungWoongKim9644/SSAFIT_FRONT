<template>
<<<<<<< HEAD
  <div class="login">
    <h2>대문 페이지</h2>
=======
  <div class="container">
>>>>>>> release
    <div class="m-4">
      <b-form-group label="id" label-for="input-1">
        <b-form-input id="input-1" v-model="user.id" trim></b-form-input>
      </b-form-group>
      <b-form-group label="pw" label-for="input-2">
        <b-form-input type="password" id="input-2" v-model="user.pw" trim></b-form-input>
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
      // console.log(this.$route.query.call);
      this.$store.dispatch("userLogin", {
        user: this.user,
        call: this.$route.query.call,
      });
    },
    Join(){
        this.$emit('mode', 2)
    }
  },
};
</script>

<style>

<<<<<<< HEAD
.login{
  position: relative;
}

=======
#tail{
  text-align: center;
  color: white;
  font-size: 25px;
}
#ssafy{
  text-align: center;
  color: white;
}
>>>>>>> release
</style>
