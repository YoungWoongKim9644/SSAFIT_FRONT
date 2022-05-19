<template>
  <div class="container">
    <h2>회원가입</h2>
    <div class="m-4">
       <b-form-group label="이름" label-for="input-1">
        <b-form-input id="input-1" v-model="user.userName" trim></b-form-input>
      </b-form-group>
      <b-form-group label="아이디" label-for="input-1">
        <b-form-input id="input-1" v-model="user.id" trim></b-form-input>
      </b-form-group>
      <b-form-group label="비밀번호" label-for="input-2">
        <b-form-input type="password" id="input-2" v-model="user.pw" trim></b-form-input>
      </b-form-group>
      <b-form-group label="이메일" label-for="input-1">
        <b-form-input id="input-1" v-model="user.email" trim></b-form-input>
      </b-form-group>
      <b-form-group label="전화번호" label-for="input-1">
        <b-form-input id="input-1" v-model="user.phone" trim></b-form-input>
      </b-form-group>
      <b-button class="mx-3" variant="outline-success" @click="Join">가입하기</b-button>
      <b-button class="mx-3" variant="outline-warning" @click="Cancel">취소</b-button>
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
        userName :"",
        email: "",
        phone : ""
      },
    };
  },
  methods: {
    Join() {
      // console.log(this.$route.query.call);
      this.$store.dispatch("insertUser", {user: this.user});
      this.$emit('mode', 1)
    },
    Cancel(){
      this.$emit('mode', 1)
    }
  },
};
</script>

<style></style>
